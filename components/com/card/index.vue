<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-13 16:25:12
 * @LastEditTime: 2024-03-31 15:32:25
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \timeNow\components\com\card\index.vue
-->
<!-- :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }" -->
<template>
    <UCard
        :ui="{ base: 'h-full flex flex-col overflow-hidden', rounded: 'rounded-none', shadow: 'shadow-none', ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800', body: { base: 'flex-1 overflow-hidden', padding: 'sm:p-0 p-0' } }">
        <template #header>
            <div class="flex items-center justify-between">
                <h3 class="flex items-center text-base font-semibold leading-6">
                    <slot name="header">{{ label }}</slot>
                </h3>
                <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="close" />
            </div>
        </template>
        <simplebar class="h-full px-5 py-5">
            <slot />
        </simplebar>
        <template #footer>
            <slot name="footer" />
        </template>
    </UCard>
</template>
<script setup>
import simplebar from 'simplebar-vue';
import 'simplebar-vue/dist/simplebar.min.css';


const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    close: {
        type: Function,
        default: () => { }
    }
})

</script>
<style>
/* fix model 弹窗中， select 下拉菜单异常 */
.simplebar-content-wrapper {
    height: 100% !important;
}

/* fix 焦点时有白色边框 */
.simplebar-content-wrapper {
    outline: none
}
</style>
