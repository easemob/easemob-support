import EaseSDK from "./SDK/Easemob-chat-4.4.0";
import type { EasemobChat } from "./SDK/Easemob-chat";
import { EM_API_URL, EM_APP_KEY, EM_WEB_SOCKET_URL } from "./config";
console.log("EaseSDK", EaseSDK);
let EMClient = {} as EasemobChat.Connection;
EMClient = new EaseSDK.connection({
  appKey: EM_APP_KEY,
  apiUrl: EM_API_URL,
  url: EM_WEB_SOCKET_URL,
});
const EMCreateMessage: EasemobChat.Message = EaseSDK.message;

export { EMClient, EMCreateMessage, EasemobChat };
