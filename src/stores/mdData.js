import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const mdData=defineStore('mdData', () => {
    const articles=ref([
        { id: 1, name: '成都游玩体验', type: 'life', file: '成都游玩体验.md' },
        { id: 2, name: '个人工作站搭建', type: 'device', file: '个人工作站搭建.md' },
        { id: 3, name: '使用vitepress和markdownIT的体验', type: 'code', file: '使用vitepress和markdownIT的体验.md' },
        { id: 4, name: 'Promise和asyncawait的实践区别', type: 'code', file: 'Promise和asyncawait的实践区别.md' },
        { id: 5, name: 'TypeScript学习：接口和类的区别', type: 'code', file: 'TypeScript学习：接口和类的区别.md' },
        { id: 6, name: '使用vercel搭建个人网站的经验', type: 'code', file: '使用vercel搭建个人网站的经验.md' },
        { id: 7, name: 'TypeScript学习：type和interface的区别', type: 'code', file: 'TypeScript学习：type和interface的区别.md' },
        { id: 8, name: 'TypeScript学习：初体验', type: 'code', file: 'TypeScript学习：初体验.md' }
    ])

    const mdModules=import.meta.glob('/src/docs/*.md', {
        query: '?raw',
        import: 'default'
    })

    const getArticleById=(id) => articles.value.find((item) => item.id===id)

    const loadMdById=async (id) => {
        const article=getArticleById(id)
        if (!article) return ''
        const importer=mdModules[`/src/docs/${article.file}`]
        if (!importer) return ''
        return importer()
    }

    return { articles, getArticleById, loadMdById }
})

const mdList=defineStore('mdList', () => {
    const dataStore=mdData()
    const lifeList=computed(() => dataStore.articles.filter((item) => item.type==='life'))
    const codeList=computed(() => dataStore.articles.filter((item) => item.type==='code' || item.type==='device'))

    return { lifeList, codeList }
})

export { mdData, mdList }