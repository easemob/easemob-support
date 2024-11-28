import { display, MeasureText, router } from '@kit.ArkUI'
import {
  ChatClient,
  ChatManager,
  ChatMessage, ImageMessageBody,
  MessageExtType,
  TextMessageBody, VideoMessageBody, VoiceMessageBody } from '@easemob/chatsdk'
import { Utils } from '../common/Utils'
import { fileIo, fileUri } from '@kit.CoreFileKit'
import { playAudioStore } from '../common/PlayAudio'
import { media } from '@kit.MediaKit'
import { image } from '@kit.ImageKit'
import File from '@system.file'
import { MessageModel } from '../model/MessageListData'
import { kvStore } from '../common/KVStoreManager'
import { EMClient } from '@easemob/chatsdk/src/main/cpp/types/libhyphenate/EMClient'

@Component
export struct  TxtSengView{
  @State msg : MessageModel | undefined = undefined

  build() {
    Column(){
      Blank(20)
      Row({space:5}){
        Image($r('app.media.message_status_succeed'))
          .width(20)
        Text((this.msg?.hxMessage?.getBody() as TextMessageBody).getContent())
          .width(Utils.getChangeLineHeight((this.msg?.hxMessage?.getBody() as TextMessageBody).getContent(),16)+20)
          .fontSize(16)
          .backgroundColor('#1195db')
          .padding(10)
          .fontColor(Color.White)
          .borderRadius(6)
        Image(kvStore.curUserInfo?.avatarUrl?kvStore.curUserInfo?.avatarUrl:$r('app.media.single'))
          .width(25)
          .borderRadius(3)
          .margin({right:5})
      }
      .justifyContent(FlexAlign.End)
      .alignItems(VerticalAlign.Bottom)

      Text(Utils.getDateTime(this.msg?.hxMessage?.getServerTimestamp() as number,null))
        .margin({right:38,top:3})
        .fontSize(13)
        .fontColor(Color.Gray)
      // Text()
    }.alignItems(HorizontalAlign.End)
    .width('100%')
    .onClick(()=>{
      this.msg?.hxMessage?.isReceiverRead()
    })
  }
}

@Component
export struct  ImgSengView{
  @State msg : MessageModel | undefined = undefined
  private imagePath = ""
  aboutToAppear(): void {
    const path = (this.msg?.hxMessage?.getBody() as ImageMessageBody).getThumbnailLocalPath()
    if (path.substring(0,5) == 'file:') {
      this.imagePath = path
    }else {
      this.imagePath = fileUri.getUriFromPath(path)
    }
  }
  build() {
    Column(){
      Blank(20)
      Row({space:5}){
        Image($r('app.media.message_status_succeed'))
          .width(20)
        Image(this.imagePath)
          .width(175)
          .alt($r('app.media.placeholder'))
          .borderRadius(6)
        Image(kvStore.curUserInfo?.avatarUrl?kvStore.curUserInfo?.avatarUrl:$r('app.media.single'))
          .width(25)
          .borderRadius(3)
          .margin({right:5})

      }.width('100%')
      .justifyContent(FlexAlign.End)
      .alignItems(VerticalAlign.Bottom)
      Text(Utils.getDateTime(this.msg?.hxMessage?.getServerTimestamp() as number,null))
        .margin({right:38,top:3})
        .fontSize(13)
        .fontColor(Color.Gray)
    }.alignItems(HorizontalAlign.End)
    .onClick(()=>{
      // ChatClient.getInstance().chatManager()?.recallMessage(this.msg)
      console.info((this.msg?.hxMessage?.getBody() as ImageMessageBody).getThumbnailRemoteUrl())
    })
  }
}

@Component
export struct  VideoSengView{

  @State msg : MessageModel | undefined = undefined
  @State pixelMap : image.PixelMap | undefined = undefined
  build() {
    Column(){
      Blank(20)
      Row({space:5}){
        Image($r('app.media.message_status_succeed'))
          .width(20)

        Stack(){
          Image(fileUri.getUriFromPath((this.msg?.hxMessage?.getBody() as VideoMessageBody).getThumbnailLocalPath()))
            .width(175)
            .borderRadius(6)
            .alt($r('app.media.placeholder'))
          Image($r('app.media.video_play'))
            .width(50)
            .borderRadius(6)
        }

        Image(kvStore.curUserInfo?.avatarUrl?kvStore.curUserInfo?.avatarUrl:$r('app.media.single'))
          .width(25)
          .borderRadius(3)
          .margin({right:5})
      }.width('100%')
      .justifyContent(FlexAlign.End)
      .alignItems(VerticalAlign.Bottom)
      Text(Utils.getDateTime(this.msg?.hxMessage?.getServerTimestamp() as number,null))
        .margin({right:38,top:3})
        .fontSize(13)
        .fontColor(Color.Gray)
    }.alignItems(HorizontalAlign.End)
    .onClick(()=>{

      // console.info((this.msg?.hxMessage?.getBody() as VideoMessageBody).getThumbnailLocalPath())
      const videoBody = (this.msg?.hxMessage?.getBody() as VideoMessageBody)
      router.pushUrl({ url: 'pages/VideoPage',params:
      {"previewUri":videoBody.getThumbnailRemoteUrl(),
        "videoSrc":videoBody.getRemoteUrl()
      }})

    })
  }
}

@Component
export struct VoiceSengView{
  @State msg : MessageModel | undefined = undefined

  build() {
    Column(){
      Blank(20)
      Row({space:5}){
        Image($r('app.media.message_status_succeed'))
          .width(20)
        Row(){
          Text((this.msg?.hxMessage?.getBody() as VoiceMessageBody).getDuration() + "'")
            .padding(10)
            .fontColor(Color.White)
            .borderRadius(6)
          Image($r('app.media.audio_message_icon_show_right'))
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
        Image(kvStore.curUserInfo?.avatarUrl?kvStore.curUserInfo?.avatarUrl:$r('app.media.single'))
          .width(25)
          .borderRadius(3)
          .margin({right:5})
      }.width('100%')
      .justifyContent(FlexAlign.End)
      .alignItems(VerticalAlign.Bottom)
      Text(Utils.getDateTime(this.msg?.hxMessage?.getServerTimestamp() as number,null))
        .margin({right:38,top:3})
        .fontSize(13)
        .fontColor(Color.Gray)
    }.alignItems(HorizontalAlign.End)
  }
}