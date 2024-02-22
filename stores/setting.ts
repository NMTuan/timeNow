/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-21 21:47:50
 * @LastEditTime: 2024-02-21 21:56:15
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \timeNow\stores\setting.ts
 */
import { defineStore } from 'pinia'

export const useSettingStore = defineStore('setting', () => {
    const hour24 = ref(true) // 24小时制
    const showSecond = ref(true) // 显示秒数
    const flicker = ref(false) // 闪烁冒号
    const showMonthLine = ref(true)
    const showDayLine = ref(true)
    const showTimeLine = ref(true)
    return {
        hour24,
        showSecond,
        flicker,
        showMonthLine,
        showDayLine,
        showTimeLine
    }
})
