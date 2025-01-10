<template>
    <div class="tabbar">
        <div class="tabbar_left">
            <Breadcrimb></Breadcrimb>
        </div>
        <div class="tabbar_right">
            <Setting></Setting>
        </div>
    </div>
</template>

<script setup lang="ts">
import Breadcrimb from './breadcrimb/index.vue'
import Setting from './setting/index.vue'
</script>

<script lang="ts">
export default {
    name: 'Tabbar'
}
</script>

<style scoped lang="scss">
.tabbar {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    background-image: linear-gradient(to right, rgb(235, 222, 222), rgb(219, 200, 200), rgb(232, 220, 220));

    .tabbar_left {
        display: flex;
        align-items: center;
        margin-left: 20px;
    }

    .tabbar_right {
        display: flex;
        align-items: center;
    }
}
</style>