<script setup>
import Icons from "../components/Icon.vue";
</script>

<template>
    <div class="flex items-center justify-between mb-5">
            <div class="inline-flex items-center gap-2 text-blue-600">
              <div class="text-3xl p-2.5 rounded-md bg-blue-600/20">
                <Icons size="1em" iconName="category-outline" />
              </div>
              <div class="text-xl font-bold">Category Name</div>
            </div>
            <div>
              <a
                class="p-2.5 rounded-md bg-link-gray inline-flex items-center gap-2 text-link-blue hover:bg-link-blue hover:text-link-gray focus:ring focus:ring-blue-300 transition-all"
                href=""
              >
                <div>
                  <Icons size="1em" iconName="plus" />
                </div>
                <div class="font-medium">Add</div>
              </a>
            </div>
          </div>
</template>