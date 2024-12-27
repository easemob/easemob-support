//
//  LoginVC.swift
//  Easemob_UIkit_Demo
//
//  Created by wangfeng on 2024/12/27.
//

import UIKit
import EaseChatUIKit
class LoginVC: UIViewController {

    @IBOutlet weak var nameTF: UITextField!
    @IBOutlet weak var tokenTF: UITextField!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()

        overrideUserInterfaceStyle = .light
    }


    @IBAction func login() {
        // YWMtIMUYfsQFEe-kvXvo9Aob8A1mN7fFQUJHtJstEOESXXkbDglAxAUR74ydb8Tas9KPAwMAAAGUBjjdSAAAAAB0H75oMfLehJBeTWKy9768m83-_utkyzPgFcrfd8biLA
        guard let userid = nameTF.text else { return }
        
        ChatClient.shared().userInfoManager?.fetchUserInfo(byId: [userid],completion: { result, err in
            if err != nil {
                print(err?.errorDescription ?? "")
            }
            let appUser = ChatUserProfile();
            let userInfo = result?[userid]
            appUser.id = userid
            appUser.nickname = userInfo?.nickname ?? ""
            appUser.avatarURL = userInfo?.avatarUrl ?? ""
            ChatUIKitClient.shared.login(user: appUser, token: self.tokenTF.text ?? "") { error in
                if error == nil{
                    guard let window = UIApplication.shared.keyWindow else { return }
                    window.rootViewController = UITabBarVC()
                }else{
                    print("登录失败：\(String(describing: error?.errorDescription))")
                }
            }
        })

   
    }


    
}
