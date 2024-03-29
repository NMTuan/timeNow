<template>
    <ClientOnly>
        <HeaderIcon name="i-ri-notification-2-line" @click="showSlide = true"></HeaderIcon>
        <USlideover v-model="showSlide" prevent-close>
            <ComCard label="remind" :close="closeSlide">
                <div v-if="remindStore.list.length === 0" class="flex flex-col items-center">
                    <div class="text-gray-500">
                        空空如也！
                    </div>
                </div>
                <div v-else>
                    <div v-for="item in remindStore.list">
                        <pre>{{ item }}</pre>
                        <UButton @click="remindStore.remove(item.id)">remove</UButton>
                    </div>
                </div>
                <template #footer>
                    <UForm ref="form" class="space-y-4" :state="formData" @submit="onSubmit">
                        <UFormGroup class="flex-1" label="时间">
                            <UInput v-model="formData.time" type="time"></UInput>
                        </UFormGroup>
                        <UFormGroup class="flex-1" label="颜色">
                            <UInput v-model="formData.color" type="color"></UInput>
                        </UFormGroup>
                        <UFormGroup label="内容">
                            <UTextarea v-model="formData.content"></UTextarea>
                        </UFormGroup>
                        <UFormGroup>
                            <UButton block icon="i-ri-add-line" type="submit">添加一个提醒</UButton>
                        </UFormGroup>
                    </UForm>
                </template>
            </ComCard>
        </USlideover>
    </ClientOnly>
</template>
<script setup>
const remindStore = useRemindStore()
const showSlide = ref(false)
const formData = ref({})


const closeSlide = () => {
    showSlide.value = false
}

const onSubmit = () => {
    remindStore.add(formData.value)
    formData.value = {}
}

</script>
