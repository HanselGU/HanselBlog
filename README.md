# HanselBlog

Vue3 个人博客实践（线上可访问：https://hanselroot.xyz/home ） 

技术栈：Vue3 + Vue Router + Pinia + Axios + Element Plus + Vite + Vercel部署，部分使用TypeScript 

核心实现： 

1. 基于Vue Router实现多页面路由跳转，配置首页等路由规则；
2. 使用Axios封装接口请求，处理加载状态/异常提示，拉取第三方测试接口数据并渲染； 
3. 通过Pinia管理全局数据，实现数据的新增/状态切换； 
4. 使用Element Plus渲染一个子页面； 
5. 基于Vite构建项目，部署至Vercel实现线上访问，保证项目可正常运行。

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

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
