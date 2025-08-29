<script setup>
</script>
<template>
  <section class="banner">
    <h2>26-35°C</h2>
    <h3>%% <i class="mdi mdi-water-percent"></i></h3>
  </section>
</template>
<style scoped>

.banner{
  min-height: 100vh;
  width: 100%;
  background: url("/public/img-quente.png") no-repeat center center/cover;
  position: relative;
  box-shadow: 0 0 75px rgba(0, 0, 0, 0.8);
}
h2{
  /*Posição*/
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  /*Decoração*/
  font-size: 7rem;
  color: #A20000;
  text-shadow: -7px 10px 20px rgba(0, 0, 0, 1);
}
h3{
  /*Posição*/
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  /*Decoração*/
  font-size: 4rem;
  color: #A20000;
  text-shadow: -7px 10px 20px rgba(0, 0, 0, 1);
}
</style>
