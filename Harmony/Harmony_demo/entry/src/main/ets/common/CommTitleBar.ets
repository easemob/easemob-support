import router from '@ohos.router';
import { Constants } from './Constants';

@Component
export struct CommonTitleBar {

  @State titleBarHeight: number = 40; // 标题栏高度
  @State showBottomLine: boolean = true; //  是否显示标题栏底部的分割线
  titleBarColor: ResourceColor = '#fff'; // 标题栏颜色
  bottomLineColor: ResourceColor = "#f5f5f5"; // 标题栏分割线颜色

  @State leftType: number = Constants.TYPE_LEFT_IMAGE_VIEW; // 左侧视图类型：无|文字|按钮|自定义视图，默认显示返回按钮
  @State leftText: string = '左侧文字'; // 左侧文字leftType= textView有效
  @State leftMargin: number | string = 12; // 左侧间距
  leftTextColor: ResourceColor = "#000000"; // 左侧文字颜色
  @State leftTextSize: number | string = 16; // 左侧文字大小
  leftImageResource: string | PixelMap | Resource = $r('app.media.back_icon'); // 左侧返回图片
  @BuilderParam leftCustomView: () => void; // 左侧自定义View
  onClickLeftText?: () => void; // 左侧文字点击事件
  onClickLeftImage?: () => void; // 左侧图片点击事件

  @State rightType: number = Constants.TYPE_RIGHT_NONE; // 右侧视图类型：无|文字|按钮|自定义视图，默认无视图
  @State rightText: string = '右侧文字'; // 右侧文字leftType= textView有效
  @State rightMargin: number | string = 12; // 右侧间距
  rightTextColor: ResourceColor = "#000000"; // 右侧文字颜色
  @State rightTextSize: number | string = 16; // 右侧文字大小
  rightImageResource: string | PixelMap | Resource = $r('app.media.app_icon'); // 右侧图片
  @BuilderParam rightCustomView: () => void; // 右侧自定义View
  onClickRightText?: () => void; // 右侧文字点击事件
  onClickRightImage?: () => void; // 右侧图片点击事件

  @State centerType: number = Constants.TYPE_CENTER_TEXT_VIEW; // 居中视图类型：无|文字|按钮|自定义视图，默认文字视图
  @State centerText: string = '居中文字'; // 居中文字leftType= textView有效
  centerTextColor: ResourceColor = "#000000"; // 居中文字颜色
  @State centerTextSize: number | string = 18; // 居中文字大小
  centerImageResource: string | PixelMap | Resource = $r('app.media.app_icon'); // 居中图片
  @State searchLeftMargin: number | string = 12; // 右侧间距
  @State searchRightMargin: number | string = 12; // 右侧间距
  @BuilderParam centerCustomView: () => void; // 居中自定义View
  onClickCenterText?: () => void; //  居中文字点击事件
  onClickCenterImage?: () => void; // 居中图片点击事件
  @State value: string = ''; // 居中搜索框默认文本
  @State placeholder: string = '请输入关键字'; // 居中搜索框提示文本
  @State searchButton: string = ''; // 居中搜索框提示文本
  onSubmitSearch?: (value: string) => void; // 点击搜索图标、搜索按钮或者按下软键盘搜索按钮时触发该回调
  onChangeSearch?: (value: string) => void; // 输入内容发生变化时，触发该回调

