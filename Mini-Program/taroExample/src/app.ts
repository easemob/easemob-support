import { PropsWithChildren } from "react";
import { useLaunch } from "@tarojs/taro";
import "./app.less";

/* EaseIM */
import { EMClient } from "@/EaseIM";
import { emListener } from "@/EaseIM/emListeners";
function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log("App launched.", EMClient);
    emListener();
  });

  // children 是将要会渲染的页面
  return children;
}

export default App;
