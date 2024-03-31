<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-20 16:11:39
 * @LastEditTime: 2024-03-31 15:53:17
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \timeNow\components\header\index.vue
-->
<template>
    <div class="flex items-center w-full pt-6 px-6 overflow-hidden">
        <div class="flex-1 text-[32px] text-white truncate">
            {{ settingStore.motto }}
        </div>
        <div class="flex-shrink-0 opacity-0 transition-all group-hover:opacity-100">
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
            <HeaderIcon name="i-ri-twitter-line" href="https://twitter.com/NMTuans"></HeaderIcon>

            <HeaderToggleFullScreen />

            <HeaderRemind />
            <HeaderSetting />
        </div>
    </div>
</template>
<script setup>
const settingStore = useSettingStore()
const donateVisiable = ref(false)
</script>
