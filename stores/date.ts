/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-19 22:13:33
 * @LastEditTime: 2024-02-22 13:17:11
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \timeNow\stores\date.ts
 */
import { defineStore } from 'pinia'

export const useDateStore = defineStore('date', () => {
    const settingStore = useSettingStore()

    const year = ref('1970')
    const month = ref('01')
    const date = ref('01')
    const hour = ref('00')
    const hour12 = ref('00')
    const minute = ref('00')
    const second = ref('00')
    const millisecond = ref(0)
    const day = ref(1)

    const getNow = () => {
        const today = new Date()
        year.value = today.getFullYear().toString()
        month.value = (today.getMonth() + 1).toString().padStart(2, '0')
        date.value = today.getDate().toString().padStart(2, '0')

        hour.value = today.getHours().toString().padStart(2, '0')
        let h = today.getHours()
        if (!settingStore.hour24 && h > 12) {
            h = h % 12
        }
        hour12.value = h.toString().padStart(2, '0')
        minute.value = today.getMinutes().toString().padStart(2, '0')
        second.value = today.getSeconds().toString().padStart(2, '0')
        millisecond.value = today.getMilliseconds()
        day.value = today.getDay()
    }

    return {
        year,
        month,
        date,
        hour,
        hour12,
        minute,
        second,
        millisecond,
        day,
        getNow
    }
})
