from pathlib import Path
import re

files = [Path('public/sopan-logo.svg'), Path('public/sopan-logo-footer.svg')]

for path in files:
    text = path.read_text(encoding='utf-8')
    text = re.sub(r'\n\s*<path[^>]*fill="#ffffff"[^>]*d="[^"]*"[^>]*/>', '', text, count=1, flags=re.S)
    text = re.sub(r'\n\s*<path[^>]*fill="#020202"[^>]*d="[^"]*"[^>]*/>', '', text, count=1, flags=re.S)
    text = re.sub(r'\n\s*<path[^>]*fill="#000000"[^>]*d="[^"]*"[^>]*/>', '', text, count=1, flags=re.S)
    path.write_text(text, encoding='utf-8')
    print(f'processed {path}')
