import { ChatMessage, Conversation } from '@easemob/chatsdk'

@Observed
export class MessageModel{
  hxMessage?:ChatMessage;
  name:string = ""
  avatarUrl?:string
}


export class MessageListData implements IDataSource {

  public dataArray: MessageModel[] = [] ;
  private listener: DataChangeListener | undefined;

  public totalCount(): number {
    return this.dataArray.length;
  }

  public getData(index: number): MessageModel {
    return this.dataArray[index];
  }

  public setData(data: MessageModel[]): void {
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
