import { Utils } from '../common/Utils'
import { ChatClient, ChatType, ImageMessageBody, TextMessageBody, VideoMessageBody, VoiceMessageBody } from '@easemob/chatsdk'
import { fileUri } from '@kit.CoreFileKit'
import { playAudioStore } from '../common/PlayAudio'
import fs from '@ohos.file.fs';
import { MessageModel } from '../model/MessageListData'
import { Size } from '@ohos/hypium'
import { router } from '@kit.ArkUI'
import { print } from '@kit.BasicServicesKit';

@Component
export struct  TxtReceiveView{

  @State msg : MessageModel | undefined = undefined
  build() {
    Column(){
      Blank(20)
      Text(this.msg?.hxMessage?.getChatType() == ChatType.Chat ? "" : this.msg?.name)
        .margin({left:38,bottom:3})
        .fontColor('#1195db')
        .fontSize(13)
      Row({space:5}){
        Image(this.msg?.avatarUrl? this.msg?.avatarUrl: $r('app.media.single'))
          .width(25)
          .borderRadius(3)
          .margin({left:5})
        Text((this.msg?.hxMessage?.getBody() as TextMessageBody).getContent())
          .width(Utils.getChangeLineHeight((this.msg?.hxMessage?.getBody() as TextMessageBody).getContent(),16)+20)
          .fontSize(16)
          .backgroundColor('#1195db')
          .padding(10)
          .fontColor(Color.White)
          .borderRadius(6)
      }
      .justifyContent(FlexAlign.End)
      .alignItems(VerticalAlign.Bottom)

      Text(Utils.getDateTime(this.msg?.hxMessage?.getServerTimestamp() as number,null))
        .margin({left:38,top:3})
        .fontSize(13)
        .fontColor(Color.Gray)
    }.alignItems(HorizontalAlign.Start)
    .width('100%')
  }
}

@Component
export struct  ImgReceiveView{
  @State msg : MessageModel | undefined = undefined
  private  fileUrl:Resource|string|undefined = undefined
  private  ratio : number = 1.0
  aboutToAppear(): void {
    const path = (this.msg?.hxMessage?.getBody() as ImageMessageBody).getThumbnailLocalPath()
    if (fs.accessSync(path)){
      this.fileUrl = fileUri.getUriFromPath(path)
    }else {
      this.fileUrl = (this.msg?.hxMessage?.getBody() as ImageMessageBody).getThumbnailRemoteUrl()
    }
    this.ratio = (this.msg?.hxMessage?.getBody() as ImageMessageBody).getHeight()/
    (this.msg?.hxMessage?.getBody() as ImageMessageBody).getWidth()
  }
  build() {
    Column(){
      Blank(20)
      Text(this.msg?.hxMessage?.getChatType() == ChatType.Chat ? "" : this.msg?.name)
        .margin({left:38,bottom:3})
        .fontColor('#1195db')
        .fontSize(13)
      Row({space:5}){
        Image(this.msg?.avatarUrl? this.msg?.avatarUrl: $r('app.media.single'))
          .width(25)
          .borderRadius(3)
          .margin({left:5})
        Image(this.fileUrl)
          .width(175)
          .height(175*this.ratio)
          .borderRadius(6)
          .alt($r('app.media.placeholder'))


      }.width('100%')
      .justifyContent(FlexAlign.Start)
      .alignItems(VerticalAlign.Bottom)
      Text(Utils.getDateTime(this.msg?.hxMessage?.getServerTimestamp() as number,null))
        .margin({left:38,top:3})
        .fontSize(13)
        .fontColor(Color.Gray)
    }.alignItems(HorizontalAlign.Start)
    .onClick(async ()=>{

      // ChatClient.getInstance().chatManager()?.downloadAttachment(this.msg)
      // console.error((this.msg?.hxMessage?.getBody() as ImageMessageBody).getLocalPath())


    })
  }
}

@Component
export struct  VideoReceiveView{
  @State msg : MessageModel | undefined = undefined
  private  fileUrl:Resource|string|undefined = undefined
  private  ratio : number = 1.0
  aboutToAppear(): void {
    const path = (this.msg?.hxMessage?.getBody() as VideoMessageBody).getThumbnailLocalPath()
    if (fs.accessSync(path)){
      this.fileUrl = fileUri.getUriFromPath(path)
    }else {
      this.fileUrl = (this.msg?.hxMessage?.getBody() as VideoMessageBody).getThumbnailRemoteUrl()
    }
    this.ratio = (this.msg?.hxMessage?.getBody() as VideoMessageBody).getThumbnailHeight()/
    (this.msg?.hxMessage?.getBody() as VideoMessageBody).getThumbnailWidth()
  }
  build() {
    Column(){
      Blank(20)
      Text(this.msg?.hxMessage?.getChatType() == ChatType.Chat ? "" : this.msg?.name)
        .margin({left:38,bottom:3})
        .fontColor('#1195db')
        .fontSize(13)
      Row({space:5}){
        Image(this.msg?.avatarUrl? this.msg?.avatarUrl: $r('app.media.single'))
          .width(25)
          .borderRadius(3)
          .margin({left:5})
        Stack(){
          Image(this.fileUrl)
            .width(175)
            .height(175*this.ratio)
            .borderRadius(6)
            .alt($r('app.media.placeholder'))
          Image($r('app.media.video_play'))
            .width(50)
            .borderRadius(6)
        }
      }.width('100%')
      .justifyContent(FlexAlign.Start)
      .alignItems(VerticalAlign.Bottom)
      Text(Utils.getDateTime(this.msg?.hxMessage?.getServerTimestamp() as number,null))
        .margin({left:38,top:3})
        .fontSize(13)
        .fontColor(Color.Gray)
    }.alignItems(HorizontalAlign.Start)
    .onClick(async ()=>{
      const videoBody = (this.msg?.hxMessage?.getBody() as VideoMessageBody)
      router.pushUrl({ url: 'pages/VideoPage',params:
      {"previewUri":videoBody.getThumbnailRemoteUrl(),
        "videoSrc":videoBody.getRemoteUrl()
      }})
    })
  }
}

@Component
export struct VoiceReceiveView{
  @State msg : MessageModel | undefined = undefined
  build() {
    Column(){
      Blank(20)
      Text(this.msg?.hxMessage?.getChatType() == ChatType.Chat ? "" : this.msg?.name)
        .margin({left:38,bottom:3})
        .fontColor('#1195db')
        .fontSize(13)
      Row({space:5}){
        Image(this.msg?.avatarUrl? this.msg?.avatarUrl: $r('app.media.single'))
          .width(25)
          .borderRadius(3)
          .margin({left:5})
        Row(){
          Text((this.msg?.hxMessage?.getBody() as VoiceMessageBody).getDuration() + "'")
            .padding(10)
            .fontColor(Color.White)
            .borderRadius(6)
          Image($r('app.media.audio_play_left_dark'))
            .height(25)
            .borderRadius(6)
            .margin({left:10,right:10})
        }.backgroundColor('#1195db')
        .height(40)
        .borderRadius(5)
        .onClick(async ()=>{
          let fdPath = (this.msg?.hxMessage?.getBody() as VoiceMessageBody).getLocalPath()
          playAudioStore.setAVPlayerCallback(fdPath);
        })
      }.width('100%')
      .justifyContent(FlexAlign.Start)
      .alignItems(VerticalAlign.Bottom)
      Text(Utils.getDateTime(this.msg?.hxMessage?.getServerTimestamp() as number,null))
        .margin({left:38,top:3})
        .fontSize(13)
        .fontColor(Color.Gray)
    }.alignItems(HorizontalAlign.Start)
  }
}
