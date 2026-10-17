---
title: 主界面介绍
description: 对主界面中各部分内容进行介绍
layout: doc
---

![](https://tuchuang.ets2la.cn/csharp/20261018063556025.png)
从上面的图片中可以看到主界面ui分为了两个部分——侧边栏和功能区；侧边栏中有很多的模块，接下来以此介绍各个模块的作用是什么。

## 仪表盘

仪表盘目前显示的是项目在GitHub上的赞助信息，包含了赞助链接和赞助用户名单的公示

## 可视化

顾名思义就是用于显示插件/软件运行状态的显示，在未启用 `Visuakization Sockets` 插件的情况下显示的图一所示，
![图一](https://tc.ets2la.cn/csharp/20260927091835592.png)
在启用了插件的情况下如图二所示
![图二](https://tc.ets2la.cn/csharp/20260927092125912.png)

## 插件管理

插件管理页面中会显示所有**已安装**的插件，可以单独启用，也可以使用一键命令全部启用  
点击红色方框会在资源管理器中打开插件文件夹，点击黄色方框会重新刷新所有已安装的插件
![](https://tuchuang.ets2la.cn/csharp/20261018063740269.png)
::: warning 注意
软件更新会删除本地插件文件夹中的所有文件，需要在插件库中重新安装
:::

## 插件库

插件库是安装插件的地方，你可以在这里看见很多插件，这里有ETS2LA开发组编写的插件，也有许多第三方开发者编写的插件，请注意区分；找到对应的插件点击安装即可，插件安装完成之后会要求重启软件，按照要求重启即可。
![](https://tc.ets2la.cn/csharp/20260927092742275.png)
::: warning 注意
如果你的插件库是空的，请确保你是从官方地址下载的软件安装包，因为这关系到软件在后端使用什么插件源；  
安装包与插件源对应关系：  
GitHub/sourceforge ——> 官方地址（使用 cloudflare 进行分发）  
CNB/国内镜像站 ——> 国内镜像地址（使用华为云CDN进行分发）
:::

## 维基/常见问题

该页面显示的是 https://ets2la.com/help/faq/ 该网页链接的内容

## 联系我们

如果软件在使用过程中遇到恶行bug，可通过该页面中的地址联系开发者
![](https://tc.ets2la.cn/csharp/20260927094729873.png)

## 聊天机器人

如果您没有登录，那么您看到的页面应该是这样的
![](https://tuchuang.ets2la.cn/csharp/20261018063954926.png)
在登录了账号的情况下，你看到的界面应该是这样的
![](https://tuchuang.ets2la.cn/csharp/20261018065858948.png)

## 设置

软件的设置都在该页面中，包括但不限于数据精度的选择；该页面中的修改项大部分都有对应的描述，所以这里不多讲。
![](https://tuchuang.ets2la.cn/csharp/20261018063823927.png)

## Anonymous

这是用户系统的快捷入口，未登录状态下看到的页面应该是这样的
![](https://tuchuang.ets2la.cn/csharp/20261018063905547.png)

### 注册

在 `Anonymous` 页面点击右侧中的 `没有账户? 现在就注册一个新账户，无需邮箱！` 按钮
![](https://tuchuang.ets2la.cn/csharp/20261018064205306.png)
在 `Username` 中填写上你想使用的用户名，然后点击注册
![](https://tuchuang.ets2la.cn/csharp/20261018064255000.png)
之后会弹出一个二维码让你进行扫码，这时候使用手机上的2FA软件进行扫码即可，然后点击 `返回登录界面` 按钮
![](https://tuchuang.ets2la.cn/csharp/20261018064504019.png)

### 登录

上一步已经完成了注册，接下来就是登录了，上面已经点击了 `返回登录界面` 按钮，大多数情况下现在你的 `Username` 输入框中应该已经显示用户名了，如果没显示就在输入一遍用户名
![](https://tuchuang.ets2la.cn/csharp/20261018065303767.png)
然后在手机上打开你的2FA软件并且输入6位数的验证密码，最后点击登录即可
![](https://tuchuang.ets2la.cn/csharp/20261018065541873.png)
最后在登录的情况下你看到的页面应该是这样的，并且主界面的左下角应该也变成了你的用户名
![](https://tuchuang.ets2la.cn/csharp/20261018065621427.png)
::: tip 提示
安卓（Android）手机上的2FA软件有以下几种:

1. [Aegis Authenticator](https://github.com/beemdevelopment/Aegis) 开源
2. Microsoft Authenticator 软件商店
3. Google Authenticator 软件商店

苹果（iOS）

1. [Chronos Authenticator](https://apps.apple.com/cn/app/chronos-authenticator/id6503929490) 国区Apple Store

鸿蒙（HarmonyOS NEXT）

1. [OpenAuthenticator/开源验证器](https://appgallery.huawei.com/app/detail?id=com.example.tool_2fa&channelId=SHARE&source=appshare) 应用商店
   :::
