"""
Robust Scraper for https://www.se-alumni.de/
Uses curl.exe to bypass Cloudflare bot challenges, extracts window.__WEBSITE_PROPS__,
downloads all PDFs, images, and converts pages into structured markdown and JSON.
"""

import os
import re
import json
import subprocess
import urllib.parse
from html.parser import HTMLParser

BASE_URL = "https://www.se-alumni.de"
SCRIPTS_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.abspath(os.path.join(SCRIPTS_DIR, ".."))
OUTPUT_DIR = os.path.join(PROJECT_DIR, "scraped_data")

PAGES = [
    {"slug": "home", "path": "/"},
    {"slug": "mitgliedschaft", "path": "/verein/mitgliedschaft/"},
    {"slug": "satzung", "path": "/verein/satzung/"},
    {"slug": "beitragsordnung", "path": "/verein/beitrags--und-kassenordnung/"},
    {"slug": "veranstaltungen", "path": "/veranstaltungen/"},
    {"slug": "impressum", "path": "/impressum/"},
    {"slug": "datenschutz", "path": "/datenschutz/"},
    {"slug": "widerruf", "path": "/widerruf/"},
    {"slug": "cookie-einstellungen", "path": "/cookie-einstellungen/"}
]

def curl_fetch(url, output_file=None):
    cmd = [
        "curl.exe",
        "-s",
        "-L",
        "-A", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "-H", "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "-H", "Accept-Language: de,en-US;q=0.7,en;q=0.3",
        url
    ]
    if output_file:
        cmd.extend(["-o", output_file])
        result = subprocess.run(cmd, capture_output=True, text=True)
        return result.returncode == 0
    else:
        result = subprocess.run(cmd, capture_output=True, text=False)
        return result.stdout

def clean_html_to_markdown(html_fragment):
    # Quick simple html to markdown cleaner
    text = html_fragment
    text = re.sub(r'<h1[^>]*>(.*?)</h1>', r'# \1\n\n', text, flags=re.I|re.S)
    text = re.sub(r'<h2[^>]*>(.*?)</h2>', r'## \1\n\n', text, flags=re.I|re.S)
    text = re.sub(r'<h3[^>]*>(.*?)</h3>', r'### \1\n\n', text, flags=re.I|re.S)
    text = re.sub(r'<h4[^>]*>(.*?)</h4>', r'#### \1\n\n', text, flags=re.I|re.S)
    text = re.sub(r'<strong>(.*?)</strong>', r'**\1**', text, flags=re.I|re.S)
    text = re.sub(r'<b>(.*?)</b>', r'**\1**', text, flags=re.I|re.S)
    text = re.sub(r'<em>(.*?)</em>', r'*\1*', text, flags=re.I|re.S)
    text = re.sub(r'<a[^>]+href=[\"\']([^\"\']+)[\"\'][^>]*>(.*?)</a>', r'[\2](\1)', text, flags=re.I|re.S)
    text = re.sub(r'<br\s*/?>', r'\n', text, flags=re.I)
    text = re.sub(r'<p[^>]*>(.*?)</p>', r'\1\n\n', text, flags=re.I|re.S)
    text = re.sub(r'<li[^>]*>(.*?)</li>', r'- \1\n', text, flags=re.I|re.S)
    text = re.sub(r'<[^>]+>', '', text)
    # decode entities
    text = text.replace('&nbsp;', ' ').replace('&amp;', '&').replace('&quot;', '"').replace('&lt;', '<').replace('&gt;', '>')
    return re.sub(r'\n{3,}', '\n\n', text).strip()

def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    images_dir = os.path.join(OUTPUT_DIR, "images")
    downloads_dir = os.path.join(OUTPUT_DIR, "downloads")
    pages_dir = os.path.join(OUTPUT_DIR, "pages_markdown")
    os.makedirs(images_dir, exist_ok=True)
    os.makedirs(downloads_dir, exist_ok=True)
    os.makedirs(pages_dir, exist_ok=True)

    site_summary = {
        "title": "Elitestudiengang Software Engineering Alumni e.V.",
        "pages": {},
        "all_images": [],
        "all_pdfs": []
    }

    all_image_urls = set()
    all_pdf_urls = set()

    for p in PAGES:
        slug = p["slug"]
        path = p["path"]
        url = urllib.parse.urljoin(BASE_URL, path)
        print(f"Fetching {slug}: {url}...")
        raw_bytes = curl_fetch(url)
        html_text = raw_bytes.decode("utf-8", errors="ignore")

        # Save raw HTML
        with open(os.path.join(OUTPUT_DIR, f"{slug}.html"), "w", encoding="utf-8") as f:
            f.write(html_text)

        # Look for window.__WEBSITE_PROPS__
        props_match = re.search(r'window\.__WEBSITE_PROPS__\s*=\s*(\{.*?\});\s*</script>', html_text, re.S)
        page_props = None
        if props_match:
            try:
                page_props = json.loads(props_match.group(1))
                with open(os.path.join(OUTPUT_DIR, f"{slug}_props.json"), "w", encoding="utf-8") as f:
                    json.dump(page_props, f, indent=2, ensure_ascii=False)
            except Exception as e:
                print(f"  Warning: JSON parse error for {slug} props: {e}")

        # Find all PDFs
        pdfs = re.findall(r'href=[\"\']([^\"\']+\.pdf[^\"\']*)[\"\']', html_text, re.I)
        for pdf in pdfs:
            full_pdf_url = urllib.parse.urljoin(url, pdf)
            all_pdf_urls.add(full_pdf_url)

        # Find all images (storage.e.jimdo.com, jimcdn, etc.)
        img_srcs = re.findall(r'(?:src|srcSet)=[\"\']([^\"\']+)[\"\']', html_text)
        for s in img_srcs:
            # srcset may contain multiple url size pairs
            candidates = re.findall(r'(https?://storage\.e\.jimdo\.com[^\s,]+)', s)
            for c in candidates:
                all_image_urls.add(c)

        # Also find direct images in props if available
        if page_props:
            # Recursively find images in props
            props_str = json.dumps(page_props)
            direct_imgs = re.findall(r'\"url\"\s*:\s*\"(/image/[^\"]+)\"', props_str)
            for di in direct_imgs:
                all_image_urls.add(f"https://storage.e.jimdo.com{di}")

        # Extract text blocks
        blocks_text = []
        if page_props and "pageData" in page_props:
            page_blocks = page_props["pageData"].get("blocks", [])
            for block in page_blocks:
                content = block.get("content", {})
                for key, val in content.items():
                    if isinstance(val, dict):
                        data = val.get("data", {})
                        if isinstance(data, dict):
                            t = data.get("text", "")
                            if t and "<" in t:
                                md = clean_html_to_markdown(t)
                                if md:
                                    blocks_text.append(md)
                            l = data.get("label", "")
                            u = data.get("targetUrl", "")
                            if l:
                                blocks_text.append(f"Button: [{l}]({u})")

        md_content = f"# {slug.capitalize()} ({url})\n\n" + "\n\n---\n\n".join(blocks_text)
        with open(os.path.join(pages_dir, f"{slug}.md"), "w", encoding="utf-8") as f:
            f.write(md_content)

        site_summary["pages"][slug] = {
            "path": path,
            "url": url,
            "pdf_count": len(pdfs),
            "text_blocks_count": len(blocks_text)
        }

    # Download PDFs
    print(f"\nDownloading {len(all_pdf_urls)} PDFs...")
    for pdf_url in all_pdf_urls:
        filename = os.path.basename(urllib.parse.urlparse(pdf_url).path)
        filename = urllib.parse.unquote(filename)
        dest = os.path.join(downloads_dir, filename)
        print(f"  Downloading: {filename} from {pdf_url}")
        curl_fetch(pdf_url, dest)
        site_summary["all_pdfs"].append({"filename": filename, "url": pdf_url})

    # Download Images
    print(f"\nDownloading {len(all_image_urls)} unique images...")
    img_idx = 0
    for img_url in sorted(all_image_urls):
        # We prefer high quality versions: if width/height in query/path, get original or large
        clean_url = img_url.split(" ")[0]
        parsed = urllib.parse.urlparse(clean_url)
        name = os.path.basename(parsed.path)
        if not name or "." not in name:
            img_idx += 1
            name = f"image_{img_idx}.jpg"
        dest = os.path.join(images_dir, name)
        if not os.path.exists(dest):
            print(f"  Downloading image: {name}")
            curl_fetch(clean_url, dest)
        site_summary["all_images"].append({"filename": name, "url": clean_url})

    # Save summary
    with open(os.path.join(OUTPUT_DIR, "full_site_manifest.json"), "w", encoding="utf-8") as f:
        json.dump(site_summary, f, indent=2, ensure_ascii=False)

    print("\nScraping complete! Data saved to scraped_data/")

if __name__ == "__main__":
    main()
