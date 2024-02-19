<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-18 11:48:34
 * @LastEditTime: 2024-02-19 22:17:35
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: /timeNow/components/clock/board.vue
-->
<template>
    <div
        class="text-zinc-200 text-[22vw] leading-[24vw] text-center font-digital-dismay"
    >
        <span>{{ dateStore.hour }}</span>
        <span>:</span>
        <span>{{ dateStore.minute }}</span>
        <span>:</span>
        <span>{{ dateStore.second }}</span>
    </div>
</template>
<script setup>
const dateStore = useDateStore()
</script>
