<script setup>
</script>
<template>
  <section class="alerta">
    <div class="texto">
      <h2>
        gostarias de receber nossos alertas?
      </h2>
      <div class="botoes">
        <button class="sim">Sim</button>
        <button class="nao">Não, Obrigado</button>
      </div>
    </div>
    <div class="icone">
      <img src="/public/bell.png" alt="Alertas">
    </div>
  </section>
</template>
<style scoped>
.alerta {
  background: linear-gradient(-135deg, #164969, #ffffff, #e67e22);
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
}

&.texto {
  max-width: 600px;
  color: #000;


  & h2 {
    font-size: 2.5rem;
    line-height: 1.3;
    margin-bottom: 2rem;
  }

}

.icone img {
  width: 200px;
  height: auto;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.3));
}
</style>
