<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-20 16:11:39
 * @LastEditTime: 2024-02-20 21:22:21
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
        <HeaderIcon @click="optionsVisiable = true" name="i-ri-equalizer-line"></HeaderIcon>
        <!-- <HeaderIcon name="i-ri-twitter-line"></HeaderIcon> -->
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
                <p v-for="i in 100">{{ i }}</p>

            </UCard>
        </USlideover>
    </div>
</template>
<script setup>

const optionsVisiable = ref(false)

</script>
