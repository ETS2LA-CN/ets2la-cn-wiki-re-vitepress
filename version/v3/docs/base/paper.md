---
title: 必要准备
description: 安装之前的准备工作
layout: doc
---

## 1. 下载并安装.NET10

### 1.1 下载.NET10
访问[微软官方地址](https://builds.dotnet.microsoft.com/dotnet/WindowsDesktop/10.0.9/windowsdesktop-runtime-10.0.9-win-x64.exe)进行下载

### 1.2 安装.NET10
双击下载下来的文件，点击`安装`。  
![](https://tuchuang.ets2la.cn/csharp/NET10install.png)
如果你双击打开.NET10的安装程序是这样的，这表明你已经有了基础的环境，直接点击 `关闭`即可。
![](https://tuchuang.ets2la.cn/csharp/NET10install2.png)

::: tip 提醒
虽然软件在未安装.NET10的情况下会询问是否自动下载但可能受网络影响下载速度慢，所以手动安装.NET10仍然是最稳妥的方式。
:::

## 2. 获取软件安装包
### 2.1 平台
- GitHub
访问[官方仓库](https://github.com/ETS2LA/ETS2LA/releases) ，在 `Assets` 中选择名为`ETS2LA-win-release.msi` 的文件进行下载。
![](https://tuchuang.ets2la.cn/csharp/20260902101942292.png)
- CNB
考虑到国内网络情况，ETS2LA中国官方在[CNB](https://cnb.cool/)上对官方GitHub仓库进行了镜像上传，访问[CNB仓库](https://cnb.cool/ETS2LA-CN/Euro-Truck-Simulator-2-Lane-Assist/-/releases) 在 `附件` 中选择名为`ETS2LA-win-release.msi` 的文件进行下载。
![](https://tuchuang.ets2la.cn/csharp/20260902102012732.png)

### 2.2 下载
使用浏览器直接下载可能会遇到如图所示的情况
![](https://tuchuang.ets2la.cn/csharp/20260902102456028.png)，
需点击 `...` 并选择保留，会弹出如图所示的信息
![](https://tuchuang.ets2la.cn/csharp/20260902102641923.png)，
点击 `删除` 旁边的下拉按钮并选择 `仍然保留` 即可正常下载。
![](https://tuchuang.ets2la.cn/csharp/20260902102844097.png)

::: warning 注意
下载平台的选择关系到软件在使用过程中从远端获取插件的地址，国内无条件用户请慎重选择从GitHub上下载安装包

ETS2LA国内官方不售卖任何远程安装服务
:::

至此准备工作全部完成，可点击下面的 安装 按钮进入到安装教程