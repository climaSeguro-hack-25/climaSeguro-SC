<script setup>
</script>
<template>
  <section class="SobreNosBanner">
      <h2>
        CLIMA SEGURO - SC
      </h2>
      <h3>Sobre Nós</h3>
     </section>
</template>
<style scoped>
/*====================================
            BANNER
=====================================*/
.SobreNosBanner{
  min-height: 100vh;
  width: 100%;
  background: url("/public/img-bannerSobreNos.png") no-repeat center center/cover;
  position: relative;
  box-shadow: 0 0 75px rgba(0, 0, 0, 0.8);
}
h2{
  /*Posição*/
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /*Decoração*/
  font-size: 4rem;
  color: white;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.8);
  /*Fundo*/
  background-color: rgba(0, 0, 0, 0.4);
  padding: 0 4vw;
  border-radius: 3rem;
}
h3{
  /*Posição*/
  position: absolute;
  top: 64%;
  left: 50%;
  transform: translate(-50%, -50%);
  /*Decoração*/
  font-size: 4rem;
  color: white;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.8);
  /*Fundo*/
  background-color: rgba(0, 0, 0, 0.4);
  padding: 0 4vw;
  border-radius: 3rem;
}
</style>
