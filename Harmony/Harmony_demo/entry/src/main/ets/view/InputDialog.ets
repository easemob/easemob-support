
@CustomDialog
export struct  InputDialog{
  @State inputValue: string = ""
  cancel = () =>{}
  confirm = (msg:string) =>{}
  controller: CustomDialogController
  build() {
    Column() {
      Text("添加联系人")
      TextInput({ placeholder: '联系人ID' }) //输入框
        .onChange((str) => {
          this.inputValue = str
        })
        .margin({ left: 16, right: 16 })

      Row() {
        Button("取消", { type: ButtonType.Capsule })
          .onClick(() => {
            this.cancel();
            this.controller.close()
          })
          .backgroundColor(Color.White)
          .fontColor(Color.Blue)
          .width("45%")

        Blank()

        Button("确定", { type: ButtonType.Capsule })
          .onClick(() => {
            this.confirm(this.inputValue);
            this.controller.close()
          })
          .backgroundColor(Color.Blue)
          .fontColor(Color.White)
          .width("45%")
      }
      .width('100%')
      .margin({ top: 16, bottom: 16, left: 32, right: 32 })
    }
    .margin({ left: 16, right: 16 })
    .padding({ top: 24, bottom: 24 })
  }
}