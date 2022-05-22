<script setup>
import Icons from "./Icon.vue";
const props = defineProps({
 icon: {
      type: String,
      required: true,
    },
  },
);

</script>

<template>
  <button
    class="text-button-color text-lg p-2.5 rounded-md bg-button-bg-color hover:bg-button-bg-hover active:shadow-inner transition-all"
  >
    <Icons size="1em" :iconName="icon" />
  </button>
</template>
