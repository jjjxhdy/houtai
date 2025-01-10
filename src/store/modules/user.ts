// 创建用户相关小仓库
import { defineStore } from "pinia";
// 引入接口
import { reqLogin, reqUserInfo } from "@/api/user";
// 引入数据类型
import type { loginForm, loginResponseData } from "@/api/user/type";
import type { UserState } from "./types/type";
// 引入操作本地存储的工具方法
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from "@/utils/token";
// 引入路由（常量路由）
import { constantRoute } from "@/router/routes";
// 创建用户小仓库
let useUserStore = defineStore('User', {
    // 小仓库存储数据的地方
    state: (): UserState => {
        return {
            token: GET_TOKEN() || '',
            menuRoutes: constantRoute,//仓库存储生成菜单需要数组（路由）
            username: '',
            avatar: '',
        }
    },
    actions: {
        // 用户登录方法
        async userLogin(data: loginForm) {
            try {
                const result: loginResponseData = await reqLogin(data)
                if (result.code == 200) {
                    this.token = (result.data.token as string)
                    SET_TOKEN(result.data.token as string)
                    return 'ok'
                } else {
                    return Promise.reject(new Error(result.data.message))
                }
            } catch (error) {
                return Promise.reject(error)
            }
        },
        // 获取用户信息方法
        async userInfo() {
            let result = await reqUserInfo()
            if (result.code == 200) {
                this.username = result.data.checkUser.username
                this.avatar = result.data.checkUser.avatar
                return 'ok'
            } else {
                return Promise.reject('获取用户信息失败')
            }
        },
        // 退出登录
        userLogout() {
            // 目前mock接口：退出登录接口（通知服务器token失效）
            this.token = '';
            this.username = '';
            this.avatar = '';
            REMOVE_TOKEN()
        }
    },
    getters: {

    }
})
// 对外暴露用户小仓库
export default useUserStore