import EaseSDK, { EasemobChat } from "easemob-websdk"
import { mountEaseIMListener } from "./listener"
export let EMClient = {} as EasemobChat.Connection
export const EMCreateMessage = EaseSDK.message.create
export const initEMClient = (appKey: string) => {
  EMClient = new EaseSDK.connection({
    appKey: appKey
  })
  mountEaseIMListener(EMClient)
  return EMClient
}
