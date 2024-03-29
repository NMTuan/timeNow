<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-19 20:49:39
 * @LastEditTime: 2024-03-29 13:50:02
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \timeNow\components\clock\date.vue
-->
<template>
    <div class="text-gray-300 font-digital-dismay text-[1.4vw] text-right mr-[1vw]">
        {{ dateStore.year }}. {{ dateStore.month }}.
        {{ dateStore.date }}
    </div>
</template>
<script setup>
const dateStore = useDateStore()
</script>
