import { defineComponent, onMounted } from "vue"
import { EMClient } from "../EaseIM"
import { useManageChatroom } from "../EaseIM/mangeChatroom"
import { manageEasemobApis } from "../EaseIM/imApis"
import "./style/index.css"
/* components */
import MessageContainer from "./message"
import InputBarContainer from "./inputbar"
console.log("EMClient", EMClient)
export default defineComponent({
  name: "EasemobChatroom",
  props: {
    username: {
      type: String,
      default: "",
      required: true
    },
    password: {
      type: String,
      default: ""
    },
    accessToken: {
      type: String,
      default: ""
    },
    chatroomId: {
      type: String,
      default: "",
      required: true
    }
  },
  setup(props) {
    const { setCurrentChatroomId } = useManageChatroom()
    const { loginIMWithPassword, loginIMWithAccessToken } = manageEasemobApis()
    const loginIM = async (): Promise<void> => {
      if (!EMClient) return
      try {
        if (props.accessToken) {
          await loginIMWithAccessToken(props.username, props.accessToken)
        } else {
          await loginIMWithPassword(props.username, props.password)
        }
      } catch (error: any) {
        throw `${error.data.message}`
      }
    }
    const closeIM = async (): Promise<void> => {
      console.log(">>>>>断开连接")
      //   EMClient.close()
    }
    onMounted(() => {
      loginIM()
      if (props.chatroomId) {
        setCurrentChatroomId(props.chatroomId)
      }
    })
    return {
      loginIM,
      closeIM
    }
  },
  render() {
    return (
      <>
        <div class={"easemob_chatroom_container"}>
          <MessageContainer />
          <InputBarContainer />
        </div>
      </>
    )
  }
})
