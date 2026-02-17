<template>
  <div class="flex flex-col items-center">
    <h2 class="text-base-700 font-bold text-center mb-4">{{ title }}</h2>
    <div
      class="bg-white flex items-center max-w-[500px] w-full overflow-x-auto rounded-lg p-4"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
