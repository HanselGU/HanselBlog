<template>
  <div class="Note">
    <div class="NoteCon">
      <div class="noteTop">
        <div class="pageTitle">文章列表</div>

        <div class="toolbar">
          <div class="searchBox">
            <input v-model="keyword" class="searchInput" placeholder="搜索文章（标题关键词）" />
          </div>

          <div class="typeTabs">
            <button
                v-for="opt in typeOptions"
                :key="opt.value"
                class="typeTab"
                :class="{ active: activeType===opt.value }"
                @click="activeType=opt.value"
            >
              {{ opt.label }}
            </button>
          </div>
        </div>
      </div>

      <div class="noteGrid">
        <div
            v-for="item in filteredArticles"
            :key="item.id"
            class="articleCard u-card u-card-hover"
            @click="routePush(item.id)"
        >
          <div class="articleTitle">{{ item.name }}</div>
          <div class="articleFooter">
            <span class="typePill">{{ item.type }}</span>
            <span class="readMore">阅读 →</span>
          </div>
        </div>
      </div>

      <div v-if="filteredArticles.length===0" class="empty">没有匹配的文章</div>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue'
import {storeToRefs} from 'pinia'
import router from '@/router/index.js';
import {mdList} from '@/stores/mdData.js';

const md=mdList()
const {lifeList, codeList}=storeToRefs(md)

const keyword=ref('')
const activeType=ref('all')

const typeOptions=[
    { label: '全部', value: 'all' },
    { label: 'Code', value: 'code' },
    { label: 'Device', value: 'device' },
    { label: 'Life', value: 'life' }
]

const allArticles=computed(() => {
    return [...codeList.value, ...lifeList.value].sort((a, b) => a.id - b.id)
})

const filteredArticles=computed(() => {
    const kw=keyword.value.trim().toLowerCase()
    return allArticles.value.filter((item) => {
        const passType=activeType.value==='all' || item.type===activeType.value
        const passKeyword=!kw || item.name.toLowerCase().includes(kw)
        return passType && passKeyword
    })
})

const routePush=(id) => {
    router.push({
        name: 'NoteDetail',
        params: { id }
    })
}
</script>

<style scoped>
.Note {
    width: 100%;
    height: 100%;
    padding: 160px 0 80px;
}

.NoteCon {
    min-height: 720px;
    width: min(920px, calc(100% - 32px));
    margin: 0 auto;
    border-radius: var(--radius-lg);
    border: 2px rgba(31, 31, 31, 0.7) dotted;
    background-color: var(--color-surface);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 24px;
}

.noteTop{
    margin-bottom: 18px;
}

.pageTitle{
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 16px;
    text-align: center;
    color: var(--color-text);
}

.toolbar{
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.searchBox{
    width: 100%;
}

.searchInput{
    width: 100%;
    height: 44px;
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border);
    background-color: rgba(255, 255, 255, 0.8);
    padding: 0 14px;
    font-size: 16px;
    outline: none;
}

.typeTabs{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
}

.typeTab{
    height: 38px;
    padding: 0 14px;
    border-radius: 999px;
    border: 1px solid rgba(0, 86, 179, 0.18);
    background: rgba(0, 86, 179, 0.06);
    cursor: pointer;
    color: var(--color-primary);
    font-size: 14px;
    font-weight: 800;
    transition: transform var(--transition-fast) ease, background-color var(--transition-fast) ease;
}

.typeTab.active{
    background-color: var(--color-primary);
    color: white;
    border-color: var(--color-primary);
}

.typeTab:hover{
    transform: translate3d(0, -1px, 0);
}

.noteGrid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-top: 10px;
}

.articleCard{
    padding: 18px;
    cursor: pointer;
}

.articleTitle{
    font-size: 16px;
    font-weight: 900;
    line-height: 1.35;
    color: var(--color-text);
    min-height: 44px;
}

.articleFooter{
    margin-top: 14px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.typePill{
    font-size: 12px;
    font-weight: 900;
    padding: 6px 10px;
    border-radius: 999px;
    background-color: rgba(0, 86, 179, 0.08);
    border: 1px solid rgba(0, 86, 179, 0.14);
    color: var(--color-primary);
    text-transform: uppercase;
}

.readMore{
    color: var(--color-muted);
    font-size: 14px;
    font-weight: 800;
}

.empty{
    margin-top: 22px;
    text-align: center;
    color: var(--color-muted);
    font-weight: 700;
}

@media (max-width: 900px) {
    .noteGrid{
        grid-template-columns: 1fr;
    }
}
</style>