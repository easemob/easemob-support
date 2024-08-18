import { Contact, ConversationType, Group } from 'chatsdk'
import { router } from '@kit.ArkUI'
import { ContactModel } from '../pages/ContactPage'

@Component
export struct GroupView{

  @State group : Group | undefined = undefined
  type =  ConversationType.Chat
  build() {
    Row({space:5}) {
      Image($r('app.media.group'))
        .borderRadius(20)
        .width(40)
        .height(40)
        .margin(10)
        .margin({left:10})
      Text(this.group?.groupName())
        .fontSize(18)
        .layoutWeight(1)
    }.height(50)
    .onClick(()=>{
      router.pushUrl({ url: 'pages/ChatPage',params:
      {"convId":this.group?.groupId(),
        "type": ConversationType.GroupChat
      }})
    })
  }
}