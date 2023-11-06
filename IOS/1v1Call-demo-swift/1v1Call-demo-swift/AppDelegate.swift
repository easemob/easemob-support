//
//  AppDelegate.swift
//  1v1Call-demo-swift
//
//  Created by wangfeng on 2023/11/6.
//

import UIKit
import HyphenateChat
@main
class AppDelegate: UIResponder, UIApplicationDelegate {


    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Override point for customization after application launch.
        let options = EMOptions(appkey: "你的appkey")
        options.logLevel = .debug
        options.isAutoLogin = false
        options.enableConsoleLog = true
        let err = EMClient.shared().initializeSDK(with: options)
        print("初始化；\(String(describing: err))")
        print(NSHomeDirectory())
        return true
    }

    func applicationWillResignActive(_ application: UIApplication) {
        
    }
    func applicationDidEnterBackground(_ application: UIApplication) {
        
    }
    func applicationWillEnterForeground(_ application: UIApplication) {
        
    }
    func applicationDidBecomeActive(_ application: UIApplication) {
        
    }
    func applicationWillTerminate(_ application: UIApplication) {
        
    }


}

