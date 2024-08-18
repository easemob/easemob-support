// 导入模块
import distributedKVStore from '@ohos.data.distributedKVStore';
import { featureAbility } from '@kit.AbilityKit';
import { ChatClient, UserInfo, UserInfoType } from 'chatsdk';
import distributedData from '@ohos.data.distributedData';
import { BusinessError, emitter } from '@kit.BasicServicesKit';
import { HashMap } from '@kit.ArkTS';


export class UserModel {
  nickname?: string;
  avatarUrl?: string;
  remark?: string;
  userId: string = "";
}
// 获取context
let context = getContext(this);
const batchPrefix = "batchPrefix"
class KVStoreManager {

  userCache: HashMap<string, UserModel> = new HashMap();
  KVStore?: distributedKVStore.SingleKVStore;
  curUserInfo:UserModel | undefined = undefined
  // 创建并获取KVStore
  async initKVStore() {
    try {
      // Create KVManager
      const kvManagerConfig: distributedKVStore.KVManagerConfig = {
        context: context,
        bundleName: "com.example.harmony_demo"
      };
      const manager = distributedKVStore.createKVManager(kvManagerConfig);

      // Create KVStore
      const options: distributedKVStore.Options = {
        createIfMissing: true,
        encrypt: false,
        backup: false,
        autoSync: false,
        kvStoreType: distributedKVStore.KVStoreType.SINGLE_VERSION,
        securityLevel: distributedKVStore.SecurityLevel.S1
      };
      const userName = ChatClient.getInstance().getCurrentUser()
      this.KVStore = await manager.getKVStore<distributedKVStore.SingleKVStore>(userName, options);
    } catch (error) {
      console.error('[KVStoreManager]', `Failed to initKVStore, Cause: ${error}`);
    }
  }

  getUserInfo(users:string[]){
     ChatClient.getInstance().userInfoManager()?.fetchUserInfoById(users,[UserInfoType.NICKNAME,UserInfoType.AVATAR_URL])
       .then((rest)=>{
         let entries: distributedKVStore.Entry[] = [];
         rest.forEach((value,key)=>{
           const model = new UserModel()
           model.nickname = value.nickname
           model.avatarUrl = value.avatarUrl
           model.userId = key
           const  entry: distributedKVStore.Entry = {
              key: batchPrefix+key,
              value: {
                type: distributedKVStore.ValueType.STRING,
                value: JSON.stringify(model)
              }
           }
           entries.push(entry);
           this.userCache.set(key,model)
           if (model.userId == ChatClient.getInstance().getCurrentUser()) {
             this.curUserInfo = model
           }
         })
         emitter.emit("userInfoUpdate");
         this.putBatch(entries)
       })
  }
  // 插入数据
  async putBatch(entries:distributedKVStore.Entry[]) {
    if (!this.KVStore) {
      await this.initKVStore();
    }
    try {
      await this.KVStore?.putBatch(entries)
    } catch (error) {
      console.log('[KVStoreManager]', `Failed to set value, Cause: ${error}`);
    }
  }

  // 获取单个数据
  // async getKey(key:string): Promise<UserModel | undefined>{
  //   if (!this.KVStore) {
  //     await this.initKVStore();
  //   }
  //   try {
  //     const rest = await this.KVStore?.get(batchPrefix+key) as string
  //     if (rest != undefined) {
  //       let model:UserModel|undefined = undefined
  //       model = JSON.parse(rest);
  //       return model
  //     }
  //   } catch (error) {
  //     console.log('[KVStoreManager]', `Failed to get value, Cause: ${error}`);
  //   }
  //   return undefined;
  // }

  // 获取全部数据
  async getAll(){
    if (!this.KVStore) {
      await this.initKVStore();
    }

    let  userModel = kvStore.userCache.get(ChatClient.getInstance().getCurrentUser())
    if (userModel == undefined) {
      kvStore.getUserInfo([ChatClient.getInstance().getCurrentUser()])
    }else {
      this.curUserInfo = userModel
    }

    try {
     const rest = await this.KVStore?.getEntries(batchPrefix)
      if (rest != undefined) {
        rest.forEach((value,index)=>{
          console.debug(value.key)
          console.debug(value.value.value.toString())
          let model:UserModel|undefined = undefined
          model = JSON.parse(value.value.value.toString());
          this.userCache.set(model?.userId,model)
        })
      }
    } catch (error) {
      console.log('[KVStoreManager]', `Failed to get value, Cause: ${error}`);
    }
  }

  // 删除数据
  async delete(key: string) {
    if (!this.KVStore) {
      await this.initKVStore();
    }
    try {
      await this.KVStore?.delete(batchPrefix+key);
    } catch (error) {
      console.log('[KVStoreManager]', `Failed to delete value, Cause: ${error}`);
    }
  }
}

export const kvStore = new KVStoreManager()
