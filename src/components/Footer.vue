<template xmlns="">
  <div class="Footer">
    <div class="FooterCon">
      {{saying}}
    </div>
  </div>
</template>

<script setup>
import {getSaying} from '@/api/api.js';
import {onMounted, ref} from 'vue';

let saying=ref('已经发生的事情与其每天叹息，还不如从容面对。')

async function getFooterSaying() {
    try {
        let res=await getSaying()
        if (!!res.text) {
            saying.value=res.text
        }
    } catch (error) {
        console.log('err', error)
    }
}

onMounted(() => {
    getFooterSaying()
})
</script>

<style scoped>
.Footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80px;
    line-height: 80px;
    text-align: center;
    background-color: #bddbf6;
    clip-path: polygon(0px 24px, 12px 24px, 12px 12px, 24px 12px, 24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 12px) calc(100% - 24px), calc(100% - 12px) calc(100% - 12px), calc(100% - 24px) calc(100% - 12px), calc(100% - 24px) 100%, 0% 100%);

}

.FooterCon {
    /* 基础容器样式（匹配你的蓝色背景） */
    background-color: #bde0fe; /* 柔和的浅蓝色，可根据你的实际背景色调整 */
    width: 100%; /* 容器宽度，根据实际场景调整 */
    height: 80px; /* 容器高度，根据实际场景调整 */

    /* 核心：文字居中（最关键的一步） */
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */

    /* 文字样式优化 */
    font-size: 20px; /* 合适的字体大小，避免过大/过小 */
    font-weight: 400;
    line-height: 80px; /* 行高，让文字行间距舒适 */
    text-align: center;
    color: #333333; /* 深灰色文字，比纯黑更柔和，且与浅蓝色背景对比度足够 */
    font-family: "Microsoft Yahei", "PingFang SC", sans-serif; /* 无衬线字体，更易读 */

    /* 内边距：避免文字贴容器边缘 */
    padding: 20px 40px;
    word-wrap: break-word; /* 自动换行 */
    overflow-wrap: break-word;
}


</style>