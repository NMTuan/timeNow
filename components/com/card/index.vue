<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-13 16:25:12
 * @LastEditTime: 2024-03-29 15:17:25
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
                <h3 class="text-base font-semibold leading-6">
                    {{ label }}
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
</style>
