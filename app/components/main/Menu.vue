<template>
  <div class="bg-gray-200 h-full fixed w-[300px]">
    <a
      v-for="item in menu"
      :key="item.title"
      :href="item.href"
      class="h-12 block border-1 border-transparent hover:bg-gray-300 grid place-items-center"
    >
      {{ item.title }}
    </a>
  </div>
</template>

<script setup>
const menu = [
  { title: "Новости", href: "/articles" },
  { title: "Канбан", href: "/kanban" },
];
</script>
