<script setup>
import { watch } from 'vue';
import Logo from './Logo.vue';
import Icons from './Icon.vue';
import SidebarNav from './SidebarNav.vue';
import { UseMainStore } from '../stores/store';

const mainStore = UseMainStore();
watch(
  () => mainStore.active,
  (newValue, oldValue) => {
    console.log('yeni Değer ' + newValue, 'eski Dğer ' + oldValue);
  }
);

const sidebarController = () => {
  mainStore.active ? (mainStore.active = false) : (mainStore.active = true);
};
</script>
<template>
  <div class="sidebar z-50" :class="mainStore.active ? 'active' : ''">
    <div
      class="flex items-center p-2.5"
      :class="mainStore.active ? 'justify-between' : 'justify-center'"
    >
      <div class="transition-all" v-if="mainStore.active">
        <a href="">
          <Logo />
        </a>
      </div>
      <div class="text-white">
        <button
          class="p-2.5 rounded-full mb-[3px] hover:bg-sidebar-hover transition-all"
          @click="sidebarController(index)"
        >
          <Icons iconName="left" size="20" />
        </button>
      </div>
    </div>
    <SidebarNav :active="mainStore.active" />
  </div>
</template>
