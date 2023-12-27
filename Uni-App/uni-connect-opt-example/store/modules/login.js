import { EMClient } from '@/EaseIM';
import { emUserInfos } from '@/EaseIM/emApis';
const { fetchUserInfoWithLoginId } = emUserInfos();

emUserInfos;
const loginStore = {
  state: {
    loginStatus: false,
    loginUserBaseInfos: {
      loginUserId: '',
      phoneNumber: '',
    },
    loginUserProfiles: {},
  },
  mutations: {
    SET_LOGIN_STATUS: (state, status) => {
      state.loginStatus = status;
    },
    SET_LOGIN_USER_BASE_INFOS: (state, baseInfos) => {
      state.loginUserBaseInfos = Object.assign({}, baseInfos);
    },
    SET_LOGIN_USER_PROFILES: (state, profiles) => {
      state.loginUserProfiles = Object.assign({}, profiles);
    },
  },
  actions: {
    async fetchLoginUserProfile({ commit }) {
      try {
        const profiles = await fetchUserInfoWithLoginId();
        commit('SET_LOGIN_USER_PROFILES', profiles[EMClient.user]);
      } catch (error) {
        console.log('>>>>登录用户个人信息获取失败', error);
      }
    },
  },
  getters: {
    loginStatus: (state) => state.loginStatus,
  },
};
export default loginStore;
