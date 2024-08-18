import { tabBarInfoList, TabBarModel } from '../model/TabBarModel'
import { ContactPage } from './ContactPage'
import { ConversationPage } from './ConversationPage'
import { MePage } from './MePage'
import { emitter } from '@kit.BasicServicesKit'
import { kvStore } from '../common/KVStoreManager'

@Entry
struct TabsPage {
  @State curIndex:number = 0

  build() {
    Tabs({barPosition:BarPosition.End}){
      ForEach(tabBarInfoList,(item:TabBarModel,index:number)=>{
        TabContent(){
          if (index == 0){
            ConversationPage()
          }else if (index == 1){
            ContactPage()
          }else if (index == 2){
            MePage()
          }
        }.tabBar(this.BottomNavigation(tabBarInfoList[index]))

      })
    }.onChange((index)=>{
      console.log(index.toString());
      this.curIndex = index
    })
  }

  @Builder BottomNavigation(button: TabBarModel) {
    Column({ space: 6 }) {
      Image(button.img)
        .objectFit(ImageFit.Contain)
        .width(24)
        .height(24)
        .fillColor(this.curIndex === button.index ? '#1195db' : Color.Gray)
      Text(button.title)
        .fontColor(this.curIndex === button.index ? '#1195db' : Color.Gray)
        .fontWeight(500)
        .textAlign(TextAlign.Center)
        .fontSize(10)
    }
    .width('100%')
    .height('100%')
    .alignItems(HorizontalAlign.Center)
    .justifyContent(FlexAlign.Center)
    .border({ width: { top: 0.5 }, color: { top: '#5C000000' }, style: { top: BorderStyle.Solid } })
  }
  onPageShow(): void {

  }
  onPageHide(): void {
  }
  aboutToAppear(): void {
    console.error("------aboutToAppear-----")
  }
}