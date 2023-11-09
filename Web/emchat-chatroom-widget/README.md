## emchat-chatroom-widget简介

> 此小插件主要使用场景为基于Vue3项目快速搭建一个环信IM的聊天室窗口。

## 技术栈

- Vue3
- Typescript
- Vite

## 插件使用

```js
import EMChatroom from "emchat-chatroom-widget/emchat-chatroom-widget.esm.js"
import "emchat-chatroom-widget/style.css"
//appKey 需从环信申请
createApp(App)
  .use(EMChatroom, {
    appKey: "easemob#easeim"
  })
  .mount("#app")

  //模版组件内使用
  /**
   * @param {username} string
   * @param {password} string
   * @param {accessToken} string
   * @param {chatroomId} string
   */
    <EasemobChatroom
      :username="'hfp'"
      :password="'1'"
      :chatroomId="'208712152186885'"
    >
    </EasemobChatroom>
```

## 源码项目运行

```
//安装依赖
pnpm install

//启动目录中的demo
在demo中同样执行 pnpm install
pnpm run dev
打开页面可看到插件引入效果。

//打包源码
pnpm run build:widget
```
