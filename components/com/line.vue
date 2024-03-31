<template>
    <div
        class="flex justify-between w-full my-[1px] text-xs text-center font-digital-dismay cursor-default select-none">
        <div v-for="part in parts"
            class="flex-1 h-[16px] border-[2px] leading-none border-black hover:text-gray-400 transition-all rounded"
            :class="[highLight === part ? 'bg-gray-700 text-gray-700' : 'bg-gray-900 text-gray-900']">
            {{ part }}
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    parts: 30,
    highLight: 0
})
</script>
