<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-18 11:35:10
 * @LastEditTime: 2024-02-20 15:25:07
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \timeNow\app.vue
-->
<template>
    <div class="w-full h-screen overflow-hidden flex flex-col items-center justify-between">
        <div></div>
        <div class="bg-white/5 w-full flex flex-col items-center justify-center py-[4vw]">
            <div class="select-none">
                <ClockWeek></ClockWeek>
                <ClockBoard></ClockBoard>
                <ClockDate></ClockDate>
            </div>
        </div>
        <div class="w-full  px-[2px]">
            <TimeLine></TimeLine>
            <div class="my-[4px]">
                <DayLine></DayLine>
                <MonthLine></MonthLine>
            </div>
        </div>
    </div>
</template>
<script setup>
const dateStore = useDateStore()
let dt

onMounted(() => {
    dateStore.getNow()
    dt = setInterval(() => {
        dateStore.getNow()
    }, 97)
})
onBeforeUnmount(() => {
    clearInterval(dt)
})
</script>
<style lang="scss">
html,
body,
#__nuxt {
    background-color: #000;
}

@font-face {
    font-family: 'DigitalDismay';
    src: url('/fonts/DigitalDismay.otf') format('opentype');
}

.font {
    &-digital-dismay {
        font-family: 'DigitalDismay';
    }
}
</style>
