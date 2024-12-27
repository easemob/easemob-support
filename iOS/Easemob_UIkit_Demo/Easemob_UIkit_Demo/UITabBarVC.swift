//
//  UITabBarVC.swift
//  Easemob_UIkit_Demo
//
//  Created by wangfeng on 2024/12/27.
//

import UIKit
import EaseChatUIKit
class UITabBarVC: UITabBarController {

    override func viewDidLoad() {
        super.viewDidLoad()

        ChatUIKitContext.shared?.userProfileProvider = self
        ChatUIKitContext.shared?.groupProfileProvider = self
        
        
        let convNav = UINavigationController(rootViewController: ConversationVC())
        convNav.tabBarItem = UITabBarItem(title: "会话", image: nil, tag: 0)
        let contactNav = UINavigationController(rootViewController: ContactVC())
        contactNav.tabBarItem = UITabBarItem(title: "联系人", image: nil, tag: 0)
        let meNav = UINavigationController(rootViewController: MeVC())
        meNav.tabBarItem = UITabBarItem(title: "我的", image: nil, tag: 0)
        self.viewControllers = [convNav,contactNav,meNav];
        
   
    }
}

extension UITabBarVC:ChatUserProfileProvider,ChatGroupProfileProvider{
    func fetchProfiles(profileIds: [String]) async -> [any EaseChatUIKit.ChatUserProfileProtocol] {
        var resultProfiles = [ChatUserProfile]()
        let result = await ChatClient.shared().userInfoManager?.fetchUserInfo(byId: profileIds)
        if result?.1 == nil,let infoMap = result?.0 {
            for (userId,info) in infoMap {
                let profile = ChatUserProfile()
                let nickname = info.nickname ?? ""
                profile.id = userId
                profile.nickname = nickname
                if let remark = ChatClient.shared().contactManager?.getContact(userId)?.remark {
                    profile.remark = remark
                }
                profile.avatarURL = info.avatarUrl ?? ""
                resultProfiles.append(profile)
                ChatUIKitContext.shared?.userCache?[userId] = profile
            }
        }
        return resultProfiles
    }
    

    func fetchGroupProfiles(profileIds: [String]) async -> [any EaseChatUIKit.ChatUserProfileProtocol] {
        return [];
    }
    
    
}
