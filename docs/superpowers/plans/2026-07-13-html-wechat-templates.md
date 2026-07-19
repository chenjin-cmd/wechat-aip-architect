# HTML WeChat Templates Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the external-formatting-tool workflow with bundled, reusable HTML templates and a picture-first promotion workflow for WeChat articles.

**Architecture:** Add a self-contained template pack under `assets/wechat-html-templates/`. Each template renders with a small editable data block, includes a cover-image slot, and declares where to insert article illustrations. Update the skill's formatting module and prompts to select a template, create licensed visual assets, render locally, and export promotional images. Attribute the HTML design workflow to `huashu-design` without copying its source files.

**Tech Stack:** Static HTML, CSS, small inline JavaScript, Markdown documentation, ZIP archive.

---

### Task 1: Add an attributed HTML template pack

**Files:**
- Create: `assets/wechat-html-templates/README.md`
- Create: `assets/wechat-html-templates/ATTRIBUTION.md`
- Create: `assets/wechat-html-templates/01-magazine-longform.html`
- Create: `assets/wechat-html-templates/02-tutorial-checklist.html`
- Create: `assets/wechat-html-templates/03-story-opinion.html`
- Create: `assets/wechat-html-templates/04-promo-card.html`

- [ ] **Step 1: Create the usage guide and attribution**

Document the editable fields, local preview command, image-alt requirements, and export choices. In `ATTRIBUTION.md`, state that the templates are independently authored, credit `huashu-design` by alchaincyf (花叔／花生), link to `https://github.com/alchaincyf/huashu-design`, and link to its MIT license.

- [ ] **Step 2: Create three article templates and one promotion-card template**

Give each standalone HTML file an editable `const article` or `const promo` data block, accessible type scale, a 2:1 cover image, visible source/caption slots for each visual, and a single distinct visual language: magazine longform, practical checklist, and story/opinion. Make `04-promo-card.html` render at 1200×630 for X and WeChat promotion screenshots.

- [ ] **Step 3: Verify the templates are structurally complete**

Run:

```bash
for file in assets/wechat-html-templates/*.html; do
  rg -q '<!doctype html>' "$file" && rg -q 'cover' "$file" && rg -q 'alt=' "$file"
done
```

Expected: exit code `0`.

### Task 2: Replace formatting-tool instructions with an HTML-first workflow

**Files:**
- Modify: `references/04-writing-publishing.md`
- Modify: `assets/article-structure.md`
- Modify: `assets/prompt-templates.md`
- Modify: `references/07-prompts-optimization.md`

- [ ] **Step 1: Rewrite the formatting section**

Remove the specific Xiumi/MoDi operational steps. Add a four-step HTML flow: select a bundled template, generate or license a cover and two content-relevant images, replace the data block and image paths, preview in a browser, then paste/export through the user's chosen publishing route. State that platform-specific paste behavior changes and must be checked in the current official backend.

- [ ] **Step 2: Add picture-first article and promotion prompts**

Require one cover, two in-article image briefs, captions/alt text, rights/source notes, and one 1200×630 promotion-card brief whenever an article or promotion copy is requested. Point the prompt to the four template files.

- [ ] **Step 3: Remove stale one-click-format claims**

Run:

```bash
rg -n -i '秀米|墨滴|一键排版' SKILL.md UNIVERSAL.md README.md references assets PROMO.md
```

Expected: no workflow instructions that depend on Xiumi or MoDi; historical third-party research references may remain only if unrelated to formatting.

### Task 3: Synchronize the skill entry points and package

**Files:**
- Modify: `SKILL.md`
- Modify: `UNIVERSAL.md`
- Modify: `README.md`
- Modify: `PROMO.md`
- Modify: `dist/wechat-aip-architect.zip`

- [ ] **Step 1: Update entry-point instructions and reusable-assets list**

List `assets/wechat-html-templates/` as a reusable pack. Change the writing-output instruction from Markdown-for-external-formatting to Markdown plus a chosen HTML template, image briefs, and promotion-card copy. Add `huashu-design` attribution wherever the template pack is introduced.

- [ ] **Step 2: Update README and promotion copy**

Describe the bundled template pack, the picture-first promotion workflow, and the attribution. Remove references that present Xiumi/MoDi as the default path.

- [ ] **Step 3: Rebuild the distributable ZIP**

Build a clean temporary package containing the repository's distributable files while excluding `.git`, `docs`, `dist`, and audit-only reports. Create `dist/wechat-aip-architect.zip` from that temporary package.

### Task 4: Render and package verification

**Files:**
- Verify: `assets/wechat-html-templates/*.html`
- Verify: `dist/wechat-aip-architect.zip`

- [ ] **Step 1: Render all templates**

Open each HTML file in a browser-capable renderer and capture a PNG. Verify each screenshot has a visible cover area, legible Chinese text, and no unrendered template variables.

- [ ] **Step 2: Verify source attribution and ZIP contents**

Run:

```bash
rg -n 'huashu-design|alchaincyf|MIT' assets/wechat-html-templates README.md SKILL.md UNIVERSAL.md
unzip -l dist/wechat-aip-architect.zip | rg 'wechat-html-templates/(README|ATTRIBUTION|01-magazine-longform|02-tutorial-checklist|03-story-opinion|04-promo-card)'
```

Expected: attribution is present in the template pack and documentation; all six template-pack files appear in the ZIP.

- [ ] **Step 3: Check repository consistency**

Run:

```bash
git diff --check
rg -n -i '秀米|墨滴|一键排版' SKILL.md UNIVERSAL.md README.md references assets PROMO.md
```

Expected: no whitespace errors and no stale default formatting workflow.
