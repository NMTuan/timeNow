<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-18 11:48:34
 * @LastEditTime: 2024-03-29 14:16:53
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \timeNow\components\clock\board.vue
-->
<template>
    <div class="flex items-center text-gray-200 text-[22vw] leading-[24vw] text-center font-digital-dismay">
        <div class="relative">
            <span class="text">{{ dateStore.hour12 }}</span>
            <span class="textShadow">88</span>
        </div>
        <span class="colon" :class="[settingStore.flicker1 && (dateStore.second % 2 === 0 ? 'flash' : '')]">:</span>

        <div class="relative">
            <span class="text">{{ dateStore.minute }}</span>
            <span class="textShadow">88</span>
        </div>

        <template v-if="settingStore.showSecond">
            <span class="colon" :class="[settingStore.flicker2 && (dateStore.second % 2 === 0 ? 'flash' : '')]">:</span>
            <div class="relative">
                <span class="text">{{ dateStore.second }}</span>
                <span class="textShadow">88</span>
            </div>
        </template>
    </div>
</template>
<script setup>
const dateStore = useDateStore()
const settingStore = useSettingStore()
</script>
<style lang="scss" scoped>
.text {
    @apply relative z-10;
    opacity: v-bind('settingStore.textOpacity');
}

.textShadow {
    @apply absolute inset-0 z-0;
    opacity: v-bind('settingStore.textShadowOpacity');
    color: v-bind('settingStore.textShadowColor');
}

.colon {
    @apply transition-all;
    opacity: v-bind('settingStore.textOpacity');

    &.flash {
        @apply opacity-0;
    }
}
</style>
