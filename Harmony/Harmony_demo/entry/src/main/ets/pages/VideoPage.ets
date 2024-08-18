import { router } from '@kit.ArkUI'

@Entry
@Component
struct VideoPage {
  @State videoSrc: string | undefined = undefined
  @State previewUri: string | undefined = undefined
  @State curRate: PlaybackSpeed = PlaybackSpeed.Speed_Forward_1_00_X
  @State isAutoPlay: boolean = true
  @State showControls: boolean = true
  controller: VideoController = new VideoController()
  async aboutToAppear(): Promise<void> {

    this.videoSrc = (router.getParams() as object)['videoSrc'];
    this.previewUri = (router.getParams() as object)['previewUri'];

    console.error(this.videoSrc)
    console.error(this.previewUri)
  }
  build() {
    Column() {
      Video({
        src: this.videoSrc,
        currentProgressRate: this.curRate,
        controller: this.controller
      })
        .width('100%')
        .height('100%')
        .autoPlay(this.isAutoPlay)
        .controls(this.showControls)
        .onStart(() => {
          console.info('onStart')
        })
        .onPause(() => {
          console.info('onPause')
        })
        .onFinish(() => {
          console.info('onFinish')
        })
        .onError(() => {
          console.info('onError')
        })
        .onStop(() => {
          console.info('onStop')
        })
        .onPrepared((e?: DurationObject) => {
          if (e != undefined) {
            console.info('onPrepared is ' + e.duration)
          }
        })
        .onSeeking((e?: TimeObject) => {
          if (e != undefined) {
            console.info('onSeeking is ' + e.time)
          }
        })
        .onSeeked((e?: TimeObject) => {
          if (e != undefined) {
            console.info('onSeeked is ' + e.time)
          }
        })
        .onUpdate((e?: TimeObject) => {
          if (e != undefined) {
            console.info('onUpdate is ' + e.time)
          }
        })
    }
  }
}

interface DurationObject {
  duration: number;
}

interface TimeObject {
  time: number;
}