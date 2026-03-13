<template>
  <div class="BasicHome">
    <div class="Hero">
      <div class="backImg">
        <div class="HeroInner">
          <div class="HeroContent">
            <div class="con1">
              <div class="HeroImg">
                <img alt="" class="round-image" src="../assets/img/home1.avif">
              </div>
              <div class="homeText">HANSELROOT</div>
            </div>
            <div class="con2">上善若水，水善利万物而不争，处众人之所恶，故几于道</div>
            <div class="con3">WeChat:XXXXXX</div>
          </div>
        </div>
      </div>
    </div>
    <div class="photoSpace">
      <div class="photoContainer">
        <div :style="`transform: translate3d(0px, 0px, 0px) scale(${imgScale}, ${imgScale});`"
             class="photoConInner">
          <div :style="`transform: translate(0%, ${imgOffset}%) translate3d(0px, 0px, 0px);`" class="photoCol1">
            <div v-for="(item,index) in photoArray2" :key="index" class="photoImg">
              <img :src="item.path" alt="" class="photoSpaceImg">
            </div>
          </div>
          <div :style="`transform: translate(0%, ${imgOffset*2}%) translate3d(0px, 0px, 0px);`" class="photoCol2">
            <div v-for="(item,index) in photoArray1" :key="index" class="photoImg">
              <img :src="item.path" alt="" class="photoSpaceImg">
            </div>
          </div>
          <div :style="`transform: translate(0%, ${imgOffset}%) translate3d(0px, 0px, 0px);`" class="photoCol3">
            <div v-for="(item,index) in photoArray3" :key="index" class="photoImg">
              <img :src="item.path" alt="" class="photoSpaceImg">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted, watch} from 'vue'
import IMG8503 from '../assets/img/IMG_8503.JPG'
import th from '../assets/img/th.jfif'
import th1 from '../assets/img/th1.jfif'
import th2 from '../assets/img/th2.jfif'
import th3 from '../assets/img/th3.jfif'
import th4 from '../assets/img/th4.jfif'
import th5 from '../assets/img/th5.jfif'
import th6 from '../assets/img/th6.jfif'
import th7 from '../assets/img/th7.jfif'


const photoArray1=[
    {
        path: th1,
        name: 'th1'
    }, {
        path: IMG8503,
        name: '8503'
    }, {
        path: th4,
        name: 'th4'
    } ]
const photoArray2=[
    {
        path: th2,
        name: 'th2'
    }, {
        path: th3,
        name: 'th3'
    }, {
        path: th,
        name: 'th'
    } ]
const photoArray3=[
    {
        path: th5,
        name: 'th5'
    }, {
        path: th6,
        name: 'th6'
    }, {
        path: th7,
        name: 'th7'
    } ]

const imgOffset=ref(-8)
const imgScale=ref(1.1235)
const scrollTop=ref(0) // 记录当前滚动距离


// 2. 滚动事件处理函数
const handleScroll=() => {
    // 获取当前滚动距离（兼容不同浏览器）
    scrollTop.value=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop

    // 计算最大可滚动距离（页面总高度 - 视口高度）
    const maxScroll=document.documentElement.scrollHeight-window.innerHeight
    // const maxScroll = 1000 固定滚动距离
    // 计算滚动比例（0~1，避免超出范围）
    const scrollRatio=Math.max(0, Math.min(1, scrollTop.value/maxScroll))

    // 3. 根据比例映射到目标区间
    // A：从-8到8，差值为16
    imgOffset.value=-8+scrollRatio*(8-(-8))
    // B：从1.3到1.05，差值为-0.25
    imgScale.value=1.3+scrollRatio*(1.05-1.3)
}

// 3. 挂载时添加滚动监听，卸载时移除（避免内存泄漏）
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

</script>

<style scoped>
.BasicHome {

}

.Hero {
    width: 100%;
    height: 70vh;
    opacity: 1;
    background: linear-gradient(to bottom, #accbee 0, #e7f0fd 100%);
    /*padding: 80px 0 0 0;*/
    position: relative;
    overflow: hidden;
}

.backImg {
    background-image: url("@/assets/img/hero_bg.png");
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

.HeroInner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px;
}

.HeroContent {
    width: calc(60% + 160px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.con1 {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

.HeroImg {
    width: 160px;
    height: 160px;
}

.round-image {
    width: 100%; /* 设置图片宽度 */
    height: 100%; /* 设置图片高度 */
    border-radius: 50%; /* 设置圆角半径为50%，产生圆形效果 */
    overflow: hidden; /* 隐藏超出圆形边界的部分 */
    animation: spin 6s linear infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.homeText {
    font-family: "Doto", sans-serif;
    font-size: 60px;
    color: #1f1f1f;
    letter-spacing: -0.06em;
    font-weight: 800;
    text-transform: uppercase;
    margin-left: 20px;
}

.con2 {
    font-size: 24px;
    color: #1f1f1f;
    letter-spacing: -0.06em;
    font-weight: 400;
    text-transform: uppercase;
    margin-top: 10px;
}

.con3 {
    margin-top: 10px;
    font-size: 16px;
}

.photoSpace {
    padding: 60px 60px;
    position: relative;
    margin-top: 80px;
    margin-bottom: 200px;
}

.photoContainer {
    width: 100%;
    height: auto;
    aspect-ratio: 1424 / 762;
    background-color: #1f1f1f;
    overflow: hidden;
    box-sizing: border-box;
    border: solid 8px #1f1f1f;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.photoConInner {
    translate: none;
    rotate: none;
    scale: none;
    /*transform: translate3d(0px, 0px, 0px) scale(1.2028, 1.2028);*/
    width: 100%;
    height: auto;
    gap: 8px;
    display: flex;
    flex-direction: row;
}

.photoCol1 {
    translate: none;
    rotate: none;
    scale: none;
    /*transform: translate(0%, 3.7749%) translate3d(0px, 0px, 0px);*/
    width: calc((100% - 16px) / 3);
    gap: 8px;
    display: flex;
    flex-direction: column;
}

.photoCol2 {
    translate: none;
    rotate: none;
    scale: none;
    /*transform: translate(0%, 3.7749%) translate3d(0px, 0px, 0px);*/
    width: calc((100% - 16px) / 3);
    gap: 8px;
    display: flex;
    flex-direction: column;
}

.photoCol3 {
    translate: none;
    rotate: none;
    scale: none;
    /*transform: translate(0%, 3.7749%) translate3d(0px, 0px, 0px);*/
    width: calc((100% - 16px) / 3);
    gap: 8px;
    display: flex;
    flex-direction: column;
}

.photoImg {
    clip-path: polygon(0px 24px, 12px 24px, 12px 12px, 24px 12px, 24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 12px) calc(100% - 24px), calc(100% - 12px) calc(100% - 12px), calc(100% - 24px) calc(100% - 12px), calc(100% - 24px) 100%, 0% 100%);
}

.photoSpaceImg {
    display: block;
    position: relative;
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
    height: auto;
    object-fit: cover;
}
</style>