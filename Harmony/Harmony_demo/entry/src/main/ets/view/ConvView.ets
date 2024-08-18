import { ChatMessage, ContentType, Conversation, ConversationType, ImageMessageBody, TextMessageBody } from 'chatsdk'
import { Utils } from '../common/Utils'
import { router } from '@kit.ArkUI'
import { ConversationModel } from '../model/ConvListData'

@Component
export struct ConvView {
  // @State conv : ConversationModel | undefined = undefined
  @ObjectLink conv : ConversationModel
  private avatarUrl:Resource|string|undefined = undefined
  aboutToAppear(): void {
    if (this.conv?.hxConversation?.getType() == ConversationType.Chat) {
      if (this.conv.avatarUrl == undefined) {
        this.avatarUrl = $r('app.media.single')
      }else {
        this.avatarUrl = this.conv.avatarUrl
      }
    }else {
      this.avatarUrl = this.conv.imgSrc
    }
  }

  build() {
    if (this.conv != undefined){
      Row({space:5}) {
        Image(this.avatarUrl)
          .borderRadius(20)
          .width(40)
          .height(40)
          .margin(10)
          // .backgroundColor(Color.Green)
          .margin({left:10})
        Column({space:3}){
          Text(this.conv.name).fontSize(18)
          Text(this.getMsgData(this.conv.hxConversation))
            .fontSize(15)
            .fontColor(Color.Gray)
        }.layoutWeight(1)
        .alignItems(HorizontalAlign.Start)

        Column({space:3}){
          Text(Utils.getDateTime(this.conv.latestMessage?.getServerTimestamp() as number ,null))
            .textAlign(TextAlign.End)
            .fontSize(13)
            .fontColor(Color.Gray)
            .width(80)
          Text(this.conv.unreadMsgCount == 0 ?  "" : this.conv.unreadMsgCount.toString() )
            .width(20)
            .height(20)
            .borderRadius(10)
            .fontColor(Color.White)
            .backgroundColor(this.conv.unreadMsgCount == 0 ? Color.White : '#1195db')
            .fontSize(13)
            .textAlign(TextAlign.Center)
        }.width(70)
        .margin({right:15})
        .alignItems(HorizontalAlign.End)
      }
      .height(70)
      .width('100%')
      .justifyContent(FlexAlign.Start)
      .onClick(()=>{
        // console.warn(this.conv?.hxConversation?.conversationId())
        router.pushUrl({ url: 'pages/ChatPage',params:
        {"convId":this.conv?.hxConversation?.conversationId(),
          "type":this.conv?.hxConversation?.getType()
        }})
        // this.conv.unreadMsgCount+=1;
      })
    }
  }
  getMsgData(c?:Conversation):string{
    let data = ""
    const  msg = c?.getLatestMessage()
    if (msg != undefined) {
      switch (msg.getType()){
        case ContentType.TXT:
          data = (msg.getBody() as TextMessageBody).getContent()
          break
        case ContentType.IMAGE:
          data = "[图片]"
          // console.error("dddd--"+ (msg.getBody() as ImageMessageBody).getThumbnailLocalPath())
          break
        case ContentType.VIDEO:
          data = "[视频]"
          break
        case ContentType.LOCATION:
          data = "[位置]"
          break
        case ContentType.VOICE:
          data = "[语音]"
          break
        case ContentType.FILE:
          data = "[文件]"
          break
        case ContentType.CUSTOM:
          data = "[自定义]"
          break
        case ContentType.COMBINE:
          data = "[合并]"
          break
      }
    }
    if (c?.getType() == ConversationType.GroupChat) {
      return c.getLatestMessage()?.getFrom() + ":" + data
    }
    return data
  }
}