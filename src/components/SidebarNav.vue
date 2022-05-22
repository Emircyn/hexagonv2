<script setup>
import NavigationLink from "./NavigationLink.vue";
const props = defineProps({
  active: {
    type: Boolean,
  },
});
const contents = [
  "Dashboard",
  "Contents",
  "Menus",
  "Home Page",
  "Site Settings",
];

const iconNames = [
  "dashboard-outline",
  "content-outline",
  "menu-outline",
  "home-outline",
  "cog-outline",
];
</script>

<template>
  <nav class="p-2.5 flex flex-col gap-2.5">
    <NavigationLink
      v-for="(content, index) in contents"
      :key="index"
      :content="content"
      :iconName="iconNames[index]"
      :active="active"
    />
  </nav>
</template>
