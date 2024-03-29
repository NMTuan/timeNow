<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-20 16:11:39
 * @LastEditTime: 2024-03-29 11:03:49
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \timeNow\components\header\index.vue
-->
<template>
    <div class="flex items-center w-full pt-6 px-6 overflow-hidden">
        <div class="flex-1 text-[32px] text-white truncate">
            {{ settingStore.motto }}
        </div>
        <div class="flex-shrink-0 opacity-100 transition-all group-hover:opacity-100">
            <!--  -->
            <HeaderIcon @click="donateVisiable = true" name="i-ri-cup-line"></HeaderIcon>
            <UModal v-model="donateVisiable" :ui="{ width: 'sm:max-w-4xl' }">
                <div class="py-16">
                    <div class="flex justify-around">
                        <img class="h-96" src="/wepay.jpg" alt="">
                        <img class="h-96" src="/alipay.jpg" alt="">
                    </div>
                </div>
            </UModal>

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
                            <UButton color="gray" variant="ghost" icon="i-ri-close-line"
                                @click="optionsVisiable = false" />
                        </div>
                    </template>
                    <UFormGroup class="mb-6">
                        <template #label>
                            <div class="text-base mb-4">一句话提醒自己</div>
                        </template>
                        <UTextarea v-model="settingStore.motto"> </UTextarea>
                    </UFormGroup>
                    <UFormGroup class="mb-6">
                        <template #label>
                            <div class="text-base">表盘</div>
                        </template>
                        <UCheckbox class="my-4" v-model="settingStore.hour24" label="24小时制"></UCheckbox>
                        <UCheckbox class="my-4" v-model="settingStore.showSecond" label="显示秒数"></UCheckbox>
                        <UCheckbox class="my-4" v-model="settingStore.flicker1" label="冒号闪动(时:分)"></UCheckbox>
                        <UCheckbox class="my-4" v-model="settingStore.flicker2" :disabled="!settingStore.showSecond"
                            label="冒号闪动(分:秒)">
                        </UCheckbox>
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
    </div>
</template>
<script setup>
const settingStore = useSettingStore()
const optionsVisiable = ref(false)
const donateVisiable = ref(false)
</script>
