# HanselBlog

Vue 3 个人博客 （线上可访问：https://hanselroot.xyz/home ）

1. **Markdown 本地内容系统（可维护、可扩展）**
    - 文章正文以 `src/docs/*.md` 形式维护；
    - 详情页基于 `markdown-it` 动态渲染，并通过 `v-html` 展示。
2. **阅读体验改造**
    - 文章列表卡片化 + 标题关键词搜索 + 类型筛选；
    - 文章详情页增加标题区、`h2/h3` 目录（可点击锚点跳转）、返回顶部按钮；
    - 统一的设计 Token（颜色、圆角、阴影、动效）提升整体观感。
3. **工程化与部署**
    - 使用 Vue Router / Pinia / Axios / Element Plus；
    - Vite 打包并部署到 Vercel。

> 注：当前渲染本地 Markdown 内容，若后续接入外部/用户内容，可在渲染前加入 `DOMPurify` 等方案做安全净化。

## 技术栈

- Vue 3
- Vue Router
- Pinia
- Axios
- Element Plus
- markdown-it
- Vite
- Vercel 部署

## 关键实现

- **路由与页面组织**：首页、文章列表页、文章详情页（`/article/:id`）以及工具页。
- **内容加载方式**：Pinia 维护文章元数据（`id/name/type/file`），详情页按需加载对应 `.md` 并渲染。
- **UI/UX 细节**：
    - 列表页：搜索输入与类型标签筛选；
    - 详情页：目录锚点、图片圆角、代码块/段落排版优化；
    - 视觉一致性：Header/Footer/MainLayout 使用统一 Token。

- 首页首屏：Hero + 技术标签 + CTA
- 文章列表：卡片化 + 搜索/筛选
- 文章详情：目录（可点击）+ 返回顶部

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/)

+ [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
    - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
    - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
    - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
    - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
