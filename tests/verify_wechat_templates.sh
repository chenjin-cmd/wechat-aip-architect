#!/usr/bin/env bash
set -euo pipefail

template_dir="assets/wechat-html-templates"
templates=(
  "01-magazine-longform.html"
  "02-tutorial-checklist.html"
  "03-story-opinion.html"
  "04-promo-card.html"
)

for template in "${templates[@]}"; do
  path="$template_dir/$template"
  test -f "$path"
  rg -q '<!doctype html>' "$path"
  rg -q 'cover' "$path"
  rg -q 'alt=' "$path"
  rg -q 'image_prompt' "$path"
done

rg -q 'huashu-design' "$template_dir/ATTRIBUTION.md"
rg -q 'https://github.com/alchaincyf/huashu-design' "$template_dir/ATTRIBUTION.md"
rg -q 'MIT' "$template_dir/ATTRIBUTION.md"
rg -q 'wechat-html-templates' references/04-writing-publishing.md
rg -q '1200' "$template_dir/04-promo-card.html"
