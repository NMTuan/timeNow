<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-18 22:03:42
 * @LastEditTime: 2024-03-31 14:39:05
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \timeNow\components\time\line.vue
-->
<template>
    <div ref="timeBar" class="flex items-end justify-between w-full relative select-none cursor-pointer"
        @click="addRemind">
        <template v-for="hour in 25">
            <div class="flex flex-col items-center relative">
                <div class="font-digital-dismay text-gray-700 bg-black  absolute -top-6 z-10">
                    {{ hour - 1 }}
                </div>
                <div class="w-[1px] h-[32px] bg-gray-800"></div>
            </div>
            <template v-if="hour !== 25" v-for="m in 3">
                <div class="w-[1px] h-[18px] bg-gray-800"></div>
            </template>
        </template>
        <div class="absolute bottom-0 w-[1px] h-[52px] bg-orange-500 z-1" :style="progressStyle"></div>
        <div v-for="item in remindStore.list" class="absolute bottom-0 w-[1px] h-[32px] z-1" :style="item.style">
            <UTooltip :text="item.content" class="h-full" :popper="{ placement: 'top', arrow: true }"
                :ui="{ base: '-ml-2', arrow: { placement: '-ml-1' } }">
                <div class="w-[16px] h-full -ml-[8px] cursor-pointer" @click.stop="editRemind(item)">
                </div>
                <template #text>
                    {{ item.content || item.time }}
                </template>
            </UTooltip>
        </div>
        <UModal v-model="modalState" prevent-close>
            <ComCard :label="`${editId ? 'edit' : 'add'} remind`" :close="close">
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
                </UForm>
                <template #footer>
                    <UFormGroup>
                        <div class="flex">
                            <UButton v-if="editId" variant="solid" color="gray" icon="i-ri-delete-bin-line"
                                class="text-center mr-4" @click="onRemove">
                            </UButton>
                            <UButton class="flex-1 text-center justify-center" @click="submit">保存</UButton>
                        </div>
                    </UFormGroup>
                </template>
            </ComCard>
        </UModal>
    </div>
</template>
<script setup>
const dateStore = useDateStore()
const remindStore = useRemindStore()
const timeBar = ref()
const modalState = ref(false)
const form = ref()
const formData = ref({})
const editId = ref('')

const progressStyle = computed(() => {
    const second =
        dateStore.hour * 3600 + dateStore.minute * 60 + dateStore.second
    const oneDaySecond = 24 * 3600
    // round会导致时间线的秒针位置不准确
    // const left = Math.round(second / oneDaySecond).toFixed(2)
    const left = second / oneDaySecond
    return {
        left: left + '%'
    }
})

const addRemind = (e) => {
    // 获取点击位置相对于timeBar的百分比
    const percent = (e.clientX - timeBar.value.getBoundingClientRect().left) / timeBar.value.getBoundingClientRect().width
    // 根据百分比计算相对于一天的秒数
    const second = Math.round(percent * 24 * 3600)
    // 把秒转换为 时：分，不足2位前面补零
    const time = `${Math.floor(second / 3600).toString().padStart(2, '0')}:${Math.floor((second % 3600) / 60).toString().padStart(2, '0')}`
    formData.value.time = time

    const color = [0, 0, 255].reduce((total, item) => {
        const x = item === 255 ? 255 : Math.floor(Math.random() * 255)
        total.push(x.toString(16).padStart(2, '0'))
        return total
    }, [])
    formData.value.color = `#${color.join('')}`

    modalState.value = true
}


const editRemind = (item) => {
    console.log(1, item)
    formData.value = JSON.parse(JSON.stringify(item))
    editId.value = item.id
    modalState.value = true
}

const close = () => {
    formData.value = {}
    editId.value = false
    modalState.value = false
}

const submit = () => {
    form.value.submit()
}
const onSubmit = () => {
    remindStore.add(formData.value)

    close()
}
const onRemove = () => {
    remindStore.remove(editId.value)
    close()
}
</script>
