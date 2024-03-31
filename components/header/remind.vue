<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-30 21:17:15
 * @LastEditTime: 2024-03-31 15:51:22
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \timeNow\components\header\remind.vue
-->
<template>
    <ClientOnly>
        <HeaderIcon name="i-ri-notification-2-line" @click="showSlide = true"></HeaderIcon>
        <USlideover v-model="showSlide">
            <ComCard label="remind" :close="closeSlide">
                <div v-if="remindStore.list.length === 0" class="flex flex-col items-center">
                    <div class="text-gray-500">
                        空空如也！
                    </div>
                </div>
                <div v-else>
                    <div v-for="item in remindStore.list">
                        <UAlert class="mb-4" :title="item.time"
                            :close-button="{ icon: 'i-heroicons-x-mark-20-solid', color: 'gray', variant: 'link', padded: false }"
                            @close="remindStore.remove(item.id)">

                            <template #title>
                                <div class="flex items-center">
                                    <UIcon name="i-ri-circle-fill" class="mr-2" :style="{ color: item.color }" />
                                    <div>{{ item.time }}</div>
                                </div>
                            </template>
                            <template #description>
                                <div class="leading-6">
                                    {{ item.content }}
                                </div>
                            </template>
                        </UAlert>
                    </div>
                </div>
            </ComCard>
        </USlideover>
    </ClientOnly>
</template>
<script setup>
const remindStore = useRemindStore()
const showSlide = ref(false)


const closeSlide = () => {
    showSlide.value = false
}

</script>
