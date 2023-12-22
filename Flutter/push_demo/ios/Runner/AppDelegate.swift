import UIKit
import Flutter
import im_flutter_sdk
@UIApplicationMain
@objc class AppDelegate: FlutterAppDelegate {
   var deviceTokenString = ""
    
  override func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
  ) -> Bool {
      GeneratedPluginRegistrant.register(with: self)
      UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .sound, .badge]) { granted, err in
          if err == nil{
             DispatchQueue.main.async {
                 application.registerForRemoteNotifications()
             }
          }
      }
      

    let messenger : FlutterBinaryMessenger = window?.rootViewController as! FlutterBinaryMessenger
    let channel = FlutterMethodChannel(name: "flutter_iOS", binaryMessenger: messenger)
    channel.setMethodCallHandler { (call:FlutterMethodCall, result:@escaping FlutterResult) in
      if (call.method == "getDeviceToken") {
          result(["deviceToken":self.deviceTokenString]);
      }
    }

    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }
    
    override func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data){
        deviceTokenString = deviceToken.map { String(format: "%02.2hhx", $0) }.joined()
        print("deviceToken：\(deviceTokenString)")
    }
    override func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
        print(error)
    }
    
    
}
