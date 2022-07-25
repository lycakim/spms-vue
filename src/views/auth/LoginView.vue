<template>
<div id="wrapper" class="login" :style="myStyle">
    <LoginCard/>
</div>
</template>

<script lang="ts">
import LoginCard from "../../components/LoginCard/LoginCard.vue";
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
    components: { LoginCard }
}
</script>
<style scoped>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";



</style>