import { EasemobChat } from "easemob-websdk"
import { useManageChatroom } from "../mangeChatroom"
import { manageEasemobApis } from "../imApis"
export const mountEaseIMListener = (EMClient: EasemobChat.Connection) => {
  const { pushMessageToList, setLoginUserInfo, currentChatroomId } =
    useManageChatroom()
  const { joinChatroom } = manageEasemobApis()
  console.log(">>>mountEaseIMListener")
  EMClient.addEventHandler("connection", {
    onConnected: () => {
      console.log(">>>>>onConnected")
      joinChatroom()
      setLoginUserInfo(EMClient.user)
    },
    onDisconnected: () => {
      console.log(">>>>>Disconnected")
    },
    onError: (error: any) => {
      console.log(">>>>>>Error", error)
    }
  })
  EMClient.addEventHandler("message", {
    onTextMessage(msg) {
      if (msg.chatType === "chatRoom" && msg.to === currentChatroomId.value) {
        pushMessageToList(msg)
      }
    },
    onImageMessage(msg) {
      if (msg.chatType === "chatRoom" && msg.to === currentChatroomId.value) {
        pushMessageToList(msg)
      }
    }
  })
  EMClient.addEventHandler("chatroomEvent", {
    onChatroomEvent(eventData) {
      console.log(">>>>chatroomEvent", eventData)
    }
  })
}
