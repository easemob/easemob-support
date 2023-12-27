<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">缓存业务登录状态{{ loginStatus }}</text>
    </view>
    <view class="input_container">
      <input v-model="loginId" type="text" />
    </view>
    <view class="input_container">
      <input v-model="loginPwd" type="text" />
    </view>
    <view>
      <button @click="loginIM">登录IM</button>
    </view>
    <view>
      <button @click="closeIM">主动关闭连接</button>
    </view>
    <view>
      <button @click="sendTextMessage">发送消息</button>
    </view>
  </view>
</template>

<script>
import { EMClient } from '@/EaseIM/index.js';
import { emConnect, emMessages } from '@/EaseIM/emApis';
const { loginWithPassword, loginWithAccessToken, closeEaseIM } = emConnect();
const { sendDisplayMessages } = emMessages();
export default {
  data() {
    return {
      title: 'Hello',
      loginId: 'test',
      loginPwd: '1',
      storageData: uni.getStorageSync('EM_TOKEN'),
      sendMsgTimmer: null,
      seddMsgMaxTimeout: 5000,
    };
  },
  onLoad() {},
  computed: {
    loginStatus() {
      return this.$store.getters.loginStatus;
    },
  },
  methods: {
    loginIM() {
      loginWithPassword(this.loginId, this.loginPwd)
        .then((res) => {
          console.log('>>>>token获取成功', res);
          this.setUserAccessToken(this.loginId, res.accessToken);
        })
        .catch((err) => {
          console.log('>>>>>>fail', err);
        });
    },
    closeIM() {
      closeEaseIM();
      this.$store.commit('SET_LOGIN_STATUS', false);
    },
    async sendTextMessage() {
      /*优化点二： 发送消息时，如果某条消息大于5s没有收到成功回调，则补充连接IM */
      this.sendMsgTimmer && clearTimeout(this.sendMsgTimmer);
      this.sendMsgTimmer = setTimeout(() => {
        console.log('>>>>>该条消息超时时间大于5s', EMClient.sock.readyState);
        uni.showToast({
          icon: 'none',
          title: `该消息超时未响应${EMClient.sock.readyState}执行重新登录`,
        });
        closeEaseIM();
        this.compensationLoginIM();
      }, this.seddMsgMaxTimeout);

      const params = {
        type: 'txt',
        msg: 'test message!',
        to: 'pfh',
        chatType: 'singleChat',
      };

      try {
        /*   模拟发送消息超时 */
        // const sendPromise = new Promise((resolve, reject) => {
        //   setTimeout(async () => {
        //     try {
        //       const res = await sendDisplayMessages({ ...params });
        //       resolve(res);
        //     } catch (error) {
        //       reject(error);
        //     }
        //   }, 6000);
        // });
        // const res = await sendPromise;
        const res = await sendDisplayMessages({ ...params });
        console.log('>>>>>>>>发送消息成功', res);
        this.sendMsgTimmer && clearTimeout(this.sendMsgTimmer);
        uni.showToast({
          icon: 'none',
          title: `发送成功！${res.serverMsgId}`,
        });
      } catch (e) {
        this.sendMsgTimmer && clearTimeout(this.sendMsgTimmer);
        console.log('>>>>>>>发送失败', e);
        /*  优化点一：在catch到发送消息提示not login时 主动补偿连接IM */
        if (e?.type === 39) {
          console.log('>>>>>IM 未连接 调用补偿登录');
          this.compensationLoginIM();
        }
        uni.showToast({
          icon: 'none',
          title: `发送失败：${JSON.stringify(e)}`,
        });
      }
    },
    setUserAccessToken(userId, userAccessToken) {
      const params = {
        key: `EM_TOKEN`,
        data: { userId: userId, token: userAccessToken },
      };
      uni.setStorageSync(params.key, params.data);
      console.log('>>>>>token写入本地成功');
    },
    //补偿连接IM
    compensationLoginIM() {
      //EMClient.sock.readyState 三种状态 1 连接中 2 连接中 3 未连接
      console.log('当前SDK socket status', EMClient.sock.readyState);
      closeEaseIM();
      setTimeout(() => {
        const userId = this.storageData?.userId;
        const token = this.storageData?.token;
        console.log('>>>>>>>开始执行token登录', this.storageData);
        loginWithAccessToken(userId, token);
      }, 200);
    },
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
.input_container {
  border: 1px solid #8f8f94;
}
</style>
