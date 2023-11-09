import { defineComponent, nextTick, watch } from "vue"
import { useManageChatroom } from "../EaseIM/mangeChatroom"
import { scrollBottom } from "../utils"
import "./style/message.css"
import { EasemobChat } from "easemob-websdk"
const { messageCollect } = useManageChatroom()

const MessageList = () => {
  const downloadSourceImage = (message: EasemobChat.MessageBody) => {
    if (message.type === "img") {
      window.open(message.url)
    }
  }
  return (
    <>
      {messageCollect.length > 0 &&
        messageCollect.map(msgItem => {
          return (
            <div class={"message_item_box"} key={msgItem.id}>
              <div class={"message_item_nickname"}>
                {msgItem?.ext?.nickname || msgItem.from}
              </div>
              {msgItem.type === "txt" && (
                <p class={"message_item_textmsg"}>{msgItem.msg}</p>
              )}
              {msgItem.type === "img" && (
                <img
                  style={"cursor: pointer;"}
                  onClick={() => {
                    downloadSourceImage(msgItem)
                  }}
                  src={msgItem.thumb}
                />
              )}
            </div>
          )
        })}
    </>
  )
}
export default defineComponent({
  name: "MessageContainer",
  setup() {
    watch(messageCollect, () => {
      console.log(">>>>>>监听到消息列表改变")
      nextTick(() => {
        const messageContainer = document.querySelector(".message_container")
        setTimeout(() => {
          messageContainer && scrollBottom(messageContainer)
        }, 300)
      })
    })

    return () => {
      return (
        <>
          <div class="message_container">
            <MessageList />
          </div>
        </>
      )
    }
  }
})
