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
const getIP=() => {
    return api({
        url: '/Uapi/api/v1/network/myip',
        method: 'GET'
    })
}
const getWeather=() => {
    return api({
        url: '/Uapi/api/v1/misc/weather',
        method: 'GET'
    })
}
const getBingPhoto=() => {
    return api({
        url: 'https://bing.biturl.top/',
        method: 'GET',
        params: {
            format: 'json',
            index: '0',
            mkt: 'zh-CN',
            resolution: '1920'
        }
    })
}
const getKFC=() => {
    return api({
        url: 'https://apis.uctb.cn/api/v50',
        method: 'GET'
    })
}
const getHotBoard=() => {
    return api({
        url: '/Uapi/api/v1/misc/hotboard',
        method: 'GET',
        params: {
            type: 'douyin'
        }
    })
}

const getConstellation=(name) => {
    return api({
        url: '/juhe/constellation/getAll',
        method: 'GET',
        params: {
            key: '4a11bbcbf089edaf14c2d9bdb80c2ec4',
            consName: name,
            type: 'today'
        }
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
export {getSaying, getIP, getWeather, getBingPhoto, getKFC, getHotBoard, getConstellation}