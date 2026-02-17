<template>
  <div
    class="flex flex-none items-center gap-1 rounded-full border-2 px-[14px] py-2 label-xs my-1 border-black"
    :class="active ? 'bg-black text-white' : 'bg-white text-black'"
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
