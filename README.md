# LCU Script Flow Docs

Documentation for **Script Flow** (`.sf`), the scripting language used in **LEGO City Undercover**, built with [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) and [Shiki](https://shiki.style/) syntax highlighting.

## Local Setup

Requires **Python 3.8+**.

### Windows (PowerShell)

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

### macOS / Linux

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Local Testing

Start the live-reloading dev server:

```bash
mkdocs serve
```

Then open **http://127.0.0.1:8000/** in your browser. Changes to Markdown files and `mkdocs.yml` reload automatically.

To run a strict production build (catches broken links and unindexed pages):

```bash
mkdocs build --strict
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on adding pages, formatting `sf` code blocks, and submitting changes.
