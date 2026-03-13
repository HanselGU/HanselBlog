<template>
  <div class="Con">
    <div class="leftPart">
      <div v-for="(item,index) in text" :id="index" class="inner">
        <div class="title">
          <div class="itemLi">{{item.index}}</div>
          <div class="itemTitle">{{item.title}}</div>
          <div class="itemHotValue">热度：{{item.hot_value}}</div>
        </div>
        <div class="itemCover"><img :src="item.extra.cover" alt="图片获取失败"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {getHotBoard} from '@/api/api.js';
import {onBeforeMount, ref} from 'vue';
import {toolSign} from '@/stores/index.js'

const SIGN=toolSign()
const text=ref([])

async function getIN() {
    try {
        SIGN.setSign(true)
        let res=await getHotBoard()
        text.value=res.list.slice(0, 10)
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
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

.inner {
    width: 100%;
    margin: 0 auto;
    padding: 0 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.title {
    display: flex;
    flex-direction: row;
    align-items: center;

}

.itemLi {
    font-size: 32px;
    font-weight: 600;
    width: 40px;
    margin-right: 20px;

}

.itemTitle {
    color: oklch(40% 0.02 240);
    font-size: 18px;
    width: 320px;
}

.itemHotValue {
    color: #D73A49;
}

.itemCover {
    margin-left: 20px;
}

.itemCover > img {
    width: 90px;
    height: 120px;
}
</style>