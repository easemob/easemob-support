import { EMClient } from "../index";
import type { EasemobChat } from "../index";

interface IEmOpenParameters {
  user: string;
  pwd: string;
}
const emConnect = () => {
  const emLoginWithPassword = (params: IEmOpenParameters) => {
    const { user, pwd } = params;
    return new Promise<EasemobChat.LoginResult>((resolve, reject) => {
      EMClient.open({
        user,
        pwd,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  return {
    emLoginWithPassword,
  };
};
export { emConnect };
