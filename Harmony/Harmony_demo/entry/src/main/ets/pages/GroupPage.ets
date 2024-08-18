import { ChatClient, ChatManager, ConversationType, Group } from 'chatsdk';
import { CommonTitleBar } from '../common/CommTitleBar';
import { Constants } from '../common/Constants';
import { GroupView } from '../view/GroupView';
import { print } from '@kit.BasicServicesKit';

@Entry
@Component
struct GroupPage {
  @State groupList:Group[] | undefined  = []

  build() {
    Column(){
      CommonTitleBar({
        centerText:"群聊",
        rightType:Constants.TYPE_LEFT_NONE,
      })
      List() {
        ForEach(this.groupList, (item: Group) => {
          ListItem() {
            GroupView({group:item})
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
    this.groupList = await ChatClient.getInstance().groupManager()?.getAllGroups()
    if (this.groupList?.length == 0){
      this.groupList =  await ChatClient.getInstance().groupManager()?.fetchJoinedGroupsFromServer(0,20)
      console.debug(this.groupList?.length.toString())
    }
  }
}

