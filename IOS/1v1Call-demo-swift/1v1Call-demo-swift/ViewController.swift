//
//  ViewController.swift
//  1v1Call-demo-swift
//
//  Created by wangfeng on 2023/11/6.
//

import UIKit
import Foundation
import HyphenateChat
import EaseCallKit

class ViewController: UIViewController {

    @IBOutlet weak var accountTF: UITextField!
    @IBOutlet weak var pwdTF: UITextField!
    @IBOutlet weak var friendTF: UITextField!
    override func viewDidLoad() {
        super.viewDidLoad()

    }

    @IBAction func login(_ sender: Any) {
        EMClient.shared().login(withUsername: accountTF.text!, password: pwdTF.text!) { name, err in
            print("登录name：\(name)")
            print("登录err：\(String(describing: err))")
            
            let config = EaseCallConfig.init()
            config.enableRTCTokenValidate = true
            config.agoraAppId = "声网的agoraAppId"
            EaseCallManager.shared().initWith(config, delegate: self)
        }
    }
    
    @IBAction func call(_ sender: Any) {
        EaseCallManager.shared().startSingleCall(withUId: self.friendTF.text!, type: .type1v1Video, ext: nil) { name, err in
            print("call name：\(String(describing: name))")
            print("call err：\(String(describing: err))")
        }
    }
    
    
    
}

extension ViewController:EaseCallDelegate{
    func multiCallDidInviting(withCurVC vc: UIViewController, excludeUsers users: [String]?, ext aExt: [AnyHashable : Any]?) {
        
    }
    
    func callDidReceive(_ aType: EaseCallType, inviter user: String, ext aExt: [AnyHashable : Any]?) {
        //收到邀请

    }
    
    func callDidOccurError(_ aError: EaseCallError) {
        
    }
    
    func callDidRequestRTCToken(forAppId aAppId: String, channelName aChannelName: String, account aUserAccount: String, uid aAgoraUid: Int) {
        
        let params = ["ChannelName": aChannelName, "uid": aAgoraUid] as [String : Any]

        //写本地的IP或者服务的域名
        var urlReq = URLRequest.init(url: URL(string: "http://172.17.12.5:8082/fetch_rtc_token")!)
        urlReq.setValue("Bearer \(EMClient.shared().accessUserToken)", forHTTPHeaderField: "Authorization")
        urlReq.setValue("application/json; charset=UTF-8", forHTTPHeaderField: "Content-Type")
        urlReq.httpMethod = "post"


        guard  let jsonData = try? JSONSerialization.data(withJSONObject: params) else{
            return
        }
        urlReq.httpBody = jsonData

        let session = URLSession(configuration: URLSessionConfiguration.default, delegate: nil, delegateQueue: OperationQueue.main)
       let task = session.dataTask(with: urlReq) { data, response, error in
           guard let body = try? JSONSerialization.jsonObject(with: data!) as? Dictionary<String, Any> else{
                return
            }
           print(body)
            let code = body["code"] as! String
            if code == "200"{
                let token = body["token"] as! String
                EaseCallManager.shared().setRTCToken(token, channelName: aChannelName, uid: UInt(aAgoraUid))
            }
        }
        task.resume()
    }
    
    func remoteUserDidJoinChannel(_ aChannelName: String, uid aUid: Int, username aUserName: String?) {
        
    }
    
    func callDidJoinChannel(_ aChannelName: String, uid aUid: UInt) {
        
    }
    
    func callDidEnd(_ aChannelName: String, reason aReason: EaseCallEndReason, time aTm: Int32, type aType: EaseCallType) {
        print("callDidEnd")
    }
}
