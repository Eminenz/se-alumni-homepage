import os
import json
import re

DATA_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "scraped_data")

for page in ["impressum", "datenschutz", "satzung", "beitragsordnung", "mitgliedschaft", "veranstaltungen"]:
    fpath = os.path.join(DATA_DIR, f"{page}_props.json")
    if not os.path.exists(fpath):
        continue
    with open(fpath, encoding="utf-8") as f:
        data = json.load(f)
    
    blocks = data.get("pageData", {}).get("blocks", [])
    print(f"\n==================== {page.upper()} ====================")
    for i, b in enumerate(blocks):
        c = b.get("content", {})
        # search recursively for "text"
        def find_texts(obj):
            res = []
            if isinstance(obj, dict):
                for k, v in obj.items():
                    if k == "text" and isinstance(v, dict) and "data" in v and "text" in v["data"]:
                        t = v["data"]["text"]
                        if t and t != "<p><br></p>":
                            res.append(t)
                    elif k in ["title", "topText", "bottomText"] and isinstance(v, dict) and "data" in v and "text" in v["data"]:
                        t = v["data"]["text"]
                        if t and t != "<p><br></p>":
                            res.append(t)
                    else:
                        res.extend(find_texts(v))
            elif isinstance(obj, list):
                for x in obj:
                    res.extend(find_texts(x))
            return res

        extracted = find_texts(c)
        for t in extracted:
            clean = re.sub(r'<[^>]+>', ' ', t).strip()
            clean = " ".join(clean.split())
            if len(clean) > 10:
                print(f"[{b.get('category')}]: {clean[:120]}... (total {len(clean)} chars)")
