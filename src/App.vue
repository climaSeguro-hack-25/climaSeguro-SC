<script setup>

import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import BannerSobreNosComponent from '@/components/sobreNos/BannerSobreNosComponent.vue';
import ObjetivoComponent from '@/components/sobreNos/objetivoComponent.vue';
import equipeComponent from '@/components/sobreNos/equipeComponent.vue';
import BannerComponent  from '@/components/home/BannerHomeComponent.vue';
import SelectComponent from '@/components/home/SelectComponent.vue';
import ClimaHojeComponent from '@/components/home/ClimaHojeComponent.vue';
import SobreComponent from '@/components/home/SobreComponent.vue';
/**/
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

    <BannerSobreNosComponent/>
    <ObjetivoComponent/>
    <equipeComponent/>
    <!---->
  </main>
  <footer>
    <FooterComponent/>
  </footer>
</template>
<style scoped>

</style>
