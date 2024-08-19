import {
  ChatCallback,
  ChatClient, ChatMessage,
  ChatMessageListener,
  ChatType, ContentType, Conversation,
  ConversationType,
  FetchMessageOption,
  MessageDirection } from 'chatsdk';
import { CommonTitleBar } from '../common/CommTitleBar';
import { Constants } from '../common/Constants';
import { ImgSengView, TxtSengView, VideoSengView, VoiceSengView } from '../view/MsgSengView';
import { MeasureText, Prompt, router } from '@kit.ArkUI';
import { ImgReceiveView, TxtReceiveView, VideoReceiveView, VoiceReceiveView } from '../view/MsgReceiveView';
import { RecorderView } from '../view/RecorderView';
import { emitter } from '@kit.BasicServicesKit';
import { MessageListData, MessageModel } from '../model/MessageListData';
import { kvStore } from '../common/KVStoreManager';

@Entry
@Component
struct ChatPage {
  @State conv: Conversation | undefined = undefined
  // @State msgList: ChatMessage[] | undefined = undefined
  @State titleStr:string = ""
  private msgList:MessageListData = new MessageListData();

  private scroller: Scroller = new Scroller()
  private messageListener: ChatMessageListener| undefined = undefined

  @Builder
  mySheet() {
    Column() {
      Text("mySheet")
      .padding({ top: 18 })
    }
    .width('100%')
    .height('100%')
    .backgroundColor(Color.White)
  }

  build() {
    Column(){
      CommonTitleBar({
        centerText: this.titleStr,
        rightType:Constants.TYPE_RIGHT_IMAGE_VIEW,
        rightImageResource:$r('app.media.call'),
        onClickRightImage:()=>{
          // router.replaceUrl({ url: 'pages/TextPage' })
          // router.replaceUrl({ url: 'pages/NextPage' })
        }
      })

      this.getListView()
      // Text("eee").layoutWeight(1)
      RecorderView({conv:this.conv,sendDone:(message:ChatMessage)=>{
        const msg = new MessageModel()
        msg.hxMessage = message
        this.msgList?.dataArray.push(msg)
        this.scrollToBottom()
      }})
    }
    .height('100%')
    .width('100%')
  }

  @Builder
  private getListView() {
    List({ space: 20, scroller: this.scroller }) {
      LazyForEach(this.msgList, (item: MessageModel) =>{
        ListItem() {
          if (item.hxMessage?.getDirection() == MessageDirection.SEND) {
            if (item.hxMessage?.getType() == ContentType.TXT) {
              TxtSengView({msg:item})
            }else if (item.hxMessage?.getType() == ContentType.IMAGE) {
              ImgSengView({msg:item})
            }else if (item.hxMessage?.getType() == ContentType.VIDEO) {
              VideoSengView({msg:item})
            }else if (item.hxMessage?.getType() == ContentType.VOICE) {
              VoiceSengView({msg:item})
            }else {
              Text("【其他消息】"+item.hxMessage?.getType()).margin(30)
            }
          }else {
            if (item.hxMessage?.getType() == ContentType.TXT) {
              TxtReceiveView({msg:item})
            }else if (item.hxMessage?.getType() == ContentType.IMAGE) {
              ImgReceiveView({msg:item})
            }else if (item.hxMessage?.getType() == ContentType.VIDEO) {
              VideoReceiveView({msg:item})
            }else if (item.hxMessage?.getType() == ContentType.VOICE) {
              VoiceReceiveView({msg:item})
            }else {
              Text("【其他消息】"+item.hxMessage?.getType()).margin(30)
            }
          }
        }
      }, (item: MessageModel,index:number) =>{
        return index.toString()+item.name+item.avatarUrl+item.hxMessage?.getMsgId()
      })
    }
    .cachedCount(5)
    .layoutWeight(1)
    .edgeEffect(EdgeEffect.None)
  }


  async aboutToAppear(): Promise<void> {

    let  convId : string = (router.getParams() as object)['convId'];
    let  type : ConversationType = (router.getParams() as object)['type'];
    this.conv = ChatClient.getInstance().chatManager()?.getConversation(convId,type,true)

    const userModel = kvStore.userCache.get(convId)
    if (userModel != undefined) {
      this.titleStr = userModel.nickname ? userModel.nickname : convId
    }else {
      this.titleStr = convId
    }

    let  list = await this.conv?.loadMoreMessagesFromDB("",50);
    if (list != undefined){
      this.messageHandle(list)
    }

    this.messageListener = {
      onMessageReceived: (messages: ChatMessage[]): void => {
        this.messageHandle(messages)
      }
    }
    ChatClient.getInstance().chatManager()?.addMessageListener(this.messageListener);
  }
  messageHandle(messages: ChatMessage[]){
    messages.forEach(message => {
      if (message.getConversationId() == this.conv?.conversationId()) {
        const item = new MessageModel()
        item.hxMessage = message
        if (message.getDirection() == MessageDirection.RECEIVE) {
          const userModel = kvStore.userCache.get(message.getFrom())
          if (userModel != undefined) {
            if (userModel.remark?.length != undefined) {
              item.name = userModel.remark
            }else if (userModel.nickname?.length != undefined) {
              item.name = userModel.nickname
            }
            item.avatarUrl = userModel.avatarUrl
          }else {
            item.name = message.getFrom()
          }
        }
        this.msgList?.dataArray.push(item)
      }
    })
    this.scrollToBottom()
  }
  aboutToDisappear(): void {
    if (this.conv != undefined && this.conv.getUnreadMsgCount() > 0){
      this.conv.markAllMessagesAsRead()
    }
    emitter.emit("convUpdate");
    ChatClient.getInstance().chatManager()?.removeMessageListener(this.messageListener);
  }
  scrollToBottom(){
    this.msgList.reloadListener()
    if (this.msgList != undefined) {
      const page = this.msgList.totalCount() - 1
      if (page > 0) {
        setTimeout(()=>{
          console.warn("scrollToBottom-----")
          this.scroller.scrollToIndex(page,true)
        },100)
      }
    }
  }
}