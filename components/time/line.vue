
<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-18 22:03:42
 * @LastEditTime: 2024-02-18 22:23:21
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \timeNow\components\time\line.vue
-->
<template>
    <div class="flex items-end justify-between w-full">
        <template v-for="hour in 25">
            <div class="flex flex-col items-center ">
                <div class="font-digital-dismay">{{ hour - 1 }}</div>
                <div class="w-[2px] h-[32px] bg-gray-400"></div>
            </div>
            <template v-if="hour !== 25" v-for="m in 3">
                <div class="w-[1px] h-[18px] bg-gray-400"></div>
            </template>
        </template>
    </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.hour {}
</style>
