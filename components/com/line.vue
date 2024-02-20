<template>
    <div class="flex justify-between w-full my-[1px] text-xs text-center font-digital-dismay cursor-default select-none">
        <div v-for="part in parts"
            class="flex-1 h-[16px] border-[2px] leading-none border-black hover:text-zinc-400 transition-all rounded"
            :class="[highLight === part ? 'bg-zinc-700 text-zinc-700' : 'bg-zinc-900 text-zinc-900']">
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
