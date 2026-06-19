<template>
  <div class="w-full h-36 relative rounded-md overflow-hidden">
    <img
      class="absolute inset-0 w-full h-full object-cover"
      :src="fullURL"
      alt=""
    />
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object,
});

const runtimeConfig = useRuntimeConfig();

const fullURL = computed(() => {
  return `${runtimeConfig.public.strapiUrl}${props.data?.url || ""}`;
});
</script>
