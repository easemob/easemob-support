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
        
        self.avatarImageV.kf.setImage(with: URL(string: "https://accktvpic.oss-cn-beijing.aliyuncs.com/pic/sample_avatar/sample_avatar_4.png"))
        self.IdLab.text = "用户ID:\(ChatClient.shared().currentUsername ?? "")"
        self.nameLab.text = "用户名:张三"
    }
    @IBAction func logout() {
        ChatClient.shared().logout(true)
        guard let window = UIApplication.shared.windows.first(where: { $0.isKeyWindow })else { return }
        window.rootViewController = LoginVC()
    }
}
