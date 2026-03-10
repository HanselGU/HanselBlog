import api from '@/api/apiSet.js'

const getSaying=() => {
    // api.get('/Uapi/api/v1/saying', {
    //     // params: { category: 'landscape' }
    // }).then(res => {
    //     // console.log(res)
    //     return res
    // })
    return api({
        url: '/Uapi/api/v1/saying',
        method: 'GET'
    })
}
const getRandomImg=() => {
    // return api({
    //     url: 'https://uapis.cn/api/v1/random/image',
    //     params: {
    //         category: 'landscape'
    //     },
    //     method: 'GET'
    // })
    // api.get('/api/api/v1/random/image', {
    //     params: { category: 'landscape' }
    // }).then(r => {
    //     console.log(r)
    //     return r
    // })
    api.get('/api/fengjing.php', {
        // params: { category: 'landscape' }
    }).then(r => {
        console.log(r)
        return r
    })

}
export {getSaying}