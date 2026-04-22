---
title: 更新&新闻
description: ETS2LA 更新与新闻
layout: doc
sidebar: true
---

# 更新&新闻
这里会发布 ETS2LA 的更新日志与相关通知。

## 开发日志

<div class="devblog-list">

### [ETS2LA C# 四月开发日志](./2026-4-22-april-cs-update.md)

**日期：** 2026年4月22日 | **作者：** Tumppi066 | **翻译:** 晚安

本月我们在自动驾驶实际应用方面取得了一些进展。我们目前有一个非常初级的车道辅助插件概念验证。同时我们也介绍了新的控制方案和 HUD 灵感来源。

**核心亮点：**
- 🚗 初步 LKAS 插件概念验证已实现，使用 TruckLib 读取游戏数据
- 🎮 新控制方案 `ApplicationState` 带来一致的控制体验
- 🖥️ 灵感来源：XPeng 和大众的 HUD 设计
- ⚠️ 由于大学事务，进度延误约一个半月

[**阅读完整日志** →](./2026-4-22-april-cs-update.md)


### [ETS2LA C# 三月开发日志](./2026-3-22-march-cs-update.md)

**日期：** 2026年3月22日 | **作者：** Tumppi066 | **翻译:** 晚安

上个月很大一部分时间我都在忙大学的事情。虽然时间很紧，我们还是在一个大型功能上取得了进展。这一期我们会讲 ETS2LA C# 的发布计划、Linux 原生支持、以及关于项目资金和开源的重要公告。

**核心亮点：**
- 📅 发布计划：仍计划在今年上半年发布 ETS2LA C#
- 🐧 **ETS2LA C# 将原生支持 Linux**，并能有望在 Steam Deck 上运行
- 💳 将在 C# 版本中引入可选订阅（基础功能完全免费）
- 🔒 驾驶插件将转为限制开源，防止 AI 恶意利用

[**阅读完整日志** →](./2026-3-22-march-cs-update.md)

</div>

<style>
.devblog-list {
  margin-top: 2rem;
}

.devblog-list h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.devblog-list h3 a {
  text-decoration: none;
  color: inherit;
}

.devblog-list h3 a:hover {
  color: var(--vp-c-brand);
}

.devblog-list > div {
  padding: 1.5rem;
  border-left: 3px solid var(--vp-c-divider);
  margin: 1rem 0;
  background: var(--vp-c-bg-soft);
  border-radius: 6px;
  transition: all 0.3s;
}

.devblog-list > div:hover {
  border-left-color: var(--vp-c-brand);
  background: var(--vp-c-bg-mute);
}
</style>
