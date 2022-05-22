<script setup>
import { ref } from '@vue/reactivity';
import IconButton from './IconButton.vue';
const IsDropMenu = ref(false);
const dropMenu = () => {
  IsDropMenu.value ? (IsDropMenu.value = false) : (IsDropMenu.value = true);
};
</script>

<template>
  <header class="px-3 py-2.5 flex items-center justify-between bg-white">
    <div class="font-bold text-2xl text-color-gray">
      <div>Dashboard</div>
    </div>
    <div class="inline-flex items-center gap-3">
      <IconButton icon="sun" />
      <IconButton icon="eye" />
      <div class="relative cursor-pointer ml-3">
        <div class="inline-flex items-center gap-2" @click.prevent="dropMenu">
          <div class="text-color-gray">
            <div class="font-bold">Emre Yarasir</div>
            <div class="float-right text-sm">Staff</div>
          </div>
          <img
            src="https://facit-classic.omtanke.studio/static/media/wanna4.8ef5d8e129dbdd519c63.webp"
            class="w-12 h-12 rounded-full"
            draggable="false"
          />
        </div>
        <div
          class="absolute bg-white rounded-md border w-full p-2.5 mt-3"
          v-show="IsDropMenu"
        >
          <div class="p-2.5"><a href="">Profile</a></div>
          <div class="p-2.5"><a href="">Settings</a></div>
          <div class="p-2.5"><a href="">Logout</a></div>
        </div>
      </div>
    </div>
  </header>
</template>
