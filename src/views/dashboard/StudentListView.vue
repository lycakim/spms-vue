<template>
  <div class="dashboard">
    <SideBar1/>
  </div>
</template>
<script lang="ts">
import SideBar1 from "@/components/SideBar/NavAndSideBar.vue";
export default {
    data() {
        return {
            count: 0,
            myStyle:{
                backgroundColor: "#D9AFD9",
                backgroundImage: "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
            }
        };
    },
    components: { SideBar1 }
}
</script>