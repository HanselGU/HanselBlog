<template>
  <div class="articleCon">
    <div :id="historyP.id" class="mdShow" v-html="result"></div>
  </div>
</template>

<script setup>

import MarkdownIt from 'markdown-it'
import {computed, nextTick, onBeforeMount, onMounted} from 'vue';
import {mdData} from '@/stores/index.js';
import {useRoute} from 'vue-router';

// const route=useRoute()
const historyP=history.state.params
const MD=mdData()
// console.log('MD', MD.mdArray[0].inner)

const md=new MarkdownIt({
    html: true, // 启用HTML标签
    breaks: true, // 转换换行符为<br>
    linkify: true, // 自动转换URL为链接
    typographer: true, // 启用语言中性的替换
});
let result
// let result=md.render(MD.mdArray[2].inner)
onBeforeMount(() => {
    let src=MD.mdArray[historyP.id-1].inner
    result=md.render(src)
    nextTick()
})
onMounted(() => {

})
</script>

<style scoped>
.articleCon {
    width: 70%;
    height: 100%;
    padding: 160px 0;
    margin: 0 15%;
}

.mdShow {
    padding: 20px;
    background-color: white
}

p {
    font-size: 20px;
}
</style>