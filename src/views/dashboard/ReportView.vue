<template>
<div>
  <div class="reportview m-1">
    <div class="py-1 px-1 rounded">
      <HeaderStats/>
      <br/>
      <HeaderStats/>
      <br/>
      <HeaderStats/>
      <br/>
      <HeaderStats/>
      <br/>
      <HeaderStats/>
      <br/>
      <HeaderStats/>
    </div>
  </div>
  </div>
</template>
<style>
/* @import 'datatables.net-dt'; */
</style>
<script lang="ts">
import { defineComponent } from 'vue';
import HeaderStats from '@/components/DashboardCards/HeaderStats.vue';
export default defineComponent({
    name: "ReportView",
    components: { HeaderStats }
});
</script>