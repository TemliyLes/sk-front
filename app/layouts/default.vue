<template>
  <div class="bg-red-400 h-dvh overflow-auto">
    <MainTopBar />

    <main class="p-4 mt-12">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
