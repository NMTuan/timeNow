<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-20 20:37:15
 * @LastEditTime: 2024-02-22 12:32:41
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \timeNow\components\header\toggleFullScreen.vue
-->

<template>
    <ClientOnly>
        <HeaderIcon v-if="state" @click="fullScreenExit" name="i-ri-fullscreen-exit-line">
        </HeaderIcon>
        <HeaderIcon v-else @click="fullScreen" name="i-ri-fullscreen-line"></HeaderIcon>
    </ClientOnly>
</template>
<script setup>
const state = ref(false)
let evt
const fullScreen = () => {
    document.documentElement.requestFullscreen();
}
const fullScreenExit = () => {
    document.exitFullscreen();
}

onMounted(() => {
    evt = document.addEventListener('fullscreenchange', () => {
        state.value = document?.fullscreenElement !== null
    })
})
onBeforeUnmount(() => {
    document.removeEventListener('fullscreenchange', evt)
})

</script>
