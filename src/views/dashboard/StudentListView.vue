<template>
<div>
  <div class="studentlistview m-1">
    <div class="py-1 px-1 rounded">
      <DataTables1/>
    </div>
  </div>
  </div>
</template>
<style>
/* @import 'datatables.net-dt'; */
</style>
<script lang="ts">
import { defineComponent } from 'vue';
import DataTables1 from '@/components/DataTables/DataTables1.vue';
export default defineComponent({
    name: "StudentListView",
    components: { DataTables1 }
});
</script>