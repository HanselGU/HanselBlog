<template>
  <div class="Con">
    <div class="leftPart">
      <div>{{text}}</div>
    </div>
    <div class="rightPart">
      <img :src="url" alt="">
    </div>
  </div>
</template>

<script setup>
import {getBingPhoto} from '@/api/api.js';
import {onBeforeMount, ref} from 'vue';
import {toolSign} from '@/stores/index.js'

const SIGN=toolSign()
const text=ref('')
const url=ref('')

async function getIN() {
    try {
        SIGN.setSign(true)
        let res=await getBingPhoto()
        text.value=res.copyright
        url.value=res.url
        // console.log(res)
    } catch (error) {
        console.log('err', error)
        alert('请求失败');
    } finally {
        SIGN.setSign(false)
    }
}

onBeforeMount(() => {
    getIN()
})
</script>

<style scoped>
.Con {
    width: 100%;
    padding: 20px 0;
    /* 文字排版优化 */
    line-height: 1.7;
    color: oklch(25% 0.025 240); /* 深一点的同色系文字，保证可读性 */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.leftPart {
    font-size: 20px;
    margin-bottom: 20px;
}

.rightPart {
    width: 100%;
    /*padding: 20px;*/
}

.rightPart > img {
    width: 100%;
}
</style>