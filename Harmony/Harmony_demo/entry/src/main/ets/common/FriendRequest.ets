import { preferences } from '@kit.ArkData'

export  class FriendRequestModel{
  userId:string = ""
  reason:string = ""

  constructor(userId:string,reason:string) {
    this.userId =userId
    this.reason =reason
  }
}

class FriendRequestStore {
  KEY = 'friendRequestStore'
  store = preferences.getPreferencesSync(getContext(), { name: this.KEY })

  setItem(key: string,value:string) {
    this.store.putSync(key, value)
    this.store.flush()
  }

  delItem(key: string) {
    this.store.deleteSync(key)
    this.store.flush()
  }

  clear() {
    this.store.clearSync()
  }

  getAll() {
    const obj = this.store.getAllSync()
    const allKey = Object.keys(obj)
    let modelList:FriendRequestModel[] = []
    for (let index = 0; index < allKey.length; index++) {
      const key = allKey[index]
      const value = this.store.getSync(key,'') as string;
      modelList.push(new FriendRequestModel(key, value))
    }
    return modelList
  }
}

export const FrStore = new FriendRequestStore()