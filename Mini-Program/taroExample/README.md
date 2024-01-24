## 示例简述

> 该示例主要作用为在使用 Taro 跨平台开发微信小程序 SDK 时，如何集成引入环信微信小程序 SDK 并实现登录发送消息。

## 如何运行

1. `pnpm install`
2. `pnpm run dev:weapp`
3. `在微信开发者工具中导入dist文件，等待热更新运行`

## 相关目录结构

`src/EaseIM/SDK`

> SDK 源文件，包含其类型声明文件

`src/EaseIM`

> IM 所有依赖 SDK 以及初始化配置

`src/EaseIM/index.ts`

> 初始化以及导出 SDK 实例以及类型声明文件，以及 SDK 构建消息方法

`src/EaseIM/config`

> SDK 实例化时必传配置，包含 rest 请求地址、websocket 连接地址、appKey。

`src/EaseIM/emApis`

> 函数式封装对 SDK API 的调用，其他 API 也可仿照该形式封装调用。

`src/EaseIM/emListeners`

> 函数式封装对 SDK 监听回调的注册，主要用于处理 SDK 各式监听回调时间。

## 相关调用

具体调用请看`pages/index.tsx`文件。
