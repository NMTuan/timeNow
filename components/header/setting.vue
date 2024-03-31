<template>
    <HeaderIcon @click="optionsVisiable = true" name="i-ri-equalizer-line"></HeaderIcon>
    <USlideover v-model="optionsVisiable">
        <ComCard label="Settings" :close="close">
            <div class=" title">一句话提醒自己</div>
            <UTextarea v-model="settingStore.motto">
            </UTextarea>

            <div class="title">表盘</div>
            <UCheckbox class="my-4" v-model="settingStore.hour24" label="24小时制"></UCheckbox>
            <UCheckbox class="my-4" v-model="settingStore.showSecond" label="显示秒数"></UCheckbox>
            <UCheckbox class="my-4" v-model="settingStore.flicker1" label="冒号闪动(时:分)"></UCheckbox>
            <UCheckbox class="my-4" v-model="settingStore.flicker2" :disabled="!settingStore.showSecond"
                label="冒号闪动(分:秒)">
            </UCheckbox>
            <div class="flex items-center mb-1">
                <div class="flex-shrink-0 text-sm">液晶数字</div>
                <URange class="ml-4" v-model="settingStore.textOpacity" :min="0" :max="1" :step="0.05" />
            </div>
            <div class="flex items-center">
                <div class="flex-shrink-0 text-sm">液晶背景</div>
                <UInput class="mx-4" v-model="settingStore.textShadowColor" type="color" />
                <URange v-model="settingStore.textShadowOpacity" :min="0" :max="1" :step="0.05" />
            </div>

            <div class="title">底部</div>
            <UCheckbox class="my-4" v-model="settingStore.showTimeLine" label="显示日进度"></UCheckbox>
            <UCheckbox class="my-4" v-model="settingStore.showDayLine" label="显示月进度"></UCheckbox>
            <UCheckbox class="my-4" v-model="settingStore.showMonthLine" label="显示年进度"></UCheckbox>
        </ComCard>
    </USlideover>

</template>

<script setup>
const settingStore = useSettingStore()
const optionsVisiable = ref(false)
const close = () => {
    optionsVisiable.value = false
}
</script>
<style lang="scss" scoped>
.title {
    @apply text-base my-4;
}
</style>
