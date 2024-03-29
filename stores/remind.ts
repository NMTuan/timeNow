/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-29 15:09:25
 * @LastEditTime: 2024-03-29 16:56:31
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \timeNow\stores\remind.ts
 */
import { defineStore } from 'pinia'
import { cookieMaxAge } from './setting'

interface Data {
    time: string
    color: string
    content: string
    id?: string
    style?: object
}

export const useRemindStore = defineStore('remind', () => {
    const list: Ref<Data[]> = useCookie('remindList', {
        maxAge: cookieMaxAge,
        default: () => []
    })
    const add = (data: Data) => {
        const clone: Data = JSON.parse(JSON.stringify(data))
        const second =
            (clone.time.split(':')[0] * 60 + clone.time.split(':')[1]) * 60
        list.value.push({
            ...clone,
            id: (Date.now() + Math.random()).toString(36),
            style: {
                backgroundColor: clone.color,
                left: (second / (24 * 3600)) + '%'
            }
        })
    }
    const remove = (id: string) => {
        list.value = list.value.filter((item) => item.id !== id)
    }
    return {
        list,
        add,
        remove
    }
})
