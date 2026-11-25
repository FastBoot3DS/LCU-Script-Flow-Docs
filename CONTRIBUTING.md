# Contributing to LCU Script Flow Docs

Thanks for helping document **Script Flow** (`.sf`) for LEGO City Undercover!

## Repository Layout

- `mkdocs.yml` — Site configuration, theme settings, and `nav:` structure
- `docs/` — Markdown documentation pages
  - `docs/about/` — High-level overview of Script Flow
  - `docs/basics/` — Core language concepts (syntax, keywords, types, variables, states)
  - `docs/specifics/` — Deep dives into specific types and their actions/methods
- `docs/assets/sf.tmLanguage.json` — TextMate grammar used for `sf` syntax highlighting
- `docs/javascripts/shiki-sf.js` — Client-side Shiki highlighter for `sf` blocks and tables

## Adding or Editing Pages

1. Create or edit a `.md` file inside `docs/` (use lowercase filenames, e.g. `docs/specifics/vehicles.md`).
2. Add the page under `nav:` in `mkdocs.yml` so it appears in the sidebar and passes strict builds.
3. Link between pages using relative `.md` paths (for example: `[Data Types](../basics/types.md)`).

## Writing & Formatting Guidelines

- **Code blocks:** Use ```` ```sf ```` so Shiki highlights Script Flow syntax:
  ````markdown
  ```sf
  Global Character cPlayer1;
  Position pos(cPlayer1.GetPosition());
  ```
  ````
- **Tables:**
  - Include `()` on action names in `Action` columns (e.g. `` `CreateAICharacter()` ``) so they highlight as functions.
  - Columns named `Type`, `Keyword`, `Modifier`, `Action`, `Inputs`, `Output`, or `Outputs` are automatically highlighted with Shiki.
  - Document identifier inputs that accept readable strings as `Text` (and note when they are hashed internally).
- **Headings:** Use `##` for major categories and `###` for subsections so the right-hand Table of Contents stays nested and readable.
- **Keep big pages focused:** For types with many actions, list every action in categorized tables and reserve `###` detail blocks for multi-parameter or non-obvious functions.

## Local Testing Before Submitting

Make sure your virtual environment is active (see [README.md](README.md#local-setup)), then run:

1. **Preview in browser:**
   ```bash
   mkdocs serve
   ```
   Check formatting, syntax highlighting, and table rendering at `http://127.0.0.1:8000/`.
2. **Run a strict build:**
   ```bash
   mkdocs build --strict
   ```
   Ensure there are zero warnings or broken links before committing.

## Submitting Changes

1. **Fork** the [repository](https://github.com/FastBoot3DS/LCU-Script-Flow-Docs) on GitHub, then clone your fork and `cd` into the folder:
   ```bash
   git clone https://github.com/<your-username>/LCU-Script-Flow-Docs.git
   cd LCU-Script-Flow-Docs
   ```
2. **Create a branch** for your changes:
   ```bash
   git checkout -b docs/your-topic
   ```
3. **Make your edits and test locally** (from inside the `LCU-Script-Flow-Docs` folder):
   ```bash
   mkdocs build --strict
   ```
4. **Commit and push** your branch:
   ```bash
   git add .
   git commit -m "Add docs for <topic>"
   git push -u origin docs/your-topic
   ```
5. **Open a Pull Request** on GitHub from your branch into `FastBoot3DS/LCU-Script-Flow-Docs` (`main`), describing what you added or updated.
