<template>
    <ComLine :parts="12" :highLight="Number(dateStore.month)"></ComLine>
</template>
<script setup>
const dateStore = useDateStore()
</script>
