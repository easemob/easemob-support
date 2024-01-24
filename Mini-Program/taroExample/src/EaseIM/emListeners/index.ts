import { EMClient, EasemobChat } from "../index";
interface IEmConnectListener extends EasemobChat.EventHandlerType {
  onReconnecting?: (msg: any) => void;
}
export const emListener = () => {
  console.log(">>>>监听挂载");
  EMClient.addEventHandler("emListener", {
    onConnected: () => {
      console.log(">>>>监听连接成功");
    },
    onDisconnected: () => {
      console.log(">>>>监听连接失败");
    },
    onReconnecting: () => {
      console.log(">>>>重连中...");
    },
  } as IEmConnectListener);
};
