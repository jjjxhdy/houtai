//小仓库:layout组件相关配置仓库
import { defineStore } from 'pinia'

let useLayOutSettingStore = defineStore('SettingStore', {
    state: () => {
        return {
            fold: false, // 用户控制菜单折叠还是收起控制
            refsh: false, // 控制刷新效果
        }
    },
    actions: {
        // 切换菜单折叠
        changeFold() {
            this.fold = !this.fold
        },
        // 刷新效果
        changeRefresh() {
            this.refsh = !this.refsh
        }
    }
})

export default useLayOutSettingStore