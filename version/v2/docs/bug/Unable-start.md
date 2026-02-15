---
title: 无法启动
description: 这里总结了可能遇到的问题以及解决方案。
layout: doc
---

# 无法启动
这里总结了可能遇到的问题以及解决方案。

## 1.访问被拒绝
如果你在使用ETS2LA/访问[ETS2LA](https://ets2la.cn/)出现了下面这张图中的内容/访问显示 `567`，
![](https://tc.ets2la.cn/d/img/25-12/20260215194459791.png)

::: details  原因
因为你开了梯子/VPN/科学上网/你在外国，导致ip限制，无法访问
:::

::: details 办法
关闭你的梯子/VPN/科学上网即可，如果你在国外，请使用 [app.ets2la.com](https://app.ets2la.com/) 源 / [ets2la.com](https://ets2la.com/) 网站
:::


## 2.WebView2 丢失
如果你在出现了下面这这些图中的内容，
![](https://tc.ets2la.cn/d/img/25-12/20251213195744330.png)
或
![](https://tc.ets2la.cn/d/img/25-12/fcaffdf4f63272fb66130fc03bd12a2e.png)

::: details  原因
因为系统缺少`Microsoft Edge WebView2 Runtime`组件导致的，ETS2LA使用WebView2来渲染界面，如果没有这个组件的话就会出现上图中的内容
:::

::: details 办法
从[Microsoft Edge WebView2](https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/?form=MA13LH#download)下载页面下载并安装WebView2 Runtime组件，然后重启ETS2LA即可
![](https://tc.ets2la.cn/d/img/25-12/20251213195846097.png)
:::

## 3.ffmpeg下载失败
如果你在安装完成之后勾选了打开ETS2LA的话你有很大概率会在控制台中看到下面这张图中的内容，这时不要紧张和害怕，有解决办法的
![](https://tc.ets2la.cn/d/img/25-12/20251213200230431.png)
原因：因为FFmpeg是从[www.gyan.dev](www.gyan.dev)位于国外的服务器上下载，加上[www.gyan.dev](www.gyan.dev)到国内的网络连接不稳定、经常中断，导致下载失败，因此你才会在ETS2LA的控制台中看到报错信息。

::: details 原因
因为FFmpeg是从[www.gyan.dev](www.gyan.dev)位于国外的服务器上下载，加上[www.gyan.dev](www.gyan.dev)到国内的网络连接不稳定、经常中断，导致下载失败，因此你才会在ETS2LA的控制台中看到报错信息。
:::

::: details 办法
从[国内镜像站](https://download.ets2la.cn/s/K4kHPS)下载ffmpeg，然后放到ETS2LA的安装目录下，然后重启ETS2LA即可
:::

## 4.插件无法加载
![](https://tc.ets2la.cn/d/img/25-12/20251213201259982.png)

::: details 原因
插件加载失败通常是由于系统资源不足或启动过程中的时序问题导致的。
:::

::: details 办法
在 设置-全局设置-变量 中勾选上 缓慢启动，如已勾选上 缓慢启动 后仍然无法加载插件，请设置 32~64GB 的虚拟内存
:::
## 5.启动ETS2LA时浏览器疯狂弹谷歌广告的问题
<video width="720" controls>
  <source src="https://tc.ets2la.cn/d/img/25-12/output.mp4" type="video/mp4">
</video>

::: details 原因
您正在使用老旧的 Internet Explorer 浏览器，ETS2LA不支持 该网站需要新的 WebView2 Runtime组件
:::

::: details 办法1
我们使用[Microsoft Edge WebView2](https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/?form=MA13LH#download)来安装新的 WebView2 Runtime组件，然后重启ETS2LA即可
:::

::: details 办法2
在启动脚本，也就是快捷方式对应的start.bat（在ETS2LA的根目录）中编辑里面的 "cd app && python main.py" 后面追加 --local (注意该方法需要安装node js)，强制其在本地模式下运行，设置为本地模式后，应该就无法打开APP的前端了(就是打开软件时弹出的窗口)，但是可以通过 `app.ets2la.cn` (国内)或者 `app.ets2la.com` (海外)打开，前提是你必须在电脑里启动ETS2LA
:::

### 5.1.安装node js

1.下载并安装Node.js

::: details 初学者
前往[官网](https://nodejs.org/en/download/)下载安装包，安装时一路NEXT即可
![](https://tc.ets2la.cn/d/img/25-12/20250721083921.png)
如[官网](https://nodejs.org/en/download/)速度过慢，可访问[nodejs中文网](https://nodejs.cn/download/)下载安装包
![](https://tc.ets2la.cn/d/img/25-12/20250721083940.png)
:::

::: details 进阶玩家
NVM只能管理安装到其安装目录下的node版本，对于使用安装包安装的node，NVM无法管理且会锁定node版本，这时使用nvm命令切换版本是无效的

NVM下载地址：[GitHub](https://github.com/coreybutler/nvm-windows/releases) | [nvm中文网](https://nvm.uihtm.com/doc/download-nvm.html)

NVM常用命令

nvm install 版本号    #安装指定版本的nodejs

nvm use 版本号        #切换nodejs版本`

:::