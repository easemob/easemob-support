import { Prompt } from '@kit.ArkUI';
import { recorderStore } from '../common/AudioRecorder';
import { playAudioStore } from '../common/PlayAudio';
import { abilityAccessCtrl, common, Permissions } from '@kit.AbilityKit';
import { photoAccessHelper } from '@kit.MediaLibraryKit';
import { fileIo, picker } from '@kit.CoreFileKit';
import { BusinessError } from '@kit.BasicServicesKit';
import mediaLibrary from '@ohos.multimedia.mediaLibrary';
import { media } from '@kit.MediaKit';
import fs from '@ohos.file.fs';
import { fsUtilStore } from '../common/FsUtil';
import { ChatCallback, ChatClient, ChatMessage, Conversation } from 'chatsdk';

enum RecordStatus{
  RecordNone,
  RecordStart,
  RecordEnd,
  RecordPlay
}
@Component

export struct  RecorderView{
  private time: number = 0;
  @State  recorderTime: number = 0;
  private controller = new TextInputController()
  @State isShowRecorderSheet: boolean = false;
  @State isShowMediaSheet: boolean = false;
  @State content : string = ''
  @State conv: Conversation | undefined = undefined
  sendDone = (msg:ChatMessage) =>{}
  @State isRecording: RecordStatus = RecordStatus.RecordNone;

  //选相册资源的时候是否是视频资源
  isVideo : boolean = false

  private showText = ["录音","正在录音","播放录音","正在播放"]
  @Builder
  recorderSheet() {
    Column({space:5}) {
      Row({space:60}){
        Image($r('app.media.message_action_delete'))
          .width(30)
          .borderRadius(15)
          .backgroundColor("#d9d9d9")
          .padding(7)
          .visibility(this.isRecording == RecordStatus.RecordEnd?Visibility.Visible:Visibility.Hidden)
          .onClick(()=>{
            this.isRecording = RecordStatus.RecordNone
          })
        Stack({ alignContent: Alignment.Center }){
          Text(this.recorderTime + "s")
            .backgroundColor('#1195db')
            .fontColor(Color.White)
            .visibility(this.isRecording == RecordStatus.RecordStart?Visibility.Visible:Visibility.Hidden)

          Image($r('app.media.mic_on'))
            .width(25)
            .visibility(this.isRecording== RecordStatus.RecordStart?Visibility.Hidden:Visibility.Visible)

        }.onClick(()=>{
          if (this.isRecording== RecordStatus.RecordNone) {
            this.isRecording = RecordStatus.RecordStart
            this.recorderTime = 0
            recorderStore.startRecordingProcess()
            this.time = setInterval(() => {
              this.recorderTime++
            }, 1000)
          }else if (this.isRecording== RecordStatus.RecordStart) {
            this.isRecording = RecordStatus.RecordEnd
            recorderStore.stopRecordingProcess()
            clearInterval(this.time);
          }else if (this.isRecording== RecordStatus.RecordEnd) {
            this.isRecording = RecordStatus.RecordPlay
            playAudioStore.setAVPlayerCallback(recorderStore.audioPath);
          }else if (this.isRecording== RecordStatus.RecordPlay) {
            this.isRecording = RecordStatus.RecordEnd
            playAudioStore.stop()
          }
        })
        .width(70)
        .height(50)
        .borderRadius(25)
        .backgroundColor('#1195db')

        Image($r('app.media.send_audio'))
          .width(30)
          .borderRadius(15)
          .backgroundColor('#1195db')
          .padding(7)
          .visibility(this.isRecording == RecordStatus.RecordEnd?Visibility.Visible:Visibility.Hidden)
          .onClick(()=>{
            this.isRecording = RecordStatus.RecordNone
            let message = ChatMessage.createVoiceSendMessage(this.conv?.conversationId(),recorderStore.audioPath,this.recorderTime)
            if (!message) {
              return;
            }
            message.setChatType(this.conv?.getType() as number);
            let callback: ChatCallback = {
              onSuccess: (): void => {
                // 发送消息成功
                Prompt.showToast({message:"发送消息成功"})
              },
              onError: (code: number, error: string): void => {
                // 发送消息失败
                Prompt.showToast({message:"发送消息失败"})
              },
              onProgress: (progress: number): void => {
                // 附件消息附件的上传进度
              }
            }
            message.setMessageStatusCallback(callback);
            // 发送消息。
            ChatClient.getInstance().chatManager()?.sendMessage(message);
            this.content = ''
            this.sendDone(message)
          })
      }
      Text(this.showText[this.isRecording])
        .fontColor(Color.Gray)
        .fontSize(14)
    }
    .justifyContent(FlexAlign.Center)
    .width('100%')
    .height('100%')
    .backgroundColor(Color.White)
  }

