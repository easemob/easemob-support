<script>
import { EMClient } from '@/EaseIM';
import { emConnect } from '@/EaseIM/emApis';
import { emConnectListener, emMountGlobalListener } from '@/EaseIM/emListener';
import { CONNECT_CALLBACK_TYPE, HANDLER_EVENT_NAME } from '@/EaseIM/constant';
const { closeEaseIM, loginWithAccessToken } = emConnect();
export default {
  onLaunch: function () {
    console.log('App Launch');
    //传给监听callback回调
    const connectedCallback = (type) => {
      console.log('>>>>>连接相关回调', type);
      if (type === CONNECT_CALLBACK_TYPE.CONNECT_CALLBACK) {
        this.onConnectedSuccess();
      }
      if (type === CONNECT_CALLBACK_TYPE.DISCONNECT_CALLBACK) {
        this.onDisconnect();
      }
      if (type === CONNECT_CALLBACK_TYPE.RECONNECTING_CALLBACK) {
        this.onReconnecting();
      }
    };
    /* 链接所需监听回调 */
    emConnectListener(connectedCallback);
    /* 全局类型监听集合、消息、联系人、群组等... */
    emMountGlobalListener();
  },
  /* 最终优化点：onShow 全局断开 onHide 本地存储token直接进行IM建联 */
  //   onShow: function () {
  //     console.log('App Show');
  //     const getStorageData = uni.getStorageSync('EM_TOKEN');
  //     if (getStorageData?.token || getStorageData?.userId) {
  //       const userId = getStorageData?.userId;
  //       const token = getStorageData?.token;
  //       console.log('>>>>>>执行IM 登录', userId, token);
  //       loginWithAccessToken(userId, token);
  //     }
  //   },
  //   onHide: function () {
  //     console.log('App Hide');
  //     /* onHide  主动断开IM连接 */
  //     closeEaseIM();
  //   },
  methods: {
    onConnectedSuccess() {
      const { loginUserId } = this.loginStoreUserBaseInfos || {};
      const finalLoginUserId = loginUserId || EMClient.user;
      if (!this.loginStoreStatus) {
        // this.fetchLoginUserNeedData();
      }
      this.$store.commit('SET_LOGIN_USER_BASE_INFOS', {
        loginUserId: finalLoginUserId,
      });
      this.$store.commit('SET_LOGIN_STATUS', true);
      uni.showToast({
        title: '连接成功',
        icon: 'none',
        duration: 2000,
      });
    },
    onDisconnect() {
      uni.showToast({
        icon: 'none',
        title: '断开IM连接',
      });
      //断开回调触发后，如果业务登录状态为true则说明异常断开需要重新登录
      if (!this.loginStatus) {
        uni.showToast({
          title: '退出登录',
          icon: 'none',
          duration: 2000,
        });
        closeEaseIM();
      } else {
        //执行通过token进行重新登录
        // actionEMReconnect();
      }
    },
    onReconnecting() {
      uni.showToast({
        title: '重连中，请勿执行发送消息',
        icon: 'none',
      });
    },
  },
};
</script>

<style>
/*每个页面公共css */
</style>
