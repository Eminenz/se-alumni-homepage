import os
import json
import re

DATA_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "scraped_data")

def extract_all_strings(obj):
    texts = []
    if isinstance(obj, str):
        if len(obj.strip()) > 1 and not obj.startswith("http") and not obj.startswith("uuid-") and not re.match(r'^[0-9a-f-]{36}$', obj):
            texts.append(obj)
    elif isinstance(obj, dict):
        for k, v in obj.items():
            if k in ["text", "title", "headline", "label", "caption", "name", "description"]:
                if isinstance(v, str) and v.strip():
                    texts.append(v)
            else:
                texts.extend(extract_all_strings(v))
    elif isinstance(obj, list):
        for item in obj:
            texts.extend(extract_all_strings(item))
    return texts

for fname in sorted(os.listdir(DATA_DIR)):
    if fname.endswith("_props.json"):
        slug = fname.replace("_props.json", "")
        fpath = os.path.join(DATA_DIR, fname)
        with open(fpath, encoding="utf-8") as f:
            data = json.load(f)
        
        page_title = data.get("pageData", {}).get("title") or slug
        blocks = data.get("pageData", {}).get("blocks", [])
        print(f"\n==========================================")
        print(f"PAGE: {slug} (Blocks count: {len(blocks)})")
        print(f"==========================================")
        
        for idx, block in enumerate(blocks):
            cat = block.get("category", "General")
            b_type = block.get("layout", "")
            texts = extract_all_strings(block.get("content", {}))
            clean_texts = [re.sub(r'<[^>]+>', ' ', t).strip() for t in texts if t.strip()]
            clean_texts = [t for t in clean_texts if t and t != "Button" and t != "Mehr lesen" and len(t) > 3]
            # dedup preserving order
            seen = set()
            uniq = []
            for t in clean_texts:
                if t not in seen:
                    seen.add(t)
                    uniq.append(t)
            if uniq:
                print(f"\n[Block {idx} - {cat}]")
                for u in uniq:
                    print(f"  • {u}")
