

export class TabBarModel{
  index: number = 0;
  img: Resource = $r('app.media.tabbar_chats');
  title: string = "";
}


export  const tabBarInfoList: TabBarModel[] = [
  {
    index: 0,
    img: $r('app.media.tabbar_chats'),
    title: "会话"
  },
  {
    index: 1,
    img: $r('app.media.tabbar_contacts'),
    title: "联系人"
  },
  {
    index: 2,
    img: $r('app.media.tabbar_mine'),
    title: "我"
  }
]
