import { defineComponent, ref } from "vue"
import { useManageChatroom } from "../../EaseIM/mangeChatroom"
import { EasemobChat } from "easemob-websdk"
export default defineComponent({
  name: "UploadImageMsgComponent",
  setup() {
    const inputFileRef = ref<HTMLInputElement>()
    const chooseImage = (Event: any) => {
      console.log("Event", Event)
      inputFileRef.value?.click()
    }
    const sendImageMessage = async (Event: any) => {
      const { sendDisplayMessage, currentChatroomId, loginUserInfo } =
        useManageChatroom()
      console.log("Event", Event)
      if (inputFileRef.value && inputFileRef.value.files) {
        const commonFile: File = inputFileRef.value.files[0]
        const file: EasemobChat.FileObj = {
          data: commonFile, // file 对象。
          filename: commonFile.name, //文件名称。
          filetype: commonFile.type, //文件类型。
          url: window.URL.createObjectURL(commonFile) //文件地址。
        }
        const param: EasemobChat.CreateImgMsgParameters = {
          type: "img",
          chatType: "chatRoom",
          to: currentChatroomId.value,
          file: file,
          ext: {
            // 图片文件长度，单位为字节。
            file_length: commonFile.size,
            nickname: loginUserInfo.nickname
          }
        }
        try {
          await sendDisplayMessage(param)
          console.log(">>>>>>>图片发送成功")
        } catch (error) {
          console.log(">>>>>>发送失败", error)
        } finally {
          inputFileRef.value.value = ""
        }
      }
    }
    return () => {
      return (
        <>
          <div class={"control_strip_func_image"} onClick={chooseImage}>
            <svg
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4166"
            >
              <path
                d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32z m-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792z m0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z"
                p-id="4167"
              ></path>
              <path
                d="M304 456c48.6 0 88-39.4 88-88s-39.4-88-88-88-88 39.4-88 88 39.4 88 88 88z m0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z"
                p-id="4168"
              ></path>
            </svg>
            <input
              ref={inputFileRef}
              style={"display: none;"}
              type="file"
              onChange={sendImageMessage}
              accept="image/*"
            />
          </div>
        </>
      )
    }
  }
})
