---
title: 隐私政策
sidebar: false
---

# 隐私政策

**最后更新日期：2026 年 9 月 10 日**

ETS2LA-CN（以下简称“我们”）重视您的隐私。本隐私政策说明 ETS2LA-CN Discord App（以下简称“本应用”）在提供 Discord 与 KOOK 跨平台消息同步服务时，如何收集、使用、处理和保护相关信息。

本应用主要用于将 ETS2LA 社区中指定 Discord 服务器和频道的消息同步至指定的 KOOK 频道，以便社区成员能够在不同平台获取相同的社区信息。

使用或加入安装了本应用的 Discord 服务器，即表示您已阅读并理解本隐私政策。

## 1. 我们是什么

ETS2LA-CN 是 ETS2LA 项目的中文社区及相关社区服务。

本应用是由 ETS2LA-CN 社区维护的 Discord App，主要功能包括：

- 接收 Discord 指定服务器或频道中的消息事件；
- 读取完成消息同步所必需的消息内容；
- 对消息进行必要的格式转换；
- 将处理后的消息发送至指定的 KOOK 频道；
- 为实现上述功能进行必要的日志记录和错误处理。

本应用不是 Discord Inc. 或 KOOK 官方应用，也不代表 Discord 或 KOOK。

## 2. 我们处理哪些信息

为了提供 Discord → KOOK 消息同步功能，本应用可能处理以下信息。

### 2.1 Discord 消息内容

当本应用被添加到 Discord 服务器并获得相应权限后，本应用可能接收指定频道中的：

- 消息正文；
- 消息作者的 Discord 用户 ID；
- 消息 ID；
- 频道 ID；
- 服务器 ID；
- 消息创建时间；
- 附件及其相关信息；
- Embeds、Components 等消息中用于正常同步的信息。

消息内容仅在实现消息同步、格式转换、错误处理和必要的服务运行维护范围内使用。

### 2.2 Discord 用户及服务器信息

为了识别消息来源和正确执行消息同步，本应用可能处理：

- Discord 用户 ID；
- Discord 服务器 ID；
- Discord 频道 ID；
- Discord 消息 ID；
- Bot 所需的其他必要 Discord API 数据。

本应用不会为了与消息同步无关的目的主动收集 Discord 用户的个人资料。

### 2.3 KOOK 信息

在执行消息同步时，本应用可能处理：

- KOOK 服务器或频道标识；
- 用于发送同步消息所需的消息信息；
- 与消息转发相关的运行状态和错误信息。

## 3. 我们为什么需要 Message Content Intent

本应用的核心功能是：

**Discord 消息 → 消息处理 → KOOK 消息**

因此，本应用需要读取指定 Discord 频道中的消息内容。

Message Content Intent 用于使 Discord App 能够获取执行消息同步所必需的消息内容。Discord 当前对 Message Content 等数据访问采用更严格的审核机制，因此本应用仅在确有业务需要的情况下使用该权限。

本应用不会因为拥有 Message Content Intent 而主动读取与其消息同步功能无关的数据。

## 4. 信息的使用方式

我们使用上述信息仅用于：

1. 将 Discord 消息同步至指定的 KOOK 频道；
2. 对 Discord 消息进行必要的格式转换；
3. 判断消息来源和目标频道；
4. 处理消息同步过程中的错误；
5. 维护本应用的稳定性和安全性；
6. 排查与消息同步有关的技术问题。

除非法律法规要求或为保护服务安全所必需，我们不会将通过本应用获得的信息用于广告、用户画像、出售数据或与消息同步无关的商业分析。

## 5. 消息存储与数据保留

本应用遵循**数据最小化原则**。

如果消息同步功能能够在实时处理后完成任务，我们不会为了建立用户资料或消息数据库而长期保存 Discord 消息内容。

消息内容原则上仅在完成消息同步所需的处理期间使用。

由于服务运行可能需要记录错误和运行状态，部分技术日志可能包含必要的消息标识符、服务器标识符、频道标识符或错误信息。这些日志仅用于维护服务和排查问题，并会在不再需要时删除。

如实际服务运行方式发生变化并需要长期保存消息内容，我们将在此隐私政策中更新相关说明。

## 6. 信息共享

本应用可能将必要的消息信息从 Discord 发送至配置的 KOOK 频道。

例如：

**Discord 指定频道**

↓

**ETS2LA-CN Discord App**

↓

**必要的消息处理**

↓

**指定 KOOK 频道**

除上述实现核心功能所必需的跨平台同步外，我们不会出售、出租或以其他方式向第三方提供用户个人信息。

本应用使用 Discord API 和 KOOK 提供的相关服务时，还会受到 Discord、KOOK 及其他相关服务自身隐私政策和服务条款的约束。

