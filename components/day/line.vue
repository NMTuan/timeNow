<template>
    <ComLine :parts="days" :highLight="Number(dateStore.date)"></ComLine>
</template>
<script setup>
const dateStore = useDateStore()
const days = computed(() => {
    // 获取当前日期
    const currentDate = new Date();

    // 获取当前月份
    const currentMonth = currentDate.getMonth();

    // 获取这个月的天数
    const daysInMonth = new Date(currentDate.getFullYear(), currentMonth + 1, 0).getDate();

    return daysInMonth
})
</script>
