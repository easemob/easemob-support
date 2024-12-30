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
      
        let appUser = ChatUserProfile();
        appUser.id = nameTF.text ?? ""
        appUser.nickname = "张三"
        appUser.avatarURL = "https://accktvpic.oss-cn-beijing.aliyuncs.com/pic/sample_avatar/sample_avatar_4.png"
        ChatUIKitClient.shared.login(user: appUser, token: self.tokenTF.text ?? "") { error in
            if error == nil{
                guard let window = UIApplication.shared.windows.first(where: { $0.isKeyWindow })else { return }
                window.rootViewController = UITabBarVC()
            }else{
                print("登录失败：\(String(describing: error?.errorDescription))")
            }
        }
    }
}
