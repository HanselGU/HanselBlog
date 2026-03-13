<template>
  <div class="Con">
    <div class="leftPart">
      <div class="btn" @click="reGet">
        重试
      </div>
    </div>
    <div class="rightPart">
      {{text}}
    </div>
  </div>
</template>

<script setup>
import {getKFC} from '@/api/api.js';
import {onBeforeMount, ref} from 'vue';
import {toolSign} from '@/stores/index.js'

const SIGN=toolSign()
const text=ref('')
const reGet=() => {
    getIN()
}

async function getIN() {
    try {
        SIGN.setSign(true)
        let res=await getKFC()
        text.value=res
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
    align-items: flex-start;
}

.leftPart {
    font-size: 20px;
    margin-bottom: 20px;
}

.rightPart {
    width: 100%;
    /*padding: 20px;*/
}

.btn {
    padding: 6px 24px;
    background-color: oklch(90% 0.035 240);
    border: 1px solid oklch(82% 0.045 240);
    border-radius: 6px;
    color: oklch(20% 0.04 240);
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.btn:hover {
    background-color: oklch(87% 0.045 240);
    box-shadow: 0 2px 6px oklch(85% 0.02 240 / 0.4);
}
</style>