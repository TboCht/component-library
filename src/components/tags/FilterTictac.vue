<template>
  <div
    class="flex flex-none items-center gap-1 rounded-full border-2 px-[14px] py-2 label-xs bg-white my-1 border-base-900"
    :class="active ? '  bg-base-900 text-white' : 'bg-white text-base-900'"
  >
    {{ title }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  id: string;
  active?: boolean;
}>();
</script>
