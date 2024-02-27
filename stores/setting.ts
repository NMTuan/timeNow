/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-21 21:47:50
 * @LastEditTime: 2024-02-27 18:17:24
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \timeNow\stores\setting.ts
 */
import { defineStore } from 'pinia'

export const useSettingStore = defineStore('setting', () => {
    const hour24 = useCookie('hour24', {
        maxAge: 31536000,
        default: () => true
    }) // 24小时制
    const showSecond = useCookie('showSecond', {
        maxAge: 31536000,
        default: () => true
    }) // 显示秒数
    const flicker1 = useCookie('flicker1', {
        maxAge: 31536000,
        default: () => false
    }) // 闪烁冒号 时分
    const flicker2 = useCookie('flicker2', {
        maxAge: 31536000,
        default: () => false
    }) // 闪烁冒号 分秒
    const showMonthLine = useCookie('showMonthLine', {
        maxAge: 31536000,
        default: () => true
    })
    const showDayLine = useCookie('showDayLine', {
        maxAge: 31536000,
        default: () => true
    })
    const showTimeLine = useCookie('showTimeLine', {
        maxAge: 31536000,
        default: () => true
    })
    return {
        hour24,
        showSecond,
        flicker1,
        flicker2,
        showMonthLine,
        showDayLine,
        showTimeLine
    }
})