## 7. 第三方服务

本应用依赖第三方平台提供服务，包括但不限于：

- Discord；
- KOOK；
- 用于运行本应用的服务器、网络和基础设施服务。

这些第三方服务拥有各自的服务条款和隐私政策。

我们建议您在使用相关服务前阅读对应平台的政策。

## 8. 数据安全

我们采取合理的技术和管理措施保护本应用处理的信息，避免未经授权的访问、修改、披露或破坏。

这些措施可能包括：

- 限制服务器访问权限；
- 限制 Bot 权限范围；
- 限制消息同步范围；
- 对服务运行环境进行安全维护；
- 对必要的访问凭据进行安全管理。

但请注意，任何互联网服务都无法保证绝对安全。

## 9. 数据最小化

本应用遵循以下原则：

- 只处理实现消息同步所必需的数据；
- 不主动收集与功能无关的个人资料；
- 不主动读取不需要的服务器成员信息；
- 不主动读取不需要的用户在线状态信息；
- 不将消息内容用于广告或用户画像；
- 不出售用户数据。

## 10. 用户权利

根据适用的法律法规，您可能拥有访问、更正、删除或限制处理相关个人信息的权利。

如果您认为本应用处理了不必要的信息，或者希望了解与您的信息相关的数据处理情况，可以通过下方联系方式联系我们。

## 11. Discord 服务器管理员的责任

Discord 服务器管理员可以决定是否将本应用添加到服务器，以及允许本应用访问哪些频道。

服务器管理员可以通过调整 Discord 服务器和频道权限限制本应用能够访问的范围。

如果您不希望自己的消息被同步到 KOOK，请在相关 Discord 服务器中咨询服务器管理员，了解是否可以通过服务器或频道设置避免消息同步。

## 12. 隐私政策变更

我们可能根据服务功能、技术架构、法律法规或 Discord/KOOK 平台政策的变化更新本隐私政策。

更新后的隐私政策将在本页面发布，并更新“最后更新日期”。

如果发生重大变化，我们会在合理范围内通过适当方式进行通知。

## 13. 联系我们

如果您对本隐私政策、本应用的数据处理方式或隐私问题有疑问，可以通过 ETS2LA-CN 社区提供的官方联系方式与我们联系。

您也可以通过 ETS2LA-CN 官方项目页面获取最新的联系方式和社区信息。

## 14. 与 Discord 政策的关系

本应用使用 Discord API，因此使用本应用时还需要遵守 Discord 的相关服务条款、开发者条款、开发者政策和社区规则。

Discord 当前的隐私政策及相关政策可以在 Discord 官方网站查看。

本隐私政策仅适用于 ETS2LA-CN 本应用的数据处理行为，不取代 Discord 或 KOOK 自身的隐私政策。

---

**最后更新：2026 年 9 月 10 日**

---

# Privacy Policy

**Last updated: September 10, 2026**

ETS2LA-CN ("we," "us," or "our") respects your privacy. This Privacy Policy explains how the ETS2LA-CN Discord App (the "App") collects, uses, processes, and protects information when providing cross-platform message synchronization between Discord and KOOK.

The App is primarily used to synchronize messages from designated Discord servers and channels in the ETS2LA community to designated KOOK channels, allowing community members to access the same community information on different platforms.

By using the App or joining a Discord server where the App is installed, you acknowledge that you have read and understood this Privacy Policy.

## 1. Who We Are

ETS2LA-CN is the Chinese community and related community services of the ETS2LA project.

The App is a Discord App maintained by the ETS2LA-CN community. Its primary functions include:

- Receiving message events from designated Discord servers or channels;
- Reading message content necessary to complete message synchronization;
- Performing necessary format conversions on messages;
- Sending processed messages to designated KOOK channels;
- Maintaining necessary logs and handling errors to provide the functions above.

The App is not an official application of Discord Inc. or KOOK and does not represent Discord or KOOK.

## 2. What Information We Process

To provide Discord-to-KOOK message synchronization, the App may process the following information.

### 2.1 Discord Message Content

When the App is added to a Discord server and granted the relevant permissions, it may receive the following information from designated channels:

- Message text;
- The Discord user ID of the message author;
- Message ID;
- Channel ID;
- Server ID;
- Message creation time;
- Attachments and related information;
- Embeds, components, and other message information required for normal synchronization.

Message content is used only for message synchronization, format conversion, error handling, and necessary service operation and maintenance.

### 2.2 Discord User and Server Information

To identify message sources and correctly perform message synchronization, the App may process:

- Discord user IDs;
- Discord server IDs;
- Discord channel IDs;
- Discord message IDs;
- Other Discord API data necessary for the Bot.

The App does not actively collect Discord users' personal profiles for purposes unrelated to message synchronization.

