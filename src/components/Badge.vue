<script setup>
const props = defineProps({
  colors: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="inline p-1.5 text-sm rounded-md" :class="colors">
    <slot />
  </div>
</template>
