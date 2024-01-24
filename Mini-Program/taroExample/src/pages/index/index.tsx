import { View, Button, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.less";
import { emConnect, emMessages } from "@/EaseIM/emApis";
export default function Index() {
  const title = "环信集成示例";
  useLoad(() => {
    console.log("Page loaded.");
  });
  const { emLoginWithPassword } = emConnect();
  const loginIM = async () => {
    console.log(">>>>>loginIM");
    try {
      await emLoginWithPassword({ user: "hfp", pwd: "1" });
    } catch (error) {
      console.log(error);
    }
  };
  const { sendDisplayMessage } = emMessages();
  const sendTestTxtMessage = async () => {
    console.log(">>>>>sendTestTxtMessage");
    try {
      const { localMsgId, serverMsgId } = await sendDisplayMessage({
        type: "txt",
        chatType: "singleChat",
        to: "pfh",
        msg: "测试文本消息！",
      });
      console.log("发送成功", localMsgId, serverMsgId);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <View className="title_text">
        <Text>{title}</Text>
      </View>
      <Button className="btn" type="primary" onClick={loginIM}>
        登录
      </Button>
      <Button className="btn" type="primary" onClick={sendTestTxtMessage}>
        发送一条测试文本消息
      </Button>
    </>
  );
}
