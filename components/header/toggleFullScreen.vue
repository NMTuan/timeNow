
<template>
    <HeaderIcon v-if="state" @click="fullScreenExit" name="i-ri-fullscreen-exit-line">
    </HeaderIcon>
    <HeaderIcon v-else @click="fullScreen" name="i-ri-fullscreen-line"></HeaderIcon>
</template>
<script setup>
const state = ref(false)
const fullScreen = () => {
    document.documentElement.requestFullscreen();
}
const fullScreenExit = () => {
    document.exitFullscreen();
}

onMounted(() => {
    document.addEventListener('fullscreenchange', () => {
        state.value = document?.fullscreenElement !== null
    })
})
onBeforeUnmount(() => {
    document.removeEventListener('fullscreenchange')
})

</script>
