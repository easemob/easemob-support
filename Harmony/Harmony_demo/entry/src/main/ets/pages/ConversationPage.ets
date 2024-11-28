

import { CommonTitleBar } from '../common/CommTitleBar';
import { Constants } from '../common/Constants';
import { ConvView } from '../view/ConvView';

import { emitter } from '@kit.BasicServicesKit';
import { FrStore } from '../common/FriendRequest';

import { ConversationModel, ConvListData} from '../model/ConvListData'
import { kvStore } from '../common/KVStoreManager';
import { ChatClient, ChatMessage, ChatMessageListener, ConversationType } from '@easemob/chatsdk';

@Component
export  struct ConversationPage {

  private convList:ConvListData = new ConvListData();
  private scroller: Scroller = new Scroller();
  build() {
    Column({space:10}){
      CommonTitleBar({
        leftType:Constants.TYPE_LEFT_NONE,
        centerText:"会话",
        rightType:Constants.TYPE_RIGHT_IMAGE_VIEW,
        rightImageResource:$r('app.media.add'),
        onClickRightImage:()=>{

        }
      })
      this.getListView();

    }
    .width('100%')
    .height("100%")
  }
  @Builder
  private getListView() {
      List({ space: 20, scroller: this.scroller }) {
        LazyForEach(this.convList, (item: ConversationModel) =>{
            ListItem() {
              ConvView({conv:item})
            }
        }, (item: ConversationModel,index:number) =>{
          return index.toString()+item.unreadMsgCount.toLocaleString()+
          item.unreadMsgCount.toLocaleString()+item.name+item.avatarUrl
        })
      }
      .cachedCount(5)
      .divider({
        strokeWidth:1,
        startMargin:55
      })
      .layoutWeight(1)
      .edgeEffect(EdgeEffect.None)
  }

  async aboutToAppear(): Promise<void> {
    this.loadData()
    emitter.on("convUpdate", () => {
      this.loadData()
    });
    emitter.on("userInfoUpdate", () => {
      for (let index = 0; index <  this.convList.dataArray.length; index++) {
        const model =  this.convList.dataArray[index];
        if (model.hxConversation?.getType() == ConversationType.Chat) {
          const userModel = kvStore.userCache.get(model.hxConversation.conversationId())
          if (userModel != undefined) {
            if (userModel.remark?.length != undefined) {
              model.name = userModel.remark
            }else if (userModel.nickname?.length != undefined) {
              model.name = userModel.nickname
            }
            model.avatarUrl = userModel.avatarUrl
            this.convList.dataArray[index] = model
          }
        }
      }
      this.convList.reloadListener()
    });
    let messageListener: ChatMessageListener = {
      onMessageReceived: (messages: ChatMessage[]): void => {
        this.loadData()
      }
    }
    ChatClient.getInstance().chatManager()?.addMessageListener(messageListener);
  }

  async loadData(){
    let list = ChatClient.getInstance().chatManager()?.getAllConversationsBySort();
    if (list != undefined){
      let modelList:ConversationModel[] = [] ;
      let unknownUsers:string[] = [] ;
      for (let i = 0; i < list.length; i++) {
        let model = new ConversationModel()
        const  convId = list[i].conversationId()

        model.latestMessage = list[i].getLatestMessage()
        model.unreadMsgCount = list[i].getUnreadMsgCount()
        model.hxConversation = list[i]
        model.name = convId
        if (list[i].getType() == ConversationType.Chat) {
          const userModel = kvStore.userCache.get(convId)
          if (userModel == undefined) {
            unknownUsers.push(convId)
          }else {
            if (userModel.remark?.length != undefined) {
              model.name = userModel.remark
            }else if (userModel.nickname?.length != undefined) {
              model.name = userModel.nickname
            }
            model.avatarUrl = userModel.avatarUrl
          }
        }else {
          model.imgSrc = $r('app.media.group')
        }
        modelList.push(model)
      }
      if (unknownUsers.length>0) {
        kvStore.getUserInfo(unknownUsers)
      }
      this.convList.setData(modelList)
      this.convList.reloadListener()
    }
  }
}