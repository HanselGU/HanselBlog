import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(), vueDevTools(), // AutoImport({
        //     resolvers: [ ElementPlusResolver() ],
        // }), Components({
        //     resolvers: [ ElementPlusResolver() ],
        // }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    server: {
        port: 3000,
        open: true,
        proxy: {
            // '/api': {
            //     target: 'https://tu.ltyuanfang.cn',
            //     changeOrigin: true,
            //     rewrite: (path) => path.replace('/api', '')
            // },
            '/Uapi': {
                target: 'https://uapis.cn',
                changeOrigin: true,
                rewrite: (path) => path.replace('/Uapi', '')
            },
            '/juhe': {
                target: 'http://web.juhe.cn:8080',
                changeOrigin: true,
                rewrite: (path) => path.replace('/juhe', '')
            }
        }
    },
    compress: {
        drop_console: true,
        drop_debugger: true
    }
})
