<script setup>
</script>
<template>
  <section class="select">
    <ul>
      <li>
        <a href="#">
          Nossa História
        </a>
      </li>
      <li>
        <a href="#">
          Temperatura Atual
        </a>
      </li>

      <li>
        <a href="#">
          Alertas de Chuva
        </a>
      </li>
    </ul>
  </section>
</template>
<style scoped>
/*====================================
            SELECT
=====================================*/
.select {
  width: 100%;
  padding: 4rem 2rem;

  & ul {
    display: flex;
    justify-content: space-around;
    gap: 2rem;
    padding: 1rem;

    & li {
      font-size: 2rem;
    }
  }
}
/*====================================
        pedir ajuda ICONES
=====================================*/
</style>
