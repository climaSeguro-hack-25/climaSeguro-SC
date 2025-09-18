<script setup>
</script>
<template>
  <section class="alerta">
    <div class="texto">
      <h2 class="title">
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


& .texto {
  max-width: 600px;
  color: #000;

  & .title {
    font-size: 60px;
    transition: transform 1s ease;
    display: inline-block;
    text-shadow:  4px 4px 10px rgba(0, 0, 0, 0.8);
    padding: 20px;
    border-radius: 20px;
    margin: 10px;
    transition: all 1s ease;
  }
  & .title:hover{
    transform: scale(1.1);
    box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.8);
  }
  & .botoes{
    display: flex;
    flex-direction: column;
    justify-content: center;
      align-items: center;
    & button{
      background: none;
      border: none;
      font-size: 30px;
      font-family: 'Julius Sans One';
      font-weight: bold;
      transition: all 0.8s ease;
      padding: 10px;
      border-radius: 10px;
    }
    & .sim:hover{
      background: rgba(0, 0, 0, 0.35);
      color: #ffffff;
    transform: scale(1.1);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.8);
    }
    & .nao{
      color: #A20000;

    }
    .nao:hover{
      background: rgba(0, 0, 0, 0.35);
color: #FAD7A0;
    transform: scale(1.1);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.8);
    }
  }

}
  & .icone img {
    width: 100%;
    height: 100%;
  }
}
</style>
