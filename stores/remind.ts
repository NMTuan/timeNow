/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-29 15:09:25
 * @LastEditTime: 2024-03-31 11:34:53
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
        if (clone.id) {
            remove(clone.id)
        }
        const second =
            Number(clone.time.split(':')[0]) * 60 * 60 +
            Number(clone.time.split(':')[1]) * 60
        list.value.push({
            ...clone,
            id: (Date.now() + Math.random()).toString(36),
            style: {
                backgroundColor: clone.color,
                left: `${second / (24 * 36)}%`
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