### 2.3 KOOK Information

When performing message synchronization, the App may process:

- KOOK server or channel identifiers;
- Message information required to send synchronized messages;
- Operational status and error information related to message forwarding.

## 3. Why We Need the Message Content Intent

The core function of the App is:

**Discord message -> message processing -> KOOK message**

The App therefore needs to read message content in designated Discord channels.

The Message Content Intent allows the Discord App to obtain the message content necessary to perform synchronization. Discord currently applies stricter review mechanisms to access to data such as Message Content, so the App uses this permission only where there is a genuine business need.

The App does not actively read data unrelated to its message synchronization function merely because it has the Message Content Intent.

## 4. How We Use Information

We use the information described above only to:

1. Synchronize Discord messages to designated KOOK channels;
2. Perform necessary format conversions on Discord messages;
3. Identify message sources and target channels;
4. Handle errors during message synchronization;
5. Maintain the stability and security of the App;
6. Troubleshoot technical issues related to message synchronization.

Unless required by law or necessary to protect service security, we will not use information obtained through the App for advertising, user profiling, selling data, or commercial analysis unrelated to message synchronization.

## 5. Message Storage and Data Retention

The App follows the principle of data minimization.

If message synchronization can be completed through real-time processing, we will not retain Discord message content long-term to create user profiles or message databases.

In principle, message content is used only during the processing period required to complete synchronization.

Because service operation may require error and operational logs, some technical logs may contain necessary message, server, or channel identifiers, or error information. These logs are used only to maintain the service and troubleshoot issues and will be deleted when no longer needed.

If the actual operation of the service changes and long-term storage of message content becomes necessary, we will update this Privacy Policy accordingly.

## 6. Information Sharing

The App may send necessary message information from Discord to configured KOOK channels.

For example:

**Designated Discord channel**

↓

**ETS2LA-CN Discord App**

↓

**Necessary message processing**

↓

**Designated KOOK channel**

Apart from the cross-platform synchronization required to provide the core function, we do not sell, rent, or otherwise provide users' personal information to third parties.

When the App uses the Discord API, KOOK services, or other related services, it is also subject to the privacy policies and Terms of Service of Discord, KOOK, and those services.

## 7. Third-Party Services

The App depends on third-party platforms, including but not limited to:

- Discord;
- KOOK;
- Server, network, and infrastructure services used to run the App.

These third-party services have their own Terms of Service and privacy policies.

We recommend that you read the policies of the relevant platforms before using their services.

## 8. Data Security

We take reasonable technical and organizational measures to protect information processed by the App from unauthorized access, modification, disclosure, or destruction.

These measures may include:

- Restricting server access;
- Restricting Bot permissions;
- Restricting the scope of message synchronization;
- Maintaining the security of the service environment;
- Securely managing necessary access credentials.

However, please note that no Internet service can guarantee absolute security.

## 9. Data Minimization

The App follows these principles:

- Process only the data necessary to provide message synchronization;
- Do not actively collect personal profiles unrelated to the functions;
- Do not actively read unnecessary server member information;
- Do not actively read unnecessary user online status information;
- Do not use message content for advertising or user profiling;
- Do not sell user data.

## 10. User Rights

Under applicable laws and regulations, you may have the right to access, correct, delete, or restrict the processing of relevant personal information.

If you believe that the App has processed unnecessary information, or if you want to understand how information related to you is processed, you may contact us through the contact details below.

## 11. Responsibilities of Discord Server Administrators

Discord server administrators may decide whether to add the App to a server and which channels the App may access.

Server administrators may limit the scope of the App's access by adjusting Discord server and channel permissions.

If you do not want your messages synchronized to KOOK, consult the server administrator of the relevant Discord server to determine whether server or channel settings can prevent synchronization.

## 12. Changes to This Privacy Policy

We may update this Privacy Policy based on changes to service functions, technical architecture, laws and regulations, or Discord/KOOK platform policies.

The updated Privacy Policy will be published on this page and the "Last updated" date will be changed.

If there are material changes, we will provide notice through appropriate means within a reasonable period.

## 13. Contact Us

If you have questions about this Privacy Policy, the App's data processing, or privacy matters, you may contact us through the official contact details provided by the ETS2LA-CN community.

You may also obtain the latest contact details and community information through the official ETS2LA project page.

## 14. Relationship to Discord Policies

The App uses the Discord API. Therefore, when using the App, you must also comply with Discord's applicable Terms of Service, developer terms, developer policies, and community rules.

Discord's current Privacy Policy and related policies are available on Discord's official website.

This Privacy Policy applies only to the ETS2LA-CN App's data processing activities and does not replace the privacy policies of Discord, KOOK, or other platforms.

---

**Last updated: September 10, 2026**
