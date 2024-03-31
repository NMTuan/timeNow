<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-18 11:35:10
 * @LastEditTime: 2024-03-31 15:28:58
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \timeNow\app.vue
-->
<template>
    <div class="group w-full h-screen overflow-hidden flex flex-col items-center justify-between">
        <Header> </Header>
        <div class="bg-white/5 w-full flex flex-col items-center justify-center py-[4vw]">
            <div class="select-none">
                <ClockWeek></ClockWeek>
                <ClockBoard></ClockBoard>
                <ClockDate></ClockDate>
            </div>
        </div>
        <div class="w-full px-[4px] mt-[26px] flex-shrink-0">
            <div v-if="settingStore.showTimeLine" class="px-[4px]">
                <TimeLine></TimeLine>
            </div>
            <div class="my-[4px]">
                <DayLine v-if="settingStore.showDayLine"></DayLine>
                <MonthLine v-if="settingStore.showMonthLine"></MonthLine>
            </div>
        </div>
        <UModal v-model="modalState">
            <ComCard label="remind" :close="close">
                <pre class="text-sm leading-6">{{ currentRemind.content }}</pre>
                <template #header>
                    <UIcon name="i-ri-circle-fill" class="mr-2" :style="{ color: currentRemind.color }" />
                    {{ currentRemind.time }}
                </template>
                <template #footer>
                    <div class="flex items-center justify-end">
                        <UButton @click="close">知道了！</UButton>
                    </div>
                </template>
            </ComCard>
        </UModal>
    </div>
</template>
<script setup>
const dateStore = useDateStore()
const settingStore = useSettingStore()
const remindStore = useRemindStore()

const modalState = ref(false)
const currentRemind = ref({})
let dt

onMounted(() => {
    dateStore.getNow()
    dt = setInterval(() => {
        dateStore.getNow()
        handlerRemind()
    }, 1000)
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

const handlerRemind = () => {
    if (remindStore.list.length === 0) {
        return
    }
    const remind = remindStore.list.find(item => `${item.time}:00` === `${dateStore.hour}:${dateStore.minute}:${dateStore.second}`)
    if (!remind) {
        return
    }
    currentRemind.value = remind
    modalState.value = true
}

const close = () => {
    modalState.value = false
    currentRemind.value = {}
}
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
