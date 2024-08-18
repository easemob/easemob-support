import { ChatMessage, Conversation } from 'chatsdk'

@Observed
export class ConversationModel{
  latestMessage?: ChatMessage;
  unreadMsgCount: number = 0;
  hxConversation?:Conversation;
  name:string = ""
  avatarUrl?:string
  imgSrc?: Resource
}


export class ConvListData implements IDataSource {

  public dataArray: ConversationModel[] = [] ;
  private listener: DataChangeListener | undefined;

  public totalCount(): number {
    return this.dataArray.length;
  }

  public getData(index: number): ConversationModel {
    return this.dataArray[index];
  }

  public setData(data: ConversationModel[]): void {
    this.dataArray = data;
  }

  public reloadListener(): void {
    this.listener?.onDataReloaded();
  }

  public registerDataChangeListener(listener: DataChangeListener): void {
    this.listener = listener;
  }

  public unregisterDataChangeListener(listener: DataChangeListener): void {
    this.listener = undefined;
  }
}
