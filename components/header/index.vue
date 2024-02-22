<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-20 16:11:39
 * @LastEditTime: 2024-02-22 11:53:57
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \timeNow\components\header\index.vue
-->
<template>
    <div class="w-full text-right pr-6 pt-6">
        <!--  -->
        <HeaderIcon name="i-ri-cup-line"></HeaderIcon>
        <HeaderIcon name="i-ri-github-line" href="https://github.com/NMTuan/timeNow"></HeaderIcon>
        <ClientOnly>
            <HeaderToggleFullScreen></HeaderToggleFullScreen>
        </ClientOnly>
        <!-- <HeaderIcon name="i-ri-twitter-line"></HeaderIcon> -->
        <HeaderIcon @click="optionsVisiable = true" name="i-ri-equalizer-line"></HeaderIcon>
        <USlideover v-model="optionsVisiable">
            <UCard class="flex flex-col flex-1"
                :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-zinc-100 dark:divide-zinc-800' }">
                <template #header>
                    <div class="flex items-center justify-between">
                        <h3 class="text-base font-semibold leading-6 text-zinc-900 dark:text-zinc-300">
                            Settings
                        </h3>
                        <UButton color="gray" variant="ghost" icon="i-ri-close-line" @click="optionsVisiable = false" />
                    </div>
                </template>
                <UFormGroup class="mb-6">
                    <template #label>
                        <div class="text-base">表盘</div>
                    </template>
                    <UCheckbox class="my-4" v-model="settingStore.hour24" label="24小时制"></UCheckbox>
                    <UCheckbox class="my-4" v-model="settingStore.showSecond" label="显示秒数"></UCheckbox>
                    <UCheckbox class="my-4" v-model="settingStore.flicker" label="冒号闪动"></UCheckbox>
                </UFormGroup>
                <UFormGroup class="mb-6">
                    <template #label>
                        <div class="text-base">底部</div>
                    </template>
                    <UCheckbox class="my-4" v-model="settingStore.showTimeLine" label="显示日进度"></UCheckbox>
                    <UCheckbox class="my-4" v-model="settingStore.showDayLine" label="显示月进度"></UCheckbox>
                    <UCheckbox class="my-4" v-model="settingStore.showMonthLine" label="显示年进度"></UCheckbox>
                </UFormGroup>
            </UCard>
        </USlideover>
    </div>
</template>
<script setup>
const settingStore = useSettingStore()
const optionsVisiable = ref(false)

</script>
