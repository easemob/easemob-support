<script setup lang="ts">
import { ref, onMounted } from "vue"
import HelloWorld from "./components/HelloWorld.vue"
const emChatroomRef = ref<any>(null)
onMounted(() => {
  console.log("emChatroomRef", emChatroomRef.value.closeIM())
})
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <div class="chatroom_container">
    <EasemobChatroom
      ref="emChatroomRef"
      :username="'hfp'"
      :password="'1'"
      :chatroomId="'208712152186885'"
    >
    </EasemobChatroom>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.chatroom_container {
  position: absolute;
  right: 0;
  top: 0;
  width: 300px;
  height: 500px;
  background: pink;
}
</style>
