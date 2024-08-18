import systemDateTime from '@ohos.systemDateTime'
import { MeasureText } from '@kit.ArkUI';
import { ChatMessage, TextMessageBody, ContentType } from 'chatsdk';

/*公共方法类*/
export class Utils {
  /**
   * 时间戳转时间
   * PublicUtils.getDateTime(systemDateTime.getTime(), 'yyyy-MM-dd HH:mm:ss')
   * @param time 时间戳(默认获取当前时间)
   * @param type 时间格式(默认'yyyy-MM-dd HH:mm')
   * @returns
   */
  static getDateTime(time: number , type: string | null): string {
    // let date = new Date(systemDateTime.getTime())
    // if (time) {
    //   date = new Date(time)
    // }
    // 获取时间
    let date = new Date(time);
    const year = date.getFullYear().toString()
    let month = (date.getMonth() + 1).toString()
    let day = date.getDate().toString()
    let hour = date.getHours().toString()
    let min = date.getMinutes().toString()
    let seconds = date.getSeconds().toString()
    // 补位
    month = month.length === 1 ? `0${month}` : month
    day = day.length === 1 ? `0${day}` : day
    hour = hour.length === 1 ? `0${hour}` : hour
    min = min.length === 1 ? `0${min}` : min
    seconds = seconds.length === 1 ? `0${seconds}` : seconds

      let timeStr = `${year}/${month}/${day} ${hour}:${min}`
      // let date = new Date(time);
      let today = new Date();
      if (date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()) {
        timeStr = `${hour}:${min}`
      }else if(date.getFullYear() === today.getFullYear()){
        timeStr = `${month}/${day} ${hour}:${min}`
      }
    return timeStr
  }

  static getChangeLineHeight(content: string, size: number): number {
    let textWidth: number = MeasureText.measureText({ textContent: content, fontSize: size });
    return px2fp(textWidth) > 180 ? 180 : px2fp(textWidth);
  }

  static getMsgData(msg:ChatMessage):string{
    let data = ""
      switch (msg.getType()){
        case ContentType.TXT:
          data = ((msg.getBody() as TextMessageBody).getContent())
          break
        case ContentType.IMAGE:
          data = "[图片]"
          break
        case ContentType.VIDEO:
          data = "[视频]"
          break
        case ContentType.LOCATION:
          data = "[位置]"
          break
        case ContentType.VOICE:
          data = "[语音]"
          break
        case ContentType.FILE:
          data = "[文件]"
          break
        case ContentType.CUSTOM:
          data = "[自定义]"
          break
        case ContentType.COMBINE:
          data = "[合并]"
          break
      }
    return data
  }
}