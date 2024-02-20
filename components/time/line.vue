<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-18 22:03:42
 * @LastEditTime: 2024-02-20 16:06:18
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \timeNow\components\time\line.vue
-->
<template>
    <div class="flex items-end justify-between w-full relative select-none">
        <template v-for="hour in 25">
            <div class="flex flex-col items-center relative">
                <div class="font-digital-dismay text-zinc-700 bg-black absolute -top-6 z-10">
                    {{ hour - 1 }}
                </div>
                <div class="w-[1px] h-[32px] bg-zinc-800"></div>
            </div>
            <template v-if="hour !== 25" v-for="m in 3">
                <div class="w-[1px] h-[18px] bg-zinc-800"></div>
            </template>
        </template>
        <div class="absolute bottom-0 w-[1px] h-[52px] bg-red-900 z-1" :style="progressStyle"></div>
    </div>
</template>
<script setup>
const dateStore = useDateStore()

const progressStyle = computed(() => {
    const second =
        dateStore.hour * 3600 + dateStore.minute * 60 + dateStore.second
    const oneDaySecond = 24 * 3600
    // round会导致时间线的秒针位置不准确
    // const left = Math.round(second / oneDaySecond).toFixed(2)
    const left = second / oneDaySecond
    return {
        left: left + '%'
    }
})
</script>
