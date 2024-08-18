import { ChatClient, ChatError } from 'chatsdk';
import { Prompt, router } from '@kit.ArkUI';
import { kvStore, UserModel } from '../common/KVStoreManager';

@Component
export struct MePage{
  @State userModel: UserModel | undefined  = undefined;
  build() {
    Column(){
      Blank(80)
      Image(this.userModel?.avatarUrl?this.userModel?.avatarUrl:$r('app.media.single'))
        .width(120)
      Blank(20)
      Text("昵称:"+this.userModel?.nickname)
        .fontSize(24)
        .fontWeight(FontWeight.Bold)
      Blank(10)
      Text("ID:"+ChatClient.getInstance().getCurrentUser())
        .fontColor(Color.Gray)

      Blank(130)
      Button("退出登录").onClick(()=>{
        ChatClient.getInstance().logout().then(() => {
          router.replaceUrl({ url: 'pages/Index' })
        }).catch((e:ChatError)=>{
          Prompt.showToast({message: e.description});
        })
      }).width("60%")
    }
    .width('100%')
  }
  async aboutToAppear(): Promise<void> {
    this.userModel = kvStore.userCache.get(ChatClient.getInstance().getCurrentUser())
  }
}