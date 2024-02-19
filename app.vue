<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-18 11:35:10
 * @LastEditTime: 2024-02-19 22:17:10
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: /timeNow/app.vue
-->
<template>
    <div
        class="w-full h-screen overflow-hidden flex flex-col items-center justify-between"
    >
        <div></div>
        <!-- <ClientOnly> -->
        <div
            class="bg-white/5 w-full flex flex-col items-center justify-center py-[4vw]"
        >
            <div>
                <ClockWeek></ClockWeek>
                <ClockBoard></ClockBoard>
                <ClockDate></ClockDate>
            </div>
        </div>
        <!-- </ClientOnly> -->
        <TimeLine></TimeLine>
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
