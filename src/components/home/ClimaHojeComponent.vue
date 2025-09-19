<script setup>
</script>
<template>
  <section class="climaHoje">
    <RouterLink to="/clima">
      <img src="/public/quadro-clima.png" alt="Climas">
    </RouterLink>
    <RouterLink to="/clima">
      <h2>
      <button>
        Clima Hoje
      </button>
      </h2>
    </RouterLink>
  </section>
</template>
<style scoped>
.climaHoje{
  background: linear-gradient(to bottom, #164969 ,#5BB0D0 ,#164969);
  border-radius: 20px;
  box-shadow: 0 0 75px rgba(0, 0, 0, 0.8);
  padding: 3rem;
   display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  & img{
  background: linear-gradient(135deg, #FFF2C9, #C4F1FF);
  box-shadow: 0 0 75px rgba(0, 0, 0, 0.8);
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
  border-radius: 30px;

  }
  & button{
      font-size: 2.5rem;
      color:#ffffff;
      box-shadow: 0 0 75px rgba(0, 0, 0, 0.8);
      background: rgba(0, 0, 0, 0.4);
      padding: 0.5vw 4vw;
      border-radius: 40px;
      margin: 0 10vw;
      border:none;
      transition: all 0.8s ease ;
  }
  & button:hover{
    background: rgba(255, 255, 255, 0.6);
    color: #164969;
  }
}
</style>
