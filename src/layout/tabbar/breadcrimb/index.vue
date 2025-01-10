<template>
    <!-- 顶部图标 -->
    <el-icon style="margin-right: 10px;" @click="changeIcon">
        <component :is="LayOutSettingStore.fold ? 'Expand' : 'Fold'"></component>
    </el-icon>
    <!-- 左侧面包屑 -->
    <el-breadcrumb separator-icon="ArrowRight">
        <!-- 面包屑动态展示路由名字与图标 -->
        <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index" v-show="item.meta.title"
            :to="item.path">
            <!-- 面包屑展示匹配路由的图标 -->
            <el-icon>
                <component :is="item.meta.icon" v-if="item.meta.icon"></component>
            </el-icon>
            <!-- 面包屑展示匹配路由的标题 -->
            <span style="margin: 0px 5px;">{{ item.meta.title }}</span>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import useLayOutSettingStore from '@/store/modules/setting'

// 获取layout配置相关的仓库
let LayOutSettingStore = useLayOutSettingStore()
// 获取路由对象
let $route = useRoute()
// 点击图标的方法
const changeIcon = () => {
    LayOutSettingStore.changeFold()
}
</script>

<script lang="ts">
export default {
    name: 'Breadcrimb'
}
</script>

<style scoped lang="scss">
.el-icon {
    margin: 0px 3px;
}
</style>