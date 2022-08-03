<template>
  <div class="flex h-screen bg-gray-200 font-roboto">
    <sidebar />

    <div class="flex-1 flex flex-col overflow-hidden">
      <Navbar />

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div class="container mx-auto px-6 py-8">
          <router-view/>
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<!-- <template>
  <div class="home">
    <h1>HOME NI SYA</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template> -->

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/SideBar/Navbar.vue';
import sidebar from '@/components/SideBar/Sidebar.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    Navbar, sidebar
},
data (){
  return {
      showSidebar: true,
      sidebarOpen: true,
      isOpen: false,
      isOpenDrawer: true
    }
},
method:{
  toggleSidebar() {
    this.showSidebar = !this.showSidebar
  }
}
});
</script>
