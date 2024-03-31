<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-18 20:00:36
 * @LastEditTime: 2024-03-31 10:17:58
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \timeNow\components\clock\week.vue
-->
<template>
    <div class="text-gray-600 font-digital-dismay text-[1.2vw] flex gap-[3vw]">
        <div :class="[dateStore.day === 1 && 'text-gray-300']">MON.</div>
        <div :class="[dateStore.day === 2 && 'text-gray-300']">TUE.</div>
        <div :class="[dateStore.day === 3 && 'text-gray-300']">WED.</div>
        <div :class="[dateStore.day === 4 && 'text-gray-300']">THU.</div>
        <div :class="[dateStore.day === 5 && 'text-gray-300']">FRI.</div>
        <div :class="[dateStore.day === 6 && 'text-gray-300']">SAT.</div>
        <div :class="[dateStore.day === 0 && 'text-gray-300']">SUN.</div>
    </div>
</template>
<script setup>
const dateStore = useDateStore()
</script>
