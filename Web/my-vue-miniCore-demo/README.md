# vue-miniCore-vite

> 此 Demo 是基于环信[vue3-miniCore](https://github.com/easemob/webim-vue-demo/tree/vue3-miniCore)迁移至 vite 的示例，在该示例中你可以看到`vue3-miniCore`在 vite 下的配置。

## 创建以及运行

### 创建项目

```sh
npm create vite@latest my-vue-app -- --template vue
```

### 运行

```sh
npm run dev
```

### package.json 中依赖安装目录

#### devDependencies

```json
"devDependencies": {
           "sass": "^1.51.0",
    "sass-loader": "^12.6.0",
    }
```

#### dependencies

```json
  "dependencies": {
    "@vueuse/core": "^8.4.2",
    "agora-rtc-sdk-ng": "^4.21.0",
    "axios": "^0.27.2",
    "benz-amr-recorder": "^1.1.5",
    "easemob-websdk": "^4.8.1",
    "element-plus": "^2.2.5",
    "lodash": "^4.17.21",
    "nprogress": "^0.2.0",
    "path": "^0.12.7",
    "pinyin-pro": "^3.23.1",
    "vue": "^3.4.31",
    "vue-at": "^3.0.0-alpha.2",
    "vue-router": "^4.4.0",
    "vuex": "^4.1.0"
  },

```

## 项目迁移目录

- src/api
- src/assets
- src/components/\*
- src/constant/\*
- src/hooks/\*
- src/IM/\*
- src/router/\*
- src/store/\*
- src/styles/\*
- src/uitls/\*
- src/views/\*
- src/App.vue
- src/main.js

## 核心改动

### vite.config.js

```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
    extensions: ['.js', '.vue', '.json'],
  },
});
```

- path 需要单独引入该库
- `@`需要在`vite.config.js`中进行配置。
- `extensions`的配置可以在引入文件时，自动索引`index.js`或`index.vue`或`index.json`。

### router 中

```js
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
```

> process 调整为 import.meta.env

```js
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
```

### CommonJS 方式的 require 的引入改为 ESM

```js
const grayConversation = require('@/assets/images/tabbar/grayconversation.png');
```

```js
import grayConversation from '@/assets/images/tabbar/grayconversation.png';
```
