/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-18 11:35:10
 * @LastEditTime: 2024-02-22 15:23:37
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \timeNow\nuxt.config.ts
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    modules: ['@nuxt/ui', '@pinia/nuxt', 'nuxt-clarity-analytics'],
    colorMode: {
        preference: 'dark'
    },
    app: {
        head: {
            title: '压感时钟',
            link: [
                { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-touch-icon.png' },
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
                { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
                { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
                { rel: "manifest", href: "/site.webmanifest" }
            ],
            meta: [
                {
                    name: 'description',
                    content:
                        '一个自带压力感可全屏显示的时钟，实时显示当前时间、当前月进度及年进度。一个自带压力感可全屏显示的时钟，实时显示当前时间、当前月进度及年进度。一个自带压力感可全屏显示的时钟，实时显示当前时间、当前月进度及年进度。'
                },
                { name: 'msapplication-TileColor', content: '#008987' },
                { name: 'theme-color', content: '#ffffff' },
                // { name: "apple-mobile-web-app-capable", content: "yes" },
            ]
        }
    },
    ui: {
        icons: ['ri']
    },
    imports: {
        dirs: ['stores']
    }
})
