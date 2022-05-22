<script setup>
import Icons from './Icon.vue';
const props = defineProps({
  active: {
    type: Boolean,
  },
  content: {
    type: String,
    required: true,
  },
  iconName: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    <a
      class="flex items-center text-sidebar-text-color p-2.5 rounded-md gap-3 hover:bg-sidebar-hover transition-all max-h-[50px]"
      href=""
    >
      <div>
        <Icons :iconName="iconName" size="30" />
      </div>
      <Transition name="fade">
        <div class="navigation-link-text" v-show="active">{{ content }}</div>
      </Transition>
    </a>
  </div>
</template>
<style>
.navigation-link-text {
  display: none;
}
.sidebar.active .navigation-link-text {
  transition-delay: 0.2s;
  display: block;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
