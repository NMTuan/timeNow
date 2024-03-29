/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-21 21:47:50
 * @LastEditTime: 2024-03-29 13:53:35
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \timeNow\stores\setting.ts
 */
import { defineStore } from 'pinia'

export const cookieMaxAge: number = 31536000

export const useSettingStore = defineStore('setting', () => {
    const hour24 = useCookie('hour24', {
        maxAge: cookieMaxAge,
        default: () => true
    }) // 24小时制
    const showSecond = useCookie('showSecond', {
        maxAge: cookieMaxAge,
        default: () => true
    }) // 显示秒数
    const flicker1 = useCookie('flicker1', {
        maxAge: cookieMaxAge,
        default: () => false
    }) // 闪烁冒号 时分
    const flicker2 = useCookie('flicker2', {
        maxAge: cookieMaxAge,
        default: () => false
    }) // 闪烁冒号 分秒
    const showMonthLine = useCookie('showMonthLine', {
        maxAge: cookieMaxAge,
        default: () => true
    })
    const showDayLine = useCookie('showDayLine', {
        maxAge: cookieMaxAge,
        default: () => true
    })
    const showTimeLine = useCookie('showTimeLine', {
        maxAge: cookieMaxAge,
        default: () => true
    })

    const motto = useCookie('motto', {
        maxAge: cookieMaxAge,
        default: () => ''
    })
    const textShadowOpacity = useCookie('textShadowOpacity', {
        maxAge: cookieMaxAge,
        default: () => 0
    })
    const textShadowColor = useCookie('textShadowColor', {
        maxAge: cookieMaxAge,
        default: () => '#ffffff'
    })
    // const textOpacity = useCookie('textOpacity', {
    //     maxAge: cookieMaxAge,
    //     default: () => 0
    // })

    const textColor = useCookie('textColor', {
        maxAge: cookieMaxAge,
        default: () => '#ffffff'
    })
    return {
        hour24,
        showSecond,
        flicker1,
        flicker2,
        showMonthLine,
        showDayLine,
        showTimeLine,
        motto,
        textShadowOpacity,
        textShadowColor,
        // textOpacity,
        textColor
    }
})
