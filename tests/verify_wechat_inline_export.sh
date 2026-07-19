#!/usr/bin/env bash
set -euo pipefail

exporter="assets/wechat-html-templates/export-wechat-inline.js"
sample="assets/wechat-html-templates/wechat-paste-test.html"
preview="assets/wechat-html-templates/wechat-paste-test-preview.png"

test -f "$exporter"
test -f "$sample"
test -f "$preview"
rg -q 'data-wechat-export-root' assets/wechat-html-templates/01-magazine-longform.html
rg -q 'copyWechatReady' "$exporter"
rg -q 'getComputedStyle' "$exporter"
rg -q 'style="' "$sample"
! rg -q '<script|<style' "$sample"
! rg -F -q '{{' "$sample"
