<template>
    <UButton :icon="name" :to="href" :target="target" variant="ghost" class="ml-3"></UButton>
</template>
<script setup>
const props = defineProps({
    name: '',
    href: ''
})

const target = computed(() => {
    if (props.href) {
        return '_blank'
    } else {
        return ''
    }
})
</script>
