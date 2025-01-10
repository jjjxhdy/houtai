<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <!-- 登录表单 -->
                <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
                    <h1>Hello</h1>
                    <h2>欢迎来到硅谷</h2>
                    <el-form-item prop="username">
                        <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password"
                            show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button :loading="loading" class="login_btn" type="primary" size="default"
                            @click="handleLogin">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue';
import { reactive, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { ElNotification } from 'element-plus';
//引入用户相关的小仓库
import useUserStore from "@/store/modules/user";
// 引入判断时间段
import { getTime } from "@/utils/time";

// 获取路由器对象
const $router = useRouter();
// 获取路由对象
const $route = useRoute()
// 定义小仓库
const useStore = useUserStore();
// 获取表单元素
const loginForms = ref();
// 定义变量控制按钮加载
const loading = ref(false);
// 收集账号与密码的数据
const loginForm = reactive({ username: 'admin', password: '111111' });

// 登录按钮回调
const handleLogin = async () => {
    try {
        loading.value = true;
        // 保证全部表单校验通过再发请求
        await loginForms.value.validate();
        // 通知仓库发请求
        await useStore.userLogin(loginForm);
        // 编程式导航跳到首页
        //判断登录的时候,路由路径当中是否有query参数，如果有就往query参数挑战，没有跳转到首页
        let redirect: any = $route.query.redirect;
        $router.push({ path: redirect || '/' });
        // 登录成功提示信息
        ElNotification({
            type: 'success',
            message: '登录成功',
            title: `Hi,${getTime()}好`
        });
    } catch (error) {
        console.error('Login error:', error);
        // 登录成功提示信息
        ElNotification({
            type: 'error',
            message: (error as Error).message
        });
    } finally {
        loading.value = false;
    }
};
// 自定义校验规则函数
const validatorUserName = (_rule: any, value: any, callback: any) => {
    // rule:校验规则对象，value：表单元素文本内容
    // callback(函数)，符合条件放行通过，不符合，注入错误提示信息
    if (value.length >= 5) {
        callback();
    } else {
        callback(new Error('账号长度至少5位'));
    }
};
const validatorPassword = (_rule: any, value: any, callback: any) => {
    if (value.length >= 6) {
        callback();
    } else {
        callback(new Error('密码长度至少6位'));
    }
};
// 定义效验规则
const rules = {
    username: [
        // { required: true, min: 6, max: 10, message: '用户名应该6-10位', trigger: 'change' },
        { trigger: 'change', validator: validatorUserName }
    ],
    password: [
        // { required: true, min: 6, max: 15, message: '密码应该6-15位', trigger: 'change' },
        { trigger: 'change', validator: validatorPassword }
    ]
};



</script>

<style scoped lang="scss">
.login_container {
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/background.jpg') no-repeat;
    background-size: cover;
}

.login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px 0px;

    h1 {
        color: white;
        font-size: 40px;
    }

    h2 {
        color: white;
        font-size: 20px;
        margin: 20px 0px;
    }

    .login_btn {
        width: 100%;
    }
}
</style>