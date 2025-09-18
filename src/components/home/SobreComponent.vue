<script setup>
</script>
<template>
  <section class="sobre">
    <p>
      O Clima Seguro – SC é um projeto desenvolvido para o Hackathon 2025, com o objetivo de fornecer previsões do tempo, alertas climáticos e informações em tempo real para aumentar a segurança da população joinvilense
    </p>
    <RouterLink to="/equipe">
      <button>
        Saiba mais...
      </button>
    </RouterLink>
  </section>
</template>
<style scoped>
.sobre{
  padding: 2vw 3rem;
  text-align: center;
  & p{
    margin: 2vw 17vw;
    font-size: 1.5rem;
  }
  & button{
    background-color: #164969;
    padding: 20px;
    border-radius: 40px;
    border: #164969 2px solid;
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.8);
    transition: all 0.8s ease ;
    cursor: pointer;
    color: #ffffff;
    font-weight: bold;
  }
  & button:hover{
    background-color: #E8F7FF;
    color: #164969;
  }
}
</style>
