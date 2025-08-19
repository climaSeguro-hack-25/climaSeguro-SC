<script setup>

import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import BannerComponent  from '@/components/BannerComponent.vue';
import SelectComponent from '@/components/SelectComponent.vue';
import ClimaHojeComponent from '@/components/ClimaHojeComponent.vue';
import SobreComponent from '@/components/SobreComponent.vue';

</script>
<template>
  <header>
    <HeaderComponent/>
  </header>
  <main>
    <BannerComponent/>
    <SelectComponent/>
    <ClimaHojeComponent/>
    <SobreComponent/>
  </main>
  <footer>
    <FooterComponent/>
  </footer>
</template>
<style scoped>

</style>
