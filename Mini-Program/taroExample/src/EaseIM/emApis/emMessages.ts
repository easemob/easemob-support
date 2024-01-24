import { EMClient, EMCreateMessage, EasemobChat } from "../index";
export const emMessages = () => {
  const sendDisplayMessage = (params: EasemobChat.CreateMsgType) => {
    return new Promise<EasemobChat.SendMsgResult>((resolve, reject) => {
      const msg = EMCreateMessage.create(params);
      EMClient.send(msg)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  return {
    sendDisplayMessage,
  };
};
