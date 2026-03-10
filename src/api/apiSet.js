import axios from 'axios';
// import {ElMessage} from 'element-plus'

const api=axios.create({
    timeout: 5000,
})
api.interceptors.request.use((config) => {
    // const token=localStorage.getItem('token')
    // if(token){
    //     config.headers['Authorization']=`Auth-${token}`
    // }
    return config
}, (error) => {
    // ElMessage.error('数据请求发送失败，请稍后重试')
    // console.log('err1')
    return Promise.reject(error)
})
api.interceptors.response.use((response) => {
    // console.log(response)
    return response.data
}, (error) => {
    // ElMessage.error('服务器返回失败，请稍后重试')
    // console.log('err2')
    return Promise.reject(error)
})
export default api
