// 页面路径：store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); //vue的插件机制
import LoginStore from './modules/login';
//Vuex.Store 构造器选项
const store = new Vuex.Store({
  modules: {
    LoginStore
  },
});
export default store;
