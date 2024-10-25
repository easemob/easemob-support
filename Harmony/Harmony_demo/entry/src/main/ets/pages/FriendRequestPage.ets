import { ChatClient } from '@easemob/chatsdk';
import { CommonTitleBar } from '../common/CommTitleBar';
import { Constants } from '../common/Constants';
import { FriendRequestModel as FriendRequestModel, FrStore } from '../common/FriendRequest';

@Entry
@Component
struct FriendRequestPage {
  @State friendList: FriendRequestModel[] | undefined = undefined;
  build() {
    Column(){
      CommonTitleBar({
        centerText:"新请求",
        rightType:Constants.TYPE_LEFT_NONE,
      })
      List({ space: 20}) {
        ForEach(this.friendList, (item: FriendRequestModel) => {
          ListItem() {
            Row({space:5}) {
              Image($r('app.media.single'))
                .borderRadius(20)
                .width(40)
                .height(40)
                .margin(10)
                .backgroundColor(Color.Green)
                .margin({left:10})
              Column({space:5}){
                Text(item.userId).fontSize(18)
                Text(item.reason).fontSize(14)
              }.layoutWeight(0.5)
              .alignItems(HorizontalAlign.Start)
              Text("添加")
                .fontColor(Color.White)
                .textAlign(TextAlign.Center)
                .width(60)
                .height(30)
                .margin(10)
                .borderRadius(8)
                .margin({right:20})
                .backgroundColor("#1195db")
                .onClick(()=>{
                  ChatClient.getInstance().contactManager()?.acceptInvitation(item.userId).then(()=>{
                    FrStore.delItem(item.userId)
                    this.friendList = FrStore.getAll()
                  });
                })
            }.height(50)
          }
        })
      }.divider({
        strokeWidth:1,
        startMargin:55
      })
      .layoutWeight(1)
    }
  }
  async aboutToAppear(): Promise<void> {
    this.friendList = FrStore.getAll()
  }
}