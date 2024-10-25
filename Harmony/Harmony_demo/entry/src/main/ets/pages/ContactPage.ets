import { ChatClient, Contact, ContactListener, Conversation, ConversationType } from '@easemob/chatsdk';
import { CommonTitleBar } from '../common/CommTitleBar';
import { Constants } from '../common/Constants';
import { ContactView } from '../view/ContactView';
import { FrStore } from '../common/FriendRequest';
import { InputDialog } from '../view/InputDialog';
import { router } from '@kit.ArkUI';
import { kvStore } from '../common/KVStoreManager';
import { emitter } from '@kit.BasicServicesKit';

export  class ContactModel{
  userId:string = ""
  name:string = ""
  avatarUrl?:string
}


// @Entry
@Component
export struct ContactPage{
  @State contactList: ContactModel[]   = [];
  @State isRemind:boolean = false;
  dialogController: CustomDialogController | null = new CustomDialogController({
    builder: InputDialog({
      cancel: ()=>{},
      confirm: (str:string)=>{
          ChatClient.getInstance().contactManager()?.addContact(str,"请求添加好友")
        },
    }),
    alignment: DialogAlignment.Default,  // 可设置dialog的对齐方式，设定显示在底部或中间等，默认为底部显示
  })


  build() {
    Column(){
      CommonTitleBar({
        leftType:Constants.TYPE_LEFT_NONE,
        centerText:"联系人",
        rightType:Constants.TYPE_RIGHT_IMAGE_VIEW,
        rightImageResource:$r('app.media.add_contact'),
        onClickRightImage:()=>{
          if (this.dialogController != null) {
            this.dialogController.open()
          }
        }
      })
      Column(){
        Row(){
          Text("新请求")
            .fontSize(18)
            .fontWeight(FontWeight.Medium)
          Row(){
            Text()
              .width(10)
              .height(10)
              .borderRadius(10)
              .backgroundColor(this.isRemind ? '#1195db' : Color.White)
            Image($r('app.media.access_iocn'))
              .width(20)
          }
        }.width('100%')
        .backgroundColor(Color.White)
        .height(50)
        .padding({left:20,right:10})
        .justifyContent(FlexAlign.SpaceBetween)
        .alignItems(VerticalAlign.Center)
        .onClick(()=>{
          router.pushUrl({ url: 'pages/FriendRequestPage'})
          this.isRemind = false
        })

        Blank(1).backgroundColor('#d9d9d9')
          .margin({left:20})
        Row(){
          Text("群组")
            .fontSize(18)
            .fontWeight(FontWeight.Medium)
          Image($r('app.media.access_iocn'))
            .width(20)
        }.width('100%')
        .backgroundColor(Color.White)
        .height(50)
        .padding({left:20,right:10})
        .justifyContent(FlexAlign.SpaceBetween)
        .alignItems(VerticalAlign.Center)
        .onClick(()=>{
          console.warn("onClick")
          router.pushUrl({ url: 'pages/GroupPage'})
          })
        Blank(1).backgroundColor('#d9d9d9')
          .margin({left:20})
      }
      Blank(10)
      List() {
        ForEach(this.contactList, (item: ContactModel) => {
          ListItem() {
            ContactView({contact:item})
          }
        },(item:ContactModel,index:number) => {
          return item.name
        })
      }.divider({
        strokeWidth:1,
        startMargin:55
      })
      .width('100%')
      .height('100%')
    }.width('100%')
    .height('100%')
  }

  async aboutToAppear(): Promise<void> {
    this.loadData()
    let contactListener: ContactListener = {
      onFriendRequestAccepted : (userId: string) => {
        this.loadData()
      },
      onContactDeleted :(userId: string) =>{
        this.loadData()
      },
      onContactAdded :(userId: string) =>{
        this.loadData()
      },
      onContactInvited : (userId: string, reason: string) => {
        // 收到好友邀请。
        FrStore.setItem(userId,"请求信息:"+reason)
        this.isRemind = true
      },
    }
    ChatClient.getInstance().contactManager()?.addContactListener(contactListener);

    emitter.on("userInfoUpdate", () => {
      for (let index = 0; index <  this.contactList.length; index++) {
        const model = new ContactModel()
        model.userId =  this.contactList[index].userId
        const userModel = kvStore.userCache.get(model.userId)
        if (userModel != undefined) {
          if (userModel.remark?.length != undefined) {
            model.name = userModel.remark
          }else if (userModel.nickname?.length != undefined) {
            model.name = userModel.nickname
          }
          model.avatarUrl = userModel.avatarUrl
          this.contactList[index] = model
        }
      }
    });
  }

  async loadData(){
    let dataList = await ChatClient.getInstance().contactManager()?.getContactsFromLocal();
    if (dataList?.length == 0){
      dataList =  await ChatClient.getInstance().contactManager()?.fetchAllContactsFromServer();
    }
    this.contactList = []

    let unknownUsers:string[] = [] ;
    dataList?.forEach((contact:Contact)=>{
      const item = new ContactModel()
      item.userId = contact.userId()
      const userModel = kvStore.userCache.get(contact.userId())
      if (userModel != undefined) {
        if (userModel.remark?.length != undefined) {
          item.name = userModel.remark
        }else if (userModel.nickname?.length != undefined) {
          item.name = userModel.nickname
        }
        item.avatarUrl = userModel.avatarUrl
      }else {
        item.name = contact.userId()
        unknownUsers.push(contact.userId())
      }
      this.contactList?.push(item)
    })

    if (unknownUsers.length>0) {
      kvStore.getUserInfo(unknownUsers)
    }
  }
}


