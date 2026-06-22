<template>
  <div
    class="w-64 p-4 bg-white shadow-md cursor-pointer h-64 relative"
    @click="routeTo(data?.documentId)"
  >
    <div class="rounded-md h-36 overflow-hidden">
      <BasicImage :data="data?.imgPreview" />
    </div>
    <h2 class="font-bold text-lg text-main mt-4 font-roboto">
      {{ data?.title }}
    </h2>
    <p class="text-main text-sm">{{ data?.description }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object,
});
const router = useRouter();
const routeTo = (id) => {
  if (!id) return;

  router.push(`/article/${id}`);
};
</script>
