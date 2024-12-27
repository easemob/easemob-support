//
//  MeVC.swift
//  Easemob_UIkit_Demo
//
//  Created by wangfeng on 2024/12/27.
//

import UIKit
import EaseChatUIKit
import Kingfisher
class MeVC: UIViewController {

    @IBOutlet weak var avatarImageV: UIImageView!
    @IBOutlet weak var IdLab: UILabel!
    @IBOutlet weak var nameLab: UILabel!
    override func viewDidLoad() {
        super.viewDidLoad()
        overrideUserInterfaceStyle = .light
        
        guard let userid = ChatClient.shared().currentUsername else { return }
        ChatClient.shared().userInfoManager?.fetchUserInfo(byId: [userid],completion: { result, err in
            if err != nil {
                print(err?.errorDescription ?? "")
            }
            DispatchQueue.main.sync {
                let userInfo = result?[userid]
                self.avatarImageV.kf.setImage(with: URL(string: userInfo?.avatarUrl ?? ""))
                self.IdLab.text = "用户ID:\(userid)"
                self.nameLab.text = "用户名:\(userInfo?.nickname ?? "")"
            }
        })
    }
    @IBAction func logout() {
        ChatClient.shared().logout(true)
        guard let window = UIApplication.shared.keyWindow else { return }
        window.rootViewController = LoginVC()
    }
}
