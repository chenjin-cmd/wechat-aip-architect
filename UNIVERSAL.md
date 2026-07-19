# 公众号 AIP 打造 · 通用 AI 方法论（工具无关 / Tool-Agnostic）

> 本文件是**工具无关**的。WorkBuddy 用户请看 `SKILL.md`；**任何其他 AI 工具（Claude / ChatGPT / Gemini / Cursor / 通义 / 文心 / 任意聊天或 Agent 工具）直接把本文件 + `references/` 目录当作上下文即可**，无需任何插件或安装。
>
> This file is **tool-agnostic**. WorkBuddy users should read `SKILL.md`. **Any other AI (Claude / ChatGPT / Gemini / Cursor / any chat or agent tool) can ingest this file + the `references/` folder as context** — no plugin, no install needed.

---

## Overview

A complete operational playbook for building a WeChat Official Account around an "AIP" (AI + Personal IP) — a vertically-focused account that combines AI-tool expertise with a recognizable personal voice. It covers the full loop: positioning → account setup → benchmark analysis → topic selection → writing → formatting.

Use this to guide any phase of the AIP journey, or to produce concrete deliverables (positioning briefs, benchmark templates, article drafts, prompt libraries).

## Five Non-Negotiable Bottom Lines

These apply to every phase. State or honor them whenever giving advice:

1. **Platform rules change.** 公众号规则、流量主门槛、广告能力、API 权限和第三方平台能力会变化，以当前公众号后台和官方规则为准。
2. **No income promises.** 所有收入、阅读量、涨粉和广告案例只能作为参考，不构成收益承诺。
3. **Benchmark ≠ plagiarism.** 对标拆解不是洗稿或复制。必须加入自己的经验、观点、案例、数据和表达，避免侵犯版权。
4. **Verify before monetizing.** 接广告、带货、课程售卖和资料领取都要核验资质，避免虚假宣传、违规行业和诱导行为。
5. **Secrets stay secret.** AppSecret、API Key、AccessKey Secret、Token 等敏感信息只放在密码管理器、环境变量里，不写进公开笔记、截图、代码仓库和分享文档。

## The AIP Workflow (6 phases)

```
定位 (Positioning) → 搭建 (Setup) → 对标 (Benchmark) → 选题 (Topic)
     → 写作 (Writing) → 排版 (Format)
```

Each phase has a dedicated reference module. Load the relevant one based on the user's intent.

## Decision Tree — Which Reference to Load

| User intent (signals) | Reference to load |
|----------------------|-------------------|
| "怎么定位 / 做什么方向 / AIP是什么 / 商业模式" | `references/01-positioning.md` |
| "注册公众号 / 开通流量主 / 怎么变现 / 8种赚钱方式 / 绑卡" | `references/02-account-setup.md` |
| "找对标 / 拆爆款 / 对标库 / 低粉爆文 / 5+3拆解" | `references/03-benchmark-analysis.md` |
| "找选题 / 写文章 / 开头怎么写 / 换元法 / HTML 图文模板 / 宣传配图" | `references/04-writing-publishing.md` |
| "用 AI 分析爆款潜力 / 建选题灵感库 / 爆款拆解" | `references/03-benchmark-analysis.md` + `references/07-prompts-optimization.md` |
| "写作提示词 / IP人设提示词 / 文章优化 / 让AI改文章" | `references/07-prompts-optimization.md` |

Cross-phase requests (e.g. "帮我找对标再写一篇") may load two or more references.

## Cross-Module Principles

- **Quality > quantity.** 无论任何时候，质都大于量。只有写不出来时，先写出来更重要；在能写出来的前提下尽量追求高质量。
- **Trust = monetization.** 粉丝为对 IP 的信任买单。所有内容动作应围绕"专业价值 + 情绪价值"构建信任。
- **Vertical beats broad.** 越细分的定位，越容易被算法识别并精准推给愿意付费的精准用户；0粉也能被算法选中跑出阅读量破万。
- **Real person > tool-person.** 只输出干货没有清晰人设，用户记不住你、把你当工具人。内容中要融入自己的故事、思考、踩坑、成长轨迹。
- **Benchmark then innovate.** 对标是"站在爆款肩膀上，用模仿+微创新实现超越"，不是抄。换外壳不换内核。

## Reusable Assets

These templates are ready to copy into the user's workspace:

- `assets/benchmark-template.md` — 飞书多维表格字段设计（账号对标库 + 爆款对标库 + AI字段）
- `assets/article-structure.md` — 文章结构模板（开头4方向 / 正文2要素 / 结尾2型 / 换元法3步）
- `assets/prompt-templates.md` — 提示词合集（定位 / 写作 / 爆款拆解 / 文章优化）
- `assets/wechat-html-templates/` — 4 个 HTML 图文与宣传卡模板（含 huashu-design 来源说明）

## How an AI Tool Should Use This

1. Identify which phase(s) the user is in via the decision tree above.
2. Read the matching reference(s) from `references/` for detailed methodology and steps.
3. Pull templates from `assets/` when the user needs a concrete artifact.
4. Always respect the Five Bottom Lines, especially around secrets, plagiarism, and income claims.
5. When producing an article or draft, default to Markdown plus a chosen bundled HTML template, one cover-image brief, two in-article image briefs, and a 1200×630 promotion-card brief.
