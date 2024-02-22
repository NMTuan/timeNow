<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-18 11:35:10
 * @LastEditTime: 2024-02-22 13:11:25
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \timeNow\app.vue
-->
<template>
    <div class="group w-full h-screen overflow-hidden flex flex-col items-center justify-between">
        <Header class="opacity-0 transition-all group-hover:opacity-100"></Header>
        <div class="bg-white/5 w-full flex flex-col items-center justify-center py-[4vw]">
            <div class="select-none">
                <ClockWeek></ClockWeek>
                <ClockBoard></ClockBoard>
                <ClockDate></ClockDate>
            </div>
        </div>
        <div class="w-full px-[4px] mt-[26px]">
            <div v-if="settingStore.showTimeLine" class="px-[4px]">
                <TimeLine></TimeLine>
            </div>
            <div class="my-[4px]">
                <DayLine v-if="settingStore.showDayLine"></DayLine>
                <MonthLine v-if="settingStore.showMonthLine"></MonthLine>
            </div>
        </div>
    </div>
</template>
<script setup>
const dateStore = useDateStore()
const settingStore = useSettingStore()
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

const title = computed(() => {
    let tit = ''
    tit += dateStore.hour12
    tit += ':' + dateStore.minute
    if (settingStore.showSecond) {
        tit += ':' + dateStore.second
    }
    tit += ' - 压感时钟'
    return tit
})

useHead({
    title: title
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
