import { EasemobChat } from "easemob-websdk"
import { reactive, ref } from "vue"
import { DisplayMessageType, ILoginUserInfo } from "../types/index"
import { manageEasemobApis } from "../imApis/"
const messageCollect = reactive<DisplayMessageType[]>([])
const loginUserInfo: ILoginUserInfo = {
  loginUserId: "",
  nickname: ""
}
const currentChatroomId = ref("")
export const useManageChatroom = () => {
  const setCurrentChatroomId = (roomId: string) => {
    currentChatroomId.value = roomId
  }
  const setLoginUserInfo = async (loginUserId: string) => {
    const { fetchLoginUserNickname } = manageEasemobApis()
    loginUserInfo.loginUserId = loginUserId
    try {
      const res = await fetchLoginUserNickname(loginUserId)
      loginUserInfo.nickname = res[loginUserId].nickname
      console.log(">>>>>>获取到用户属性", loginUserInfo.nickname)
    } catch (error) {
      console.log(">>>>>>获取失败")
    }
  }
  const pushMessageToList = (message: DisplayMessageType) => {
    messageCollect.push(message)
  }
  const sendDisplayMessage = async (payload: EasemobChat.CreateMsgType) => {
    const { sendTextMessage, sendImageMessage } = manageEasemobApis()
    return new Promise((resolve, reject) => {
      if (payload.type === "txt") {
        sendTextMessage(payload)
          .then(res => {
            messageCollect.push(res as unknown as EasemobChat.TextMsgBody)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      }
      if (payload.type === "img") {
        sendImageMessage(payload)
          .then(res => {
            messageCollect.push(res as unknown as EasemobChat.ImgMsgBody)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      }
    })
  }

  return {
    messageCollect,
    currentChatroomId,
    loginUserInfo,
    setCurrentChatroomId,
    sendDisplayMessage,
    pushMessageToList,
    setLoginUserInfo
  }
}
