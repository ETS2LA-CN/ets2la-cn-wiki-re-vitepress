---
title: 问题总结
description: 这里总结了可能遇到的问题以及解决方案。
layout: doc
---

# 问题总结

这里总结了可能遇到的问题以及解决方案。

## 1. 启动时黑屏

启动如果出现黑屏，下面是解决方法

NVIDIA - 重新安装驱动，并在 NVIDIA App 程序中将 OpenGL GDI 兼容性设为「首选兼容」。
AMD - 尝试安装这个程序驱动：[whql-amd-software-adrenalin-edition-24.10.1-win10-win11-oct-rdna](https://drivers.amd.com/drivers/whql-amd-software-adrenalin-edition-24.10.1-win10-win11-oct-rdna.exe)。

::: tip 小提示
点击蓝字即可跳转至网站
:::

## 2.不跟随导航

此问题很可能是由于您的软件设置中未启用 ETS2LA 遵循导航路线所致。如果您的车道辅助叠加窗口与左侧所示相似，请按 N 键启用导航。此时，叠加窗口将显示 `Active - Navigating`，表明导航已启用。

## 3. 转向速度过慢

只要 ETS2LA 正在向游戏发送转向输出，那么问题就出在游戏这边。最可能的原因是灵敏度设置不正确，导致游戏无法以线性方式响应我们的输出。（可以通过查看日志来判断）

重置控制设置的最简单方法是，在游戏的控制设置中再次运行快速设置。如果你想尝试手动解决此问题，请设置以下选项：

- Sensitivity —— `0.5` or `1.0`. This depends on variables we've yet to figure out.
- Steering Non-Linearity —— `0`
- Speed Sensitive Steering —— `Disabled`

## 4.在mod地图中无法使用

虽然我们支持大多数模组，但无法保证100%兼容。您可以采取以下措施，尝试提升游戏体验。（加密mod中尤为常见）

- 如果遇到崩溃 ——在 `Settings - Data` 降低数据质量。
- 如果车道辅助显示 `No nearby nodes` 且内部可视化为空 ——请尝试在 `Settings - Data` 启用 `Force Base Map Name`。如果不行，确保 mod 文件夹只包含你正在使用的 mod。ETS2LA 会加载该文件夹中发现的所有模组，无论游戏内是否启用。

## 5. 我在在游戏里，但日志显示加载游戏数据失败

当你的 `game.log.txt` 不在 ETS2LA 预期的位置时会遇到此类问题，这是很常见的问题。我们已经设计了一个后备方案来绕过这些情况。你可以在 `Settings - Data` 中启用 `Force Map Load` ，强制 ETS2LA 加载第一个匹配游戏。
