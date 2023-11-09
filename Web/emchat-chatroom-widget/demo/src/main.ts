import { createApp } from "vue"

import App from "./App.vue"
import EMChatroom from "../../build/emchat-chatroom-widget.esm.js"
import "../../build/style.css"
console.log("EMChatroom", EMChatroom)
createApp(App)
  .use(EMChatroom, {
    appKey: "easemob#easeim"
  })
  .mount("#app")
