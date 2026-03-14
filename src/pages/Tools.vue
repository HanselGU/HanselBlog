<template>
  <div class="Tools">
    <div class="toolCon">
      <div class="toolHeader">
        <div class="listShow" @click="showList">
          <div v-show="!listShow" class="listShowTag">
            <CaretRight/>
          </div>
          <div v-show="listShow" class="listShowTag">
            <CaretBottom/>
          </div>
          <div class="listText">工具列表</div>
        </div>
        <div class="toolList">
          <div v-for="(item,index) in tools" v-show="listShow" :id="item.name" class="toolListBox"
               @click="chooseTool(item.name)">
            <div class="toolText">{{item.text}}</div>
            <div class="toolSub">{{item.inner}}</div>
          </div>
          <!--          样式占位-->
          <div class="toolListBox2"></div>
        </div>
      </div>
      <div v-show="toolShow" class="toolInner">
        <div v-show="SIGN.sign" class="toolLoading">
          <toolLoading></toolLoading>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import toolLoading from '@/components/toolLoading.vue';
import {toolSign} from '@/stores/index.js';

const SIGN=toolSign()
const router=useRouter()
const listShow=ref(false)
const showList=() => {listShow.value= !listShow.value}
const tools=ref([
    {
        path: 'bing',
        name: 'BING',
        text: '必应一图',
        inner: '获取必应今日壁纸'
        // inner: '随机获取一周内必应图片'
    }, {
        path: 'ip',
        name: 'IP',
        text: 'IP与天气',
        inner: '获取当前IP天气信息'
    }, {
        path: 'kfc',
        name: 'KFC',
        text: '疯狂星期四',
        inner: '获取随机疯狂星期四文案'
    }, {
        path: 'HotBoard',
        name: 'HotBoard',
        text: '查询抖音热榜',
        inner: '获取抖音平台实时热榜列表'
    }, {
        path: 'star',
        name: 'STAR',
        text: '今日星座',
        inner: '获取选择星座今日运势'
    }, ])

const toolShow=ref(false)
const chooseTool=(name) => {
    router.push({ name: name })
    toolShow.value=true
    listShow.value=false
}
</script>

<style scoped>
.Tools {
    width: 100%;
    height: 100%;
    padding: 160px 0;
}

.toolCon {
    width: 800px;
    margin: 0 auto;


}

.toolHeader {
    background-color: oklch(95% 0.025 240); /* 比内容区稍暗，区分控制栏 */
    border: 1px solid oklch(88% 0.03 240);
    width: 100%;
    border-radius: 20px;
    margin-bottom: 40px;
    box-shadow: 0 3px 10px oklch(90% 0.01 240 / 0.3);
    padding: 10px 20px;
}

.listShow {
    display: flex;
    width: 120px;
    flex-direction: row;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.2s ease;
    align-items: center;
    gap: 6px; /* 图标与文字间距 */
    margin: 10px 0;
}

.listShowTag {
    width: 20px;
    height: 20px;
}

.toolList {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    width: 100%;
    flex-wrap: wrap;
}

.toolListBox {
    flex: 1 0 23%;
    margin-right: 10%;
    margin-bottom: 5px;
    cursor: pointer;
}

.toolListBox2 {
    flex: 1 0 33%;
    margin-bottom: 5px;
}

.toolText {
    color: oklch(20% 0.04 240);
    font-size: 20px;
    font-weight: 600;
}

.toolSub {
    margin-top: 3px;
    color: oklch(40% 0.02 240);
    font-size: 14px;
}

.toolInner {
    background-color: oklch(97% 0.02 240);
    border-radius: 20px;
    /* 边框：同色相，稍低亮度+稍高色度，清晰但不突兀 */
    border: 1px solid oklch(88% 0.03 240);
    /* 轻量阴影：增强层级，阴影色与整体色调统一 */
    box-shadow: 0 3px 10px oklch(90% 0.01 240 / 0.3);
    /* 内边距：充足的留白，避免内容拥挤 */
    padding: 28px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
}

.toolLoading {

}

</style>