<template>
    <div id="wrapper" class="signup" :style="myStyle">
    <SignUpCard/>
  </div>
</template>
<script lang="ts">
import SignUpCard from "@/components/LoginCard/SignUpCard.vue";
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
    components: { SignUpCard }
}
</script>