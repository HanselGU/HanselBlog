<template>
  <div class="articlePage">
    <div class="detailLayout">
      <div class="detailMain">
        <div v-if="currentArticle" class="articleHeader">
          <h1 class="articleH1">{{ currentArticle.name }}</h1>
          <div class="articleMeta">
            <span class="pill">{{ currentArticle.type }}</span>
          </div>
        </div>

        <div v-if="loading" class="mdShow">加载中...</div>
        <div
            v-else-if="htmlResult"
            ref="contentEl"
            class="mdShow"
            v-html="htmlResult"
        ></div>
        <div v-else class="mdShow">文章不存在或加载失败</div>
      </div>

      <aside v-if="tocHeadings.length" class="toc">
        <div class="tocTitle">目录</div>
        <div class="tocList">
          <a
              v-for="h in tocHeadings"
              :key="h.id"
              class="tocItem"
              :href="`#${h.id}`"
              :style="{ paddingLeft: `${(h.level - 2) * 12}px` }"
              @click.prevent="scrollToId(h.id)"
          >
            {{ h.text }}
          </a>
        </div>
      </aside>
    </div>

    <button v-show="showBackTop" class="backTop" @click="scrollToTop">返回顶部</button>
  </div>
</template>

<script setup>
import MarkdownIt from 'markdown-it'
import {computed, nextTick, onMounted, onUnmounted, ref, watch} from 'vue';
import {mdData} from '@/stores/mdData.js';
import {useRoute} from 'vue-router';

const route=useRoute()
const mdStore=mdData()
const loading=ref(false)
const markdownSource=ref('')
const contentEl=ref(null)
const showBackTop=ref(false)

const md=new MarkdownIt({
    html: true, // 启用HTML标签
    breaks: true, // 转换换行符为<br>
    linkify: true, // 自动转换URL为链接
    typographer: true, // 启用语言中性的替换
});

const articleId=computed(() => Number(route.params.id || 0))
const currentArticle=computed(() => mdStore.getArticleById(articleId.value))
const htmlResult=computed(() => (markdownSource.value ? md.render(markdownSource.value) : ''))

const slugify=(text) => {
    const base=text
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\u4e00-\u9fa5a-z0-9-]/g, '')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')

    return base || 'section'
}

const extractHeadings=(text) => {
    if (!text) return []
    const lines=text.split(/\r?\n/)
    let inFence=false
    const headings=[]
    const seen={}

    for (const line of lines) {
        const trimmed=line.trim()
        if (/^```/.test(trimmed)) {
            inFence=!inFence
            continue
        }
        if (inFence) continue

        const m=trimmed.match(/^(#{1,6})\s+(.+?)\s*$/)
        if (!m) continue

        const level=m[1].length
        const rawText=m[2]
        const baseId=slugify(rawText)
        const count=seen[baseId] ?? 0
        seen[baseId]=count+1
        const id=count===0 ? baseId : `${baseId}-${count+1}`

        headings.push({ level, text: rawText, id })
    }

    return headings
}

const headings=computed(() => extractHeadings(markdownSource.value))
const tocHeadings=computed(() => headings.value.filter((h) => h.level >= 2 && h.level <= 3))

const applyHeadingIds=() => {
    const el=contentEl.value
    if (!el) return
    const nodes=el.querySelectorAll('h1, h2, h3, h4, h5, h6')
    const list=headings.value

    nodes.forEach((node, idx) => {
        const h=list[idx]
        if (h) node.id=h.id
    })
}

const loadArticle=async () => {
    loading.value=true
    markdownSource.value=''
    markdownSource.value=await mdStore.loadMdById(articleId.value)
    loading.value=false
}

watch(articleId, loadArticle, { immediate: true })

watch(htmlResult, async () => {
    await nextTick()
    applyHeadingIds()
}, { immediate: true })

const scrollToId=(id) => {
    const target=document.getElementById(id)
    if (!target) return
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const scrollToTop=() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleScroll=() => {
    showBackTop.value=window.scrollY > 600
}

onMounted(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.articlePage{
    width: 100%;
    padding: 160px 0 80px;
}

.detailLayout{
    display: flex;
    flex-direction: row;
    gap: 24px;
    align-items: flex-start;
}

.detailMain{
    flex: 1;
    min-width: 0;
}

.articleHeader{
    margin-bottom: 18px;
}

.articleH1{
    font-size: 34px;
    font-weight: 900;
    color: var(--color-text);
    line-height: 1.2;
}

.articleMeta{
    margin-top: 10px;
}

.pill{
    display: inline-block;
    padding: 6px 12px;
    border-radius: 999px;
    background-color: rgba(0, 86, 179, 0.08);
    border: 1px solid rgba(0, 86, 179, 0.14);
    color: var(--color-primary);
    font-size: 13px;
    font-weight: 900;
    text-transform: uppercase;
}

.mdShow {
    padding: 24px;
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
}

.mdShow > h1:first-of-type{
    display: none;
}

.mdShow p {
    font-size: 18px;
    line-height: 1.9;
}

.mdShow img{
    border-radius: var(--radius-md);
    margin: 14px 0;
}

.mdShow h2{
    margin-top: 26px;
    font-size: 22px;
}

.mdShow h3{
    margin-top: 18px;
    font-size: 18px;
}

.toc{
    width: 260px;
    flex: 0 0 260px;
    position: sticky;
    top: 110px;
    max-height: calc(100vh - 140px);
    overflow: auto;
    padding: 16px;
    border-radius: var(--radius-lg);
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    box-shadow: var(--shadow-sm);
}

.tocTitle{
    font-size: 16px;
    font-weight: 900;
    margin-bottom: 12px;
    color: var(--color-text);
}

.tocList{
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.tocItem{
    display: block;
    color: var(--color-muted);
    font-size: 14px;
    font-weight: 800;
    line-height: 1.25;
    transition: color var(--transition-fast) ease;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.tocItem:hover{
    color: var(--color-primary);
}

.backTop{
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 1000;
    height: 46px;
    border-radius: 999px;
    padding: 0 16px;
    background-color: var(--color-primary);
    color: white;
    border: none;
    cursor: pointer;
    font-weight: 900;
    box-shadow: var(--shadow-sm);
    transition: transform var(--transition-fast) ease;
}

.backTop:hover{
    transform: translate3d(0, -2px, 0);
}

@media (max-width: 900px){
    .detailLayout{
        flex-direction: column;
    }
    .toc{
        display: none;
    }
}
</style>