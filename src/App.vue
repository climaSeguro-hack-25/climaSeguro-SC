<script setup>
/*Header/Footer*/
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import ClimasFrioComponent from '@/components/climaAtual/ClimasFrioComponent.vue';
import ClimasComponent from '@/components/climaAtual/ClimasComponent.vue';
import ClimasQuenteComponent from '@/components/climaAtual/ClimasQuenteComponent.vue';
</script>
<template>

    <HeaderComponent/>
  <main>
    <ClimasFrioComponent/>
    <ClimasComponent/>
    <ClimasQuenteComponent/>
    <!-- <RouterView /> -->
  </main>
    <FooterComponent/>
    <!---->
    <CriarComponent/>
</template>
<style scoped>

</style>
