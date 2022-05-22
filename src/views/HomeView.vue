<script setup>
import Sidebar from '../components/Sidebar.vue';
import CustomHeader from '../components/Header.vue';
import Icons from '../components/Icon.vue';
import IconButton from '../components/IconButton.vue';
import Card from '../components/Card.vue';
import CardHeader from '../components/CardHeader.vue';
import CardContent from '../components/CardContent.vue';
import ListTable from '../components/ListTable.vue';
import { UseMainStore } from '../stores/store';
const mainStore = UseMainStore();
</script>

<template>
  <Sidebar />
  <div class="wrapper" :class="mainStore.active ? 'active' : ''">
    <CustomHeader />
    <div class="container mx-auto px-4 mt-5">
      <Card>
        <CardHeader />
        <CardContent>
          <ListTable />
        </CardContent>
      </Card>
    </div>
  </div>
</template>
