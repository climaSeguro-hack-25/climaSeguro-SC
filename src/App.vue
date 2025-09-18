<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>
<template>
    <HeaderComponent/>
  <main>
    <RouterView />
  </main>
    <FooterComponent/>
</template>
<style scoped>

</style>
