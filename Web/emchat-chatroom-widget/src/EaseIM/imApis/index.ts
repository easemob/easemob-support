import { EasemobChat } from "easemob-websdk"
import { EMClient, EMCreateMessage } from "../index"
import { useManageChatroom } from "../mangeChatroom"
export interface ILoginIMWithPassword {
  username: string
  password: string
}
export const manageEasemobApis = () => {
  const { currentChatroomId } = useManageChatroom()
  const loginIMWithPassword = (
    username: string,
    password: string
  ): Promise<EasemobChat.LoginResult> => {
    return new Promise((resolve, reject) => {
      EMClient.open({
        user: username,
        pwd: password
      })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  const loginIMWithAccessToken = (
    username: string,
    accessToken: string
  ): Promise<EasemobChat.LoginResult> => {
    return new Promise((resolve, reject) => {
      EMClient.open({
        user: username,
        accessToken: accessToken
      })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  const fetchLoginUserNickname = (loginUserId: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      EMClient.fetchUserInfoById(loginUserId, "nickname")
        .then((res: any) => {
          console.log(">>>>消息测试", res.data)
          if (res.data) {
            resolve(res.data)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  const joinChatroom = (): Promise<
    EasemobChat.AsyncResult<EasemobChat.CommonRequestResult>
  > => {
    if (!currentChatroomId.value) throw "please pass roomId!"
    return new Promise((resolve, reject) => {
      EMClient.joinChatRoom({
        roomId: currentChatroomId.value
      })
        .then(res => {
          console.log(">>>>>joinChatroom success", res)
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  const sendTextMessage = (
    params: EasemobChat.CreateTextMsgParameters
  ): Promise<EasemobChat.SendMsgResult> => {
    return new Promise((resolve, reject) => {
      const msg = EMCreateMessage(params)
      EMClient.send(msg)
        .then(res => {
          msg.id = res.serverMsgId
          Object.assign(res, msg)
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  const sendImageMessage = (
    params: EasemobChat.CreateImgMsgParameters
  ): Promise<EasemobChat.SendMsgResult> => {
    return new Promise((resolve, reject) => {
      const msg = EMCreateMessage(params)
      EMClient.send(msg)
        .then(res => {
          msg.id = res.serverMsgId
          Object.assign(res, msg)
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  return {
    loginIMWithPassword,
    loginIMWithAccessToken,
    joinChatroom,
    sendTextMessage,
    sendImageMessage,
    fetchLoginUserNickname
  }
}