  @Builder
  mediaSheet() {
    Column({space:5}) {
      Row({space:10}){
        Image($r('app.media.photo'))
          .width(40)
          .borderRadius(15)
          .padding(7)

        Text("图片")
          .fontColor("#1195db")
          .fontSize(14)
          .layoutWeight(1)
      }.onClick(()=>{
        this.isVideo = false
        this.sengMediaMessage()
        this.isShowMediaSheet = false
      })
      Row({space:10}){
        Image($r('app.media.camera_fill'))
          .width(40)
          .borderRadius(15)
          .padding(7)
        Text("视频")
          .fontColor("#1195db")
          .fontSize(14)
          .layoutWeight(1)
      }.onClick(()=>{
        this.isVideo = true
        this.sengMediaMessage()
        this.isShowMediaSheet = false
      })
    }
    // .backgroundColor(Color.White)
    .margin(20)
    .layoutWeight(1)
    // .justifyContent(FlexAlign.SpaceAround)
    // .height('100%')
  }
  build() {
    Row({space:8}){
      Image($r('app.media.audio'))
        .width(30)
        .margin({left:8,right:8})
        .onClick(()=>{
          this.controller.stopEditing()
          this.isShowRecorderSheet = true
        })
        .bindSheet(this.isShowMediaSheet,this.mediaSheet(),{
        showClose: false,
        height: 150,
        dragBar: false,
        onDisappear: () => {
          this.isShowMediaSheet = !this.isShowMediaSheet;
          if (this.isShowMediaSheet = false) {

          }
        }
      })

      TextInput({placeholder:"Aa",text:this.content,controller:this.controller})
        .layoutWeight(1)
        .borderRadius(5)
        .backgroundColor("#f9f9f9")
        .enterKeyType(EnterKeyType.Send)
        .onChange((v)=>{
          this.content = v
        })
        .onSubmit(()=>{
          let message = ChatMessage.createTextSendMessage(this.conv?.conversationId(), this.content)
          if (!message) {
            return;
          }
          // let type = ChatType.Chat
          // // 会话类型：单聊为 ChatType.Chat，群聊为 ChatType.GroupChat, ChatType.ChatRoom，默认为单聊。
          // if (this.conv?.getType() == ConversationType.GroupChat) {
          //   type = ChatType.GroupChat
          // }else if (this.conv?.getType() == ConversationType.ChatRoom){
          //   type = 2
          // }
          message.setChatType(this.conv?.getType() as number);
          let callback: ChatCallback = {
            onSuccess: (): void => {
              // 发送消息成功
              Prompt.showToast({message:"发送消息成功"})
            },
            onError: (code: number, error: string): void => {
              // 发送消息失败
              Prompt.showToast({message:"发送消息失败"})
            },
            onProgress: (progress: number): void => {
              // 附件消息附件的上传进度
            }
          }
          message.setMessageStatusCallback(callback);
          // 发送消息。
          ChatClient.getInstance().chatManager()?.sendMessage(message);
          this.content = ''
          this.sendDone(message)
        })

      Image($r('app.media.add'))
        .width(30)
        .margin({left:8,right:8})
        .onClick(()=>{

          this.controller.stopEditing()
          this.isShowMediaSheet = true

        })
        .bindSheet(this.isShowRecorderSheet, this.recorderSheet(), {

          showClose: false,
          height: 200,
          dragBar: false,
          onDisappear: () => {
            this.isShowRecorderSheet = !this.isShowRecorderSheet;
            if (this.isShowRecorderSheet = false) {
              this.isRecording = RecordStatus.RecordNone
              clearInterval(this.time);
              this.recorderTime = 0
            }
          }
        })
    }
    .width('100%')
    .height(50)
    .margin({bottom:20})
  }

  aboutToAppear(): void {
    const permissions: Array<Permissions> = [
      'ohos.permission.READ_MEDIA',
      'ohos.permission.WRITE_MEDIA',
      'ohos.permission.MICROPHONE'
    ];
    const context: common.UIAbilityContext = getContext(this) as common.UIAbilityContext;
    recorderStore.reqPermissionsFromUser(permissions, context);
  }

  sengMediaMessage(){
    try {
      let photoSelectOptions = new picker.PhotoSelectOptions();
      photoSelectOptions.MIMEType = this.isVideo?picker.PhotoViewMIMETypes.VIDEO_TYPE :picker.PhotoViewMIMETypes.IMAGE_TYPE;
      photoSelectOptions.maxSelectNumber = 1;
      let photoPicker = new picker.PhotoViewPicker(getContext(this) as common.UIAbilityContext);
      photoPicker.select(photoSelectOptions).then(async (photoSelectResult: picker.PhotoSelectResult) => {
        console.info('PhotoViewPicker.select successfully, photoSelectResult uri: ' + JSON.stringify(photoSelectResult));
        console.log(photoSelectResult.photoUris[0])
        let message : ChatMessage | undefined = undefined
        if (this.isVideo){
          const  thumbnail = await fsUtilStore.getThumbnail(photoSelectResult.photoUris[0])
          message = ChatMessage.createVideoSendMessage(this.conv?.conversationId(),photoSelectResult.photoUris[0],10,thumbnail)
        }else {
           message = ChatMessage.createImageSendMessage(this.conv?.conversationId(),photoSelectResult.photoUris[0])
        }

        if (!message) {
          return;
        }
        message.setChatType(this.conv?.getType() as number);
        let callback: ChatCallback = {
          onSuccess: (): void => {
            // 发送消息成功
            Prompt.showToast({message:"发送消息成功"})
          },
          onError: (code: number, error: string): void => {
            // 发送消息失败
            Prompt.showToast({message:"发送消息失败"})
          },
          onProgress: (progress: number): void => {
            // 附件消息附件的上传进度
          }
        }
        message.setMessageStatusCallback(callback);
        // 发送消息。
        ChatClient.getInstance().chatManager()?.sendMessage(message);
        this.content = ''
        this.sendDone(message)

      }).catch((err: BusinessError) => {
        console.error('PhotoViewPicker.select failed with err: ' + JSON.stringify(err));
      });
    } catch (error) {
      let err: BusinessError = error as BusinessError;
      console.error('PhotoViewPicker failed with err: ' + JSON.stringify(err));
    }
  }

}