<script setup>
/*Header/Footer*/
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

</script>
<template>

    <HeaderComponent/>
  <main><!---->
    <RouterView />
  </main>
    <FooterComponent/>
    <!---->
    <CriarComponent/>
</template>
<style scoped>

</style>
