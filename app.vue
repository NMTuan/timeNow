<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-18 11:35:10
 * @LastEditTime: 2024-02-18 22:26:06
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \timeNow\app.vue
-->
<template>
  <div class="w-full h-screen overflow-hidden flex flex-col items-center justify-between">
    <div></div>
    <!-- <ClientOnly> -->
    <div class="bg-white/5 w-full flex flex-col items-center justify-center py-[4vw]">
      <div>
        <ClockWeek></ClockWeek>
        <ClockBoard></ClockBoard>
        <ClockDate></ClockDate>
      </div>
    </div>
    <!-- </ClientOnly> -->
    <TimeLine></TimeLine>
  </div>
</template>
<style lang="scss">
@font-face {
  font-family: "DigitalDismay";
  src: url("/fonts/DigitalDismay.otf") format("opentype");
}

.font {
  &-digital-dismay {
    font-family: "DigitalDismay";
  }
}
</style>
