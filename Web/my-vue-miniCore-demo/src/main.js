import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import './styles/element/index.scss';
createApp(App)
  .use(ElementPlus, { locale: zhCn })
  .use(store)
  .use(router)
  .mount('#app');
