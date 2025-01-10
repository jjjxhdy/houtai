// 引入项目中全部的全局组件
import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'
// 全局对象
const allGloablComponent = { SvgIcon, Pagination }
// 引入element图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 对外暴漏插件对象
export default {
    // 务必叫做install
    install(app: any) {
        // 注册项目全部的全局组件
        Object.keys(allGloablComponent).forEach(key => {
            // 注册全局组件
            app.component(key, allGloablComponent[key])
        })
        //全局注册elememt图标
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
    }
}