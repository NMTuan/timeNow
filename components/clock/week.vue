<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-18 20:00:36
 * @LastEditTime: 2024-02-19 22:25:20
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: /timeNow/components/clock/week.vue
-->
<template>
    <div class="text-zinc-600 font-digital-dismay text-[1.2vw] flex gap-[3vw]">
        <div :class="[dateStore.day === 1 && 'text-zinc-200']">MON.</div>
        <div :class="[dateStore.day === 2 && 'text-zinc-200']">TUE.</div>
        <div :class="[dateStore.day === 3 && 'text-zinc-200']">WED.</div>
        <div :class="[dateStore.day === 4 && 'text-zinc-200']">THU.</div>
        <div :class="[dateStore.day === 5 && 'text-zinc-200']">FRI.</div>
        <div :class="[dateStore.day === 6 && 'text-zinc-200']">SAT.</div>
        <div :class="[dateStore.day === 7 && 'text-zinc-200']">SUN.</div>
    </div>
</template>
<script setup>
const dateStore = useDateStore()
</script>
