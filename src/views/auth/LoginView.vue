<template>
<div id="wrapper">

    <LoginCard/>
    <router-view></router-view>
    <slot/> 
</div>
</template>

<script setup lang="ts">
import LoginCard from "../../components/LoginCard/LoginCard.vue";

</script>