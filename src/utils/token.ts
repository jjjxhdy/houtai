// 封装本地存储存储数据与读取数据方法

// 存储数据
export const SET_TOKEN = (token: string) => {
    localStorage.setItem('TOKEN', token)
}

// 存储获取数据
export const GET_TOKEN = (): string => {
    return localStorage.getItem('TOKEN') || ''
}

export const REMOVE_TOKEN = () => {
    localStorage.removeItem('TOKEN')
}