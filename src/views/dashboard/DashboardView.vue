<template>
<div>
  <div class="dashboard m-1">
    <div class="py-1 rounded">
      <HeaderStats/>
      <div class="mt-4"><GraphView/></div>
      <div><BarCharts/></div>
    </div>
  </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import HeaderStats from '@/components/DashboardCards/HeaderStats.vue';
import GraphView from '../../components/DashboardCards/GraphView.vue';
import BarCharts from '@/components/DashboardCards/BarCharts.vue';


export default defineComponent({
    name: "DashboardView",
    components: { HeaderStats, GraphView, BarCharts }
});
</script>