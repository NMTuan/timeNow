<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-18 11:48:34
 * @LastEditTime: 2024-02-22 13:17:49
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \timeNow\components\clock\board.vue
-->
<template>
    <div class="text-zinc-200 text-[22vw] leading-[24vw] text-center font-digital-dismay">
        <span>{{ dateStore.hour12 }}</span>
        <span class="transition-all"
            :class="[settingStore.flicker && (dateStore.second % 2 === 0 ? 'opacity-1' : 'opacity-0')]">:</span>
        <span>{{ dateStore.minute }}</span>
        <template v-if="settingStore.showSecond">
            <span class="transition-all"
                :class="[settingStore.flicker && (dateStore.second % 2 === 0 ? 'opacity-1' : 'opacity-0')]">:</span>
            <span>{{ dateStore.second }}</span>
        </template>
    </div>
</template>
<script setup>
const dateStore = useDateStore()
const settingStore = useSettingStore()
</script>
