<template>
    <h1>我是一级home</h1>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
// 获取仓库
import useUserStore from '@/store/modules/user';
let userStore = useUserStore()
// 目前是首页挂载完毕发请求获取用户信息
onMounted(()=>{
    userStore.userInfo()
})
</script>

<style scoped lang="scss"></style>