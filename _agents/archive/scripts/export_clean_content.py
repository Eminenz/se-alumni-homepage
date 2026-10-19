"""
Export full clean markdown and structured content from scraped Jimdo props.
"""
import os
import sys
import json
import re

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

DATA_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "scraped_data")
CONTENT_EXPORT_DIR = os.path.join(DATA_DIR, "site_content")
os.makedirs(CONTENT_EXPORT_DIR, exist_ok=True)

def html_to_md(html_str):
    if not html_str:
        return ""
    s = html_str
    # Replace headings
    s = re.sub(r'<h1[^>]*>(.*?)</h1>', r'# \1\n\n', s, flags=re.I|re.S)
    s = re.sub(r'<h2[^>]*>(.*?)</h2>', r'## \1\n\n', s, flags=re.I|re.S)
    s = re.sub(r'<h3[^>]*>(.*?)</h3>', r'### \1\n\n', s, flags=re.I|re.S)
    s = re.sub(r'<h4[^>]*>(.*?)</h4>', r'#### \1\n\n', s, flags=re.I|re.S)
    s = re.sub(r'<strong>(.*?)</strong>', r'**\1**', s, flags=re.I|re.S)
    s = re.sub(r'<b>(.*?)</b>', r'**\1**', s, flags=re.I|re.S)
    s = re.sub(r'<em>(.*?)</em>', r'*\1*', s, flags=re.I|re.S)
    s = re.sub(r'<i>(.*?)</i>', r'*\1*', s, flags=re.I|re.S)
    s = re.sub(r'<a[^>]+href=[\"\']([^\"\']+)[\"\'][^>]*>(.*?)</a>', r'[\2](\1)', s, flags=re.I|re.S)
    s = re.sub(r'<br\s*/?>', r'\n', s, flags=re.I)
    s = re.sub(r'<p[^>]*>(.*?)</p>', r'\1\n\n', s, flags=re.I|re.S)
    s = re.sub(r'<li[^>]*>(.*?)</li>', r'- \1\n', s, flags=re.I|re.S)
    s = re.sub(r'<ul[^>]*>(.*?)</ul>', r'\1\n', s, flags=re.I|re.S)
    s = re.sub(r'<ol[^>]*>(.*?)</ol>', r'\1\n', s, flags=re.I|re.S)
    s = re.sub(r'<[^>]+>', '', s)
    s = s.replace('&nbsp;', ' ').replace('&amp;', '&').replace('&quot;', '"').replace('&lt;', '<').replace('&gt;', '>')
    # normalize whitespace
    lines = [line.strip() for line in s.split('\n')]
    clean = '\n'.join(lines)
    return re.sub(r'\n{3,}', '\n\n', clean).strip()

def extract_recursive(obj):
    results = []
    if isinstance(obj, dict):
        # Look for text data
        if "data" in obj and isinstance(obj["data"], dict) and "text" in obj["data"]:
            t = obj["data"]["text"]
            if t and t != "<p><br></p>":
                results.append(html_to_md(t))
        if "label" in obj.get("data", {}) if isinstance(obj.get("data"), dict) else False:
            label = obj["data"].get("label")
            url = obj["data"].get("targetUrl") or ""
            if label and label != "Button":
                results.append(f"👉 **Aktion:** [{label}]({url})")
        for k, v in obj.items():
            results.extend(extract_recursive(v))
    elif isinstance(obj, list):
        for item in obj:
            results.extend(extract_recursive(item))
    return results

def process_file(page_name):
    fpath = os.path.join(DATA_DIR, f"{page_name}_props.json")
    if not os.path.exists(fpath):
        return
    with open(fpath, encoding="utf-8") as f:
        data = json.load(f)
    
    blocks = data.get("pageData", {}).get("blocks", [])
    md_sections = []
    
    for i, block in enumerate(blocks):
        cat = block.get("category", f"Section {i+1}")
        texts = extract_recursive(block.get("content", {}))
        # Filter duplicates
        seen = set()
        uniq = []
        for t in texts:
            if t and t not in seen:
                seen.add(t)
                uniq.append(t)
        if uniq:
            md_sections.append(f"### Bereich: {cat}\n\n" + "\n\n".join(uniq))
    
    full_md = f"# {page_name.replace('-', ' ').title()}\n\n" + "\n\n---\n\n".join(md_sections)
    out_file = os.path.join(CONTENT_EXPORT_DIR, f"{page_name}.md")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(full_md)
    print(f"Exported {out_file} ({len(full_md)} chars)")

def main():
    pages = [
        "home",
        "mitgliedschaft",
        "satzung",
        "beitragsordnung",
        "veranstaltungen",
        "impressum",
        "datenschutz",
        "widerruf",
        "cookie-einstellungen"
    ]
    for p in pages:
        process_file(p)

if __name__ == "__main__":
    main()