  build() {
    RelativeContainer() {
      if (this.leftType === Constants.TYPE_LEFT_TEXT_VIEW) {
        Text(this.leftText)
          .alignRules({
            left: { anchor: "__container__", align: HorizontalAlign.Start },
            center: { anchor: "__container__", align: VerticalAlign.Center }
          })
          .margin({
            left: this.leftMargin
          })
          .fontColor(this.leftTextColor)
          .fontSize(this.leftTextSize)
          .maxLines(1)
          .onClick(() => {
            if (this.onClickLeftText !== undefined) {
              this.onClickLeftText();
            }
          })
          .id('left')
      }
      else if (this.leftType === Constants.TYPE_LEFT_IMAGE_VIEW) {
        Image(this.leftImageResource)
          .height(30)
          .alignRules({
            left: { anchor: "__container__", align: HorizontalAlign.Start },
            center: { anchor: "__container__", align: VerticalAlign.Center }
          })
          .margin({
            left: this.leftMargin
          })
          .onClick(() => {
            if (this.onClickLeftImage !== undefined) {
              this.onClickLeftImage();
            } else {
              router.back()
            }
          })
          .id('left')
      }
      else if (this.leftType === Constants.TYPE_LEFT_CUSTOM_VIEW) {
        Column() {
          this.leftCustomView()
        }.alignRules({
          left: { anchor: "__container__", align: HorizontalAlign.Start },
          center: { anchor: "__container__", align: VerticalAlign.Center }
        })
        .margin({
          left: this.leftMargin
        })
        .id('left')
      }

      if (this.rightType === Constants.TYPE_RIGHT_TEXT_VIEW) {
        Text(this.rightText)
          .alignRules({
            right: { anchor: "__container__", align: HorizontalAlign.End },
            center: { anchor: "__container__", align: VerticalAlign.Center }
          })
          .margin({
            right: this.rightMargin
          })
          .fontColor(this.rightTextColor)
          .fontSize(this.rightTextSize)
          .maxLines(1)
          .onClick(() => {
            if (this.onClickRightText !== undefined) {
              this.onClickRightText();
            }
          })
          .id('right')
      }
      else if (this.rightType === Constants.TYPE_RIGHT_IMAGE_VIEW) {
        Image(this.rightImageResource)
          .height(18)
          .alignRules({
            right: { anchor: "__container__", align: HorizontalAlign.End },
            center: { anchor: "__container__", align: VerticalAlign.Center }
          })
          .margin({
            right: this.rightMargin
          })
          .onClick(() => {
            if (this.onClickRightImage !== undefined) {
              this.onClickRightImage();
            } else {
              console.warn("点击了")
            }
          })
          .id('right')
      }
      else if (this.rightType === Constants.TYPE_RIGHT_CUSTOM_VIEW) {
        Column() {
          this.rightCustomView()
        }.alignRules({
          right: { anchor: "__container__", align: HorizontalAlign.End },
          center: { anchor: "__container__", align: VerticalAlign.Center }
        })
        .margin({
          right: this.rightMargin
        })
        .id('right')
      }

      if (this.centerType === Constants.TYPE_CENTER_TEXT_VIEW) {
        Text(this.centerText)
          .alignRules({
            middle: { anchor: "__container__", align: HorizontalAlign.Center },
            center: { anchor: "__container__", align: VerticalAlign.Center }
          })
          .fontColor(this.centerTextColor)
          .fontSize(this.centerTextSize)
          .maxLines(1)
          .onClick(() => {
            if (this.onClickCenterText !== undefined) {
              this.onClickCenterText();
            }
          })
          .id('center_text')
      }
      else if (this.centerType === Constants.TYPE_CENTER_IMAGE_VIEW) {
        Image(this.centerImageResource)
          .height(18)
          .alignRules({
            middle: { anchor: "__container__", align: HorizontalAlign.Center },
            center: { anchor: "__container__", align: VerticalAlign.Center }
          })
          .onClick(() => {
            if (this.onClickRightImage !== undefined) {
              this.onClickRightImage();
            } else {
              console.warn("点击了")
            }
          })
          .id('center_image')
      }
      else if (this.centerType === Constants.TYPE_CENTER_CUSTOM_VIEW) {
        Column() {
          this.centerCustomView()
        }.alignRules({
          middle: { anchor: "__container__", align: HorizontalAlign.Center },
          center: { anchor: "__container__", align: VerticalAlign.Center }
        })
        .id('center_custom')
      }
      else if (this.centerType === Constants.TYPE_CENTER_SEARCH_VIEW) {
        Column() {
          Search({
            value: this.value,
            placeholder: this.placeholder,
          })
            .height(38)
            .searchButton(this.searchButton)
            .onSubmit((value: string) => {
              if (this.onSubmitSearch !== undefined) {
                this.onSubmitSearch(value);
              } else {
                console.warn("value:"+ value)
              }

            })
            .onChange((value: string) => {
              if (this.onChangeSearch !== undefined) {
                this.onChangeSearch(value);
              } else {
                console.warn("value:"+ value)
              }
            })
        }
        .alignRules({
          left: { anchor: "left", align: HorizontalAlign.End },
          right: { anchor: "right", align: HorizontalAlign.Start },
          center: { anchor: "__container__", align: VerticalAlign.Center },
        })
        .margin({
          left: this.searchLeftMargin,
          right: this.searchRightMargin
        })
        .id('center_search')
      }
    }
    .width("100%")
    .height(this.titleBarHeight)
    .backgroundColor(this.titleBarColor)
    .border({
      width: { bottom: this.showBottomLine ? '1vp' : '0' },
    })
    .borderColor(this.bottomLineColor)
  }
}
