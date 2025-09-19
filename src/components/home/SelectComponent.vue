<script setup>
</script>
<template>
  <section class="select">
    <ul>
      <li>
        <RouterLink to="/equipe">
          <i class="mdi mdi-book-open-blank-variant"></i>
          Nossa História
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/clima">
          <i class="mdi mdi-thermometer"></i>
          Temperatura Atual
        </RouterLink>
      </li>

      <li>
        <RouterLink to="/alerta">
          <i class="mdi mdi-umbrella">
          Alertas de Chuva</i>
        </RouterLink>
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
      text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
      & i{
        text-shadow: 2px 2px 30px rgba(0, 0, 0, 0.8);
      }

    }
  }
}
/*====================================
        pedir ajuda ICONES
=====================================*/
</style>
