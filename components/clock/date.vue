<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-19 20:49:39
 * @LastEditTime: 2024-02-20 16:15:09
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \timeNow\components\clock\date.vue
-->
<template>
    <div class="text-zinc-300 font-digital-dismay text-[1.4vw] text-right mr-[1vw]">
        {{ dateStore.year }}. {{ dateStore.month }}.
        {{ dateStore.date }}
    </div>
</template>
<script setup>
const dateStore = useDateStore()
</script>
