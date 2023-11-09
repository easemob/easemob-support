import type { App } from "vue"
import EasemobChatroom from "./container"
import { initEMClient } from "./EaseIM"
export interface IEeasemobOptions {
  appKey: string
}

export default {
  install: (app: App, options: IEeasemobOptions) => {
    // 在这里编写插件代码
    console.log(app)
    console.log("options", options)
    if (options && options?.appKey) {
      initEMClient(options.appKey)
    } else {
      throw console.error("appKey不能为空")
    }
    app.component(EasemobChatroom.name, EasemobChatroom)
  }
}
