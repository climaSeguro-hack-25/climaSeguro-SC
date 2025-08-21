<script setup>

import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import BannerSobreNosComponent from '@/components/sobreNos/BannerSobreNosComponent.vue';
import ObjetivoComponent from '@/components/sobreNos/objetivoComponent.vue';
import equipeComponent from '@/components/sobreNos/equipeComponent.vue';
/*import BannerComponent  from '@/components/BannerComponent.vue';
import SelectComponent from '@/components/SelectComponent.vue';
import ClimaHojeComponent from '@/components/ClimaHojeComponent.vue';
import SobreComponent from '@/components/SobreComponent.vue';
*/
</script>
<template>
  <header>
    <HeaderComponent/>
  </header>
  <main>
    <BannerSobreNosComponent/>
    <ObjetivoComponent/>
    <equipeComponent/>
    <!--
    <BannerComponent/>
    <SelectComponent/>
    <ClimaHojeComponent/>
    <SobreComponent/>
    -->

  </main>
  <footer>
    <FooterComponent/>
  </footer>
</template>
<style scoped>

</style>
