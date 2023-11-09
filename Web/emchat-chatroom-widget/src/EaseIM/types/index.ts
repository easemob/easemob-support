import { EasemobChat } from "easemob-websdk"
export type MessageTypes = "txt" | "img"

export type AllowMessageType =
  | EasemobChat.CreateImgMsgParameters
  | EasemobChat.CreateTextMsgParameters

export type DisplayMessageType =
  | EasemobChat.TextMsgBody
  | EasemobChat.ImgMsgBody

export interface ILoginUserInfo {
  loginUserId: string
  nickname: string
}
