<template>
  <div class="bg-white overflow-hidden h-dvh">
    <MainTopBar />

    <div class="flex">
      <aside class="w-[300px] relative shrink-0 pt-12"><MainMenu /></aside>
      <main class="p-4 w-full overflow-auto mt-12" :style="contentHeightStyle">
        <slot />
        <div class="pb-12"></div>
      </main>
    </div>
  </div>
</template>

<script setup>
const contentHeightStyle = "height: calc(100dvh - 48px)";
</script>
