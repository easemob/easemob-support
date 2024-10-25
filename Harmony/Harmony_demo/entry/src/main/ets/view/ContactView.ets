import { Contact, ConversationType, Group } from '@easemob/chatsdk'
import { router } from '@kit.ArkUI'
import { ContactModel } from '../pages/ContactPage'

@Component
export struct ContactView{

  @State contact : ContactModel | undefined = undefined
  build() {
    Row({space:5}) {
      Image(this.contact?.avatarUrl ? this.contact?.avatarUrl : $r('app.media.single'))
        .borderRadius(20)
        .width(40)
        .height(40)
        .margin(10)
        .margin({left:20})
      Text(this.contact?.name ? this.contact?.name : this.contact?.userId)
        .fontSize(18)
        .layoutWeight(1)
    }.height(50)
    .onClick(()=>{
      router.pushUrl({ url: 'pages/ChatPage',params:
      {"convId":this.contact?.userId,
        "type": ConversationType.Chat
      }})
    })
  }
}