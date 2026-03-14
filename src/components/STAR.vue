<template>
  <div class="Con">
    <div class="fPart">
      <div ref="selectorRef" class="constellation-selector">
        <!-- 下拉触发按钮 -->
        <div
                :class="{ active: isOpen }"
                class="selector-trigger"
                @click="isOpen = !isOpen"
        >
      <span class="selected-text">
        {{selectedConstellation||'请选择你的星座'}}
      </span>
          <svg class="arrow-icon" fill="none" height="8" viewBox="0 0 12 8" width="12">
            <path d="M1 1L6 7L11 1"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"/>
          </svg>
        </div>

        <!-- 下拉选项列表 -->
        <div
                v-show="isOpen"
                :class="{ show: isOpen }"
                class="selector-options"
        >
          <div
                  v-for="item in constellationList"
                  :key="item.value"
                  :class="{ active: selectedConstellation === item.label }"
                  class="option-item"
                  @click="selectConstellation(item)"
          >
            {{item.label}}
          </div>
        </div>
      </div>
      <div class="btn" @click="reGet">看看今日运势</div>
      <div class="tips">仅供娱乐</div>
    </div>
    <div v-show="showResult" class="sPart">
      <div class="title">{{target.name}}</div>
      <div class="resultList">
        <div class="resultText">幸运色：{{target.color}}</div>
        <div class="resultText">健康指数：{{target.health}}</div>
        <div class="resultText">爱情指数：{{target.love}}</div>
        <div class="resultText">财富指数：{{target.money}}</div>
        <div class="resultText">综合指数：{{target.all}}</div>
        <div class="resultText">总结：{{target.summary}}</div>
      </div>
    </div>
  </div>

</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue'
import {toolSign} from '@/stores/index.js'
import {getConstellation} from '@/api/api.js';
// 响应式变量：选中的星座、下拉框展开状态、下拉框容器引用
const selectedConstellation=ref('')
const isOpen=ref(false)
const selectorRef=ref(null)

const showResult=ref(false)
const SIGN=toolSign()
const target=ref({})
const reGet=() => {
    if (selectedConstellation.value=='') {
        alert('请选择星座')
    } else {
        getIN()
    }
}

async function getIN() {
    try {
        SIGN.setSign(true)
        let res=await getConstellation(selectedConstellation.value)
        target.value=res.data
        showResult.value=true
        // console.log(res)
    } catch (error) {
        console.log('err', error)
        alert('每日请求次数已达上限！');
    } finally {
        SIGN.setSign(false)
    }
}

// 星座列表数据
const constellationList=[
    {
        label: '白羊座',
        value: 'aries'
    }, {
        label: '金牛座',
        value: 'taurus'
    }, {
        label: '双子座',
        value: 'gemini'
    }, {
        label: '巨蟹座',
        value: 'cancer'
    }, {
        label: '狮子座',
        value: 'leo'
    }, {
        label: '处女座',
        value: 'virgo'
    }, {
        label: '天秤座',
        value: 'libra'
    }, {
        label: '天蝎座',
        value: 'scorpio'
    }, {
        label: '射手座',
        value: 'sagittarius'
    }, {
        label: '摩羯座',
        value: 'capricorn'
    }, {
        label: '水瓶座',
        value: 'aquarius'
    }, {
        label: '双鱼座',
        value: 'pisces'
    } ]

// 选择星座的方法
const selectConstellation=(item) => {
    selectedConstellation.value=item.label
    isOpen.value=false
    // 可在这里添加选择后的回调逻辑，比如发送请求、更新父组件数据等
    // console.log('选中的星座：', item)
}

// 点击外部区域关闭下拉框
const handleClickOutside=(e) => {
    if (selectorRef.value&& !selectorRef.value.contains(e.target)) {
        isOpen.value=false
    }
}

// 生命周期：挂载时添加点击事件监听
onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

// 生命周期：卸载时移除监听，防止内存泄漏
onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* 容器样式 - 响应式宽度 */
.constellation-selector {
    position: relative;
    width: 100%;
    max-width: 280px;
    /*margin: 0 auto;*/
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* 触发按钮样式 */
.selector-trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.selector-trigger:hover {
    border-color: #3b82f6;
    box-shadow: 0 2px 4px rgba(59, 130, 246, 0.1);
}

.selector-trigger.active {
    border-color: #3b82f6;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background-color: #f9fafb;
}

.selected-text {
    font-size: 14px;
    color: #111827;
}

.arrow-icon {
    color: #6b7280;
    transition: transform 0.2s ease;
}

.selector-trigger.active .arrow-icon {
    transform: rotate(180deg);
}

/* 下拉选项列表样式 */
.selector-options {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
    border-top: none;
    border-radius: 0 0 8px 8px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    z-index: 100;
}

.selector-options.show {
    max-height: 320px;
    overflow-y: auto;
}

/* 选项样式 */
.option-item {
    padding: 10px 16px;
    font-size: 14px;
    color: #111827;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.option-item:hover {
    background-color: #eff6ff;
}

.option-item.active {
    background-color: #3b82f6;
    color: #ffffff;
}

/* 响应式适配 - 移动端优化 */
@media (max-width: 768px) {
    .constellation-selector {
        max-width: 100%;
        margin: 0;
    }

    .selector-trigger {
        padding: 10px 14px;
    }

    .option-item {
        padding: 8px 14px;
    }
}

/* 滚动条美化 */
.selector-options::-webkit-scrollbar {
    width: 6px;
}

.selector-options::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 3px;
}

.selector-options::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
}

.selector-options::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
}

.btn {
    display: inline-block;
    padding: 9px 18px;
    background-color: oklch(90% 0.035 240);
    border: 1px solid oklch(82% 0.045 240);
    border-radius: 6px;
    color: oklch(20% 0.04 240);
    text-decoration: none;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-left: 20px;
}

.btn:hover {
    background-color: oklch(87% 0.045 240);
    box-shadow: 0 2px 6px oklch(85% 0.02 240 / 0.4);
}

.Con {
    width: 100%;
    min-height: 360px;
}

.fPart {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

.tips {
    color: oklch(40% 0.02 240);
    font-size: 14px;
    margin-left: 30px;
}

.sPart {
    margin-top: 20px;
    width: 100%;
}

.title {
    font-size: 32px;
    font-weight: 500;
    text-align: center;
}

.resultList {
    /*display: flex;*/
    /*flex-direction: column;*/
}

.resultText {
    margin-bottom: 8px;
    color: #1f1f1f;
    padding: 0 20px;
}
</style>