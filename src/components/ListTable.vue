<script setup>
import IconButton from '../components/IconButton.vue';
import Badge from '../components/Badge.vue';
</script>

<template>
  <div class="overflow-x-auto">
    <table class="w-full align-top border-collapse">
      <thead class="align-bottom border-0">
        <tr>
          <th class="p-4 bg-table-bg">
            <div class="flex justify-center">
              <div class="inline">
                <input
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 cursor-pointer"
                />
              </div>
            </div>
          </th>
          <th class="p-4 bg-table-bg">
            <div>#</div>
          </th>
          <th class="p-4 bg-table-bg">
            <div>Image</div>
          </th>
          <th class="p-4 bg-table-bg min-w-[250px]">
            <div class="text-left">Name</div>
          </th>
          <th class="p-4 bg-table-bg">
            <div>Type</div>
          </th>
          <th class="p-4 bg-table-bg">
            <div>Visibility</div>
          </th>
          <th class="p-4 bg-table-bg">
            <div>Actions</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="p-4">
            <div class="flex justify-center">
              <div class="inline">
                <input
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 cursor-pointer"
                />
              </div>
            </div>
          </td>
          <td class="p-4">
            <div class="flex items-center justify-center">
              <div class="inline">1</div>
            </div>
          </td>
          <td class="p-4">
            <div class="flex items-center justify-center">
              <a href="">
                <img
                  src="https://facit-classic.omtanke.studio/static/media/beveled-cone.04fd2e17b4708f5641f0.png"
                  class="w-14 h-14 rounded-md"
                />
              </a>
            </div>
          </td>
          <td class="p-4">
            <div class="font-medium">
              <a class="hover:underline" href="">Category Name Product 8800</a>
            </div>
          </td>
          <td class="p-4">
            <div class="flex justify-center">
              <Badge colors="bg-blue-600/20 text-blue-600">Category</Badge>
            </div>
          </td>
          <td class="p-4">
            <div class="flex justify-center">
              <Badge colors="bg-blue-600/20 text-blue-600">Visible</Badge>
            </div>
          </td>
          <td class="p-4">
            <div class="flex justify-center">
              <div class="inline">
                <IconButton icon="more" />
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="p-4 bg-table-bg">
            <div class="flex justify-center">
              <div class="inline">
                <input
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 cursor-pointer"
                />
              </div>
            </div>
          </td>
          <td class="p-4 bg-table-bg">
            <div class="flex items-center justify-center">
              <div class="inline">1</div>
            </div>
          </td>
          <td class="p-4 bg-table-bg">
            <div class="flex items-center justify-center">
              <a href="">
                <img
                  src="https://facit-classic.omtanke.studio/static/media/beveled-cone.04fd2e17b4708f5641f0.png"
                  class="w-14 h-14 rounded-md"
                />
              </a>
            </div>
          </td>
          <td class="p-4 bg-table-bg">
            <div class="font-medium">
              <a class="hover:underline" href="">Category Name Product 8800</a>
            </div>
          </td>
          <td class="p-4 bg-table-bg">
            <div class="flex justify-center">
              <Badge colors="bg-blue-600/20 text-blue-600">Category</Badge>
            </div>
          </td>
          <td class="p-4 bg-table-bg">
            <div class="flex justify-center">
              <Badge colors="bg-blue-600/20 text-blue-600">Visible</Badge>
            </div>
          </td>
          <td class="p-4 bg-table-bg">
            <div class="flex justify-center">
              <div class="inline">
                <IconButton icon="more" />
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
