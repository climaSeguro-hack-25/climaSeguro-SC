<script setup>
/*Header/Footer*/
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
/*Home page
import BannerHomeComponent  from '@/components/home/BannerHomeComponent.vue';
import SelectComponent from '@/components/home/SelectComponent.vue';
import ClimaHojeComponent from '@/components/home/ClimaHojeComponent.vue';
import SobreComponent from '@/components/home/SobreComponent.vue';*/
/*Sobre page
import BannerSobreNosComponent from '@/components/sobreNos/BannerSobreNosComponent.vue';
import ObjetivoComponent from '@/components/sobreNos/objetivoComponent.vue';
import equipeComponent from '@/components/sobreNos/equipeComponent.vue';*/
/**/
import AlertaComponent from './components/alerta/AlertaComponent.vue';
</script>
<template>
    <HeaderComponent/>
  <main><!--
    <RouterView />
    -->
    <AlertaComponent/>
  </main>
    <FooterComponent/>
</template>
<style scoped>

</style>
