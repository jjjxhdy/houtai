import { createApp } from 'vue'
import App from '@/App.vue'
//引入element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
// 配置element-plus国际化
import { zhCn } from 'element-plus/es/locales.mjs';
// 引入模板的全局的样式
import '@/styles/index.scss';
// svg插件需要配置代码
import 'virtual:svg-icons-register'
// 引入自定义插件对象：注册整个项目全局组件
import gloalComponent from '@/components';
// 引入路由
import router from './router';
// 引入仓库
import pinia from './store';
// 引入element-plus图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


// 获取应用实例对象
const app = createApp(App)
// 安装element-plus插件
app.use(ElementPlus, {
  locale: zhCn//element设置中文
})
// 安装自定义插件
app.use(gloalComponent)
// 注册路由
app.use(router)
// 安装仓库
app.use(pinia)

// // 将element-plus图标注册为全局组件
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component)
// }

// // 在现有代码中添加
// router.onError((error) => {
//   console.error('路由错误:', error)
// })
// 引入路由鉴权文件
import './permisstion'
// 将应用挂载到挂载点上
app.mount('#app')
