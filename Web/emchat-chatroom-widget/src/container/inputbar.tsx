import { defineComponent, ref } from "vue"
import { EasemobChat } from "easemob-websdk"
import { EMClient } from "../EaseIM"
import { useManageChatroom } from "../EaseIM/mangeChatroom"
/* compoents */
import InputEmojiComponent from "../components/InputEmojiComponent"
import UploadImageComponent from "../components/UploadImageComponent"
import "./style/inputbar.css"
export enum PLACE_HOLDER_TEXT {
  TEXT = "Enter 发送输入的内容..."
}
export default defineComponent({
  name: "InputBarContainer",
  setup() {
    //基础文本发送
    const inputContent = ref("")
    const setInputContent = (event: Event) => {
      inputContent.value = (event.target as HTMLInputElement).value
    }
    const { currentChatroomId, loginUserInfo, sendDisplayMessage } =
      useManageChatroom()
    const sendMessage = async (event: KeyboardEvent) => {
      if (inputContent.value.match(/^\s*$/)) return
      if (event.code === "Enter" && !event.shiftKey) {
        event.preventDefault()
        console.log(">>>>>>调用发送方法")
        const param: EasemobChat.CreateTextMsgParameters = {
          chatType: "chatRoom",
          type: "txt",
          to: currentChatroomId.value,
          msg: inputContent.value,
          from: EMClient.user,
          ext: {
            nickname: loginUserInfo.nickname
          }
        }
        try {
          await sendDisplayMessage(param)
          inputContent.value = ""
        } catch (error) {
          console.log(">>>>>消息发送失败", error)
        }
      }
    }
    const appendEmojitoInput = (emoji: string) => {
      inputContent.value = inputContent.value + emoji
    }
    return () => (
      <>
        <div class={"input_bar_container"}>
          <div class={"control_strip_container"}>
            <InputEmojiComponent onAppendEmojitoInput={appendEmojitoInput} />
            <UploadImageComponent />
          </div>

          <div class={"message_content_input_box"}>
            <input
              class={"message_content_input"}
              type="text"
              value={inputContent.value}
              onInput={setInputContent}
              placeholder={PLACE_HOLDER_TEXT.TEXT}
              onKeyup={sendMessage}
            />
          </div>
        </div>
      </>
    )
  }
})
