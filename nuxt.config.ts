/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-18 11:35:10
 * @LastEditTime: 2024-02-22 12:17:25
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \timeNow\nuxt.config.ts
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    modules: ['@nuxt/ui', '@pinia/nuxt'],
    colorMode: {
        preference: 'dark'
    },
    app: {
        head: {
            link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
        }
    },
    ui: {
        icons: ['ri']
    },
    imports: {
        dirs: ['stores']
    }
})
