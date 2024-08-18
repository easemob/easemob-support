import { ChatClient, Contact, ContactListener, Conversation, ConversationType } from 'chatsdk';
import { CommonTitleBar } from '../common/CommTitleBar';
import { Constants } from '../common/Constants';
import { ContactView } from '../view/ContactView';
import { FrStore } from '../common/FriendRequest';
import { InputDialog } from '../view/InputDialog';
import { router } from '@kit.ArkUI';
import { kvStore } from '../common/KVStoreManager';

export  class ContactModel{
  userId:string = ""
  name:string = ""
  avatarUrl?:string
}


// @Entry
@Component
export struct ContactPage{
  @State contactList: ContactModel[] | undefined  = [];

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
          Image($r('app.media.access_iocn'))
            .width(20)
        }.width('100%')
        .backgroundColor(Color.White)
        .height(60)
        .padding({left:20,right:10})
        .justifyContent(FlexAlign.SpaceBetween)
        .alignItems(VerticalAlign.Center)
        .onClick(()=>{
          router.pushUrl({ url: 'pages/FriendRequestPage'})
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
        .height(60)
        .padding({left:20,right:10})
        .justifyContent(FlexAlign.SpaceBetween)
        .alignItems(VerticalAlign.Center)
        .onClick(()=>{
          console.warn("onClick")
          router.pushUrl({ url: 'pages/GroupPage'})
          })
      }

      List() {
        ForEach(this.contactList, (item: ContactModel) => {
          ListItem() {
            ContactView({contact:item})
          }
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
  }

  async loadData(){
    let dataList = await ChatClient.getInstance().contactManager()?.getContactsFromLocal();
    if (this.contactList?.length == 0){
      dataList =  await ChatClient.getInstance().contactManager()?.fetchAllContactsFromServer();
    }
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
      }
      this.contactList?.push(item)
    })
  }
}


