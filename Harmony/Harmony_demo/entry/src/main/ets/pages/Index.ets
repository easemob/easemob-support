import { ChatClient, ChatError } from '@easemob/chatsdk';
import { Prompt, router } from '@kit.ArkUI';
import { kvStore } from '../common/KVStoreManager';

@Entry
@Component
struct Index {
  @State name: string = '';
  @State pw: string = '';
  build() {
    Column({ space: 20 }){
      Blank(160)
      TextInput({placeholder:"输入账号"})
        .width('60%')
        .onChange((value: string) => {
          this.name = value
        })
      TextInput({placeholder:"输入密码"})
        .width('60%')
        .onChange((value: string) => {
          this.pw = value
        })
      Blank(30)
      Button("登录").onClick(()=>{
        console.warn(this.name + "----" + this.pw)
        ChatClient.getInstance().login(this.name, this.pw).then(() => {
          Prompt.showToast({message: "登录成功"});
          kvStore.getAll()
          router.replaceUrl({ url: 'pages/TabsPage' })
        }).catch((e:ChatError)=>{
          // Prompt.showToast({message: e.description});
          console.error("登录失败"+e.description)
        })
      }).width("60%")
    }.width("100%")
  }
  aboutToAppear(): void {
  }
}
