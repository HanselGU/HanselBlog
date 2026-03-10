import {defineStore} from 'pinia'
import {ref} from 'vue';

export const LoadingSign=defineStore('LoadingSign', () => {
    const loading=ref(true)
    const setLoading=(sign) => {
        loading.value=sign
    }
    return {
        loading,
        setLoading
    }
})

// export const useScale=defineStore('scaleCal', () => {
//     const scale=ref(0)
//     const setScale=(n) => {
//         scale.value=ref(n)
//     }
//     return {
//         scale,
//         setScale
//     }
// })
// export const useTemp=defineStore('temp', () => {
//     const scale=ref(0)
//     const scaleAdj=() => {
//
//     }
//     return {
//         scale,
//         scaleAdj
//     }
// })
