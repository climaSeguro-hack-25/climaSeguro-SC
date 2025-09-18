<script setup>
import { ref, computed } from "vue";

const weather = ref(null);
const cidadeSelecionada = ref("");
const cidades = [
  {nome: "Vale da Morte(EUA - quente)", lat: 36.5323, lon: -116.9325 },
  { nome: "Balneário Barra do Sul", lat: -26.4608, lon: -48.6114 },
  { nome: "Balneário Camboriú", lat: -26.9926, lon: -48.6352 },
  { nome: "Blumenau", lat: -26.9189, lon: -49.0653 },
  { nome: "Campo Alegre", lat: -26.1958, lon: -49.2675 },
  { nome: "Corupá", lat: -26.425, lon: -49.2467 },
  { nome: "Florianópolis", lat: -27.5949, lon: -48.5482 },
  { nome: "Garuva", lat: -26.0294, lon: -48.8527 },
  { nome: "Guaramirim", lat: -26.4743, lon: -49.0025 },
  { nome: "Itajaí", lat: -26.9101, lon: -48.6705 },
  { nome: "Itapoá", lat: -26.1158, lon: -48.6182 },
  { nome: "Jaraguá do Sul", lat: -26.4851, lon: -49.0661 },
  { nome: "Joinville", lat: -26.3045, lon: -48.8487 },
  { nome: "Massaranduba", lat: -26.6125, lon: -49.005 },
  { nome: "Navegantes", lat: -26.8946, lon: -48.6546 },
  { nome: "Penha", lat: -26.7697, lon: -48.6453 },
  { nome: "Pomerode", lat: -26.7406, lon: -49.1786 },
  { nome: "Rio Negrinho", lat: -26.2594, lon: -49.5189 },
  { nome: "São Bento do Sul", lat: -26.2495, lon: -49.3833 },
  { nome: "São Francisco do Sul", lat: -26.2433, lon: -48.6383 },
  { nome: "Schroeder", lat: -26.4123, lon: -49.0733 }
];

async function buscarClima() {
  if (!cidadeSelecionada.value) return;
  const cidade = cidades.find(c => c.nome === cidadeSelecionada.value);
  if (!cidade) return;

  const apiKey = "e0f01069437f3d0fc36c33301bd037b1";
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${cidade.lat}&lon=${cidade.lon}&units=metric&appid=${apiKey}&lang=pt_br`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    weather.value = data.list[0];
  } catch (err) {
    console.error("Erro ao buscar clima:", err);
  }
}

const timePart = computed(() => weather.value ? weather.value.dt_txt.split(" ")[1] : "");

const bgClass = computed(() => {
  if (!weather.value) return "select";
  const temp = weather.value.main.temp;
  if (temp <= 15) return "frio";
  else if (temp <= 25) return "agradavel";
  else return "quente";
});
</script>

<template>
  <section class="geral">
    <div :class="['container', bgClass]">

      <div v-if="weather">
        <h1 class="cidade">{{ cidadeSelecionada }}</h1>
        <p class="hora">{{ timePart }}</p>
        <h2 class="temperatura">{{ weather.main.temp }}°C</h2>
        <h3 class="umidade">{{ weather.main.humidity }}% <i class="mdi mdi-water-percent"></i></h3>
      </div>

      <div class="select-container">
        <select v-model="cidadeSelecionada" @change="buscarClima">
          <option disabled value="">🌍 Selecione uma cidade</option>
          <option v-for="c in cidades" :key="c.nome" :value="c.nome">{{ c.nome }}</option>
        </select>
      </div>
    </div>
  </section>
</template>
<style scoped>
.geral {
  background: url(/public/selectCit-img.png) no-repeat center center/cover;
  position: relative;
  min-height: 100vh;
  width: 100%;

  & .select-container {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);


    & select {
      padding: 10px;
      font-size: 1.2rem;
      border-radius: 10px;
      border: 2px solid #164969;
      background: #164969;
      color: #ffffff;
      cursor: pointer;
      font-family: 'Julius Sans One';
      box-shadow: 0 4px 25px rgba(0, 0, 0, 0.8);
      text-align: center;
      transition: all 0.8s ease;
    }

    & select:hover {
      background: #E8F7FF;
      color: #164969;
    }
  }

  /* estilos personalizados */
  & .frio {
    min-height: 100vh;
    width: 100%;
    background: url("/public/img-frio.png") no-repeat center center/cover;
    position: relative;
    box-shadow: 0 0 75px rgba(0, 0, 0, 0.8);

    & .cidade {
      /*Posição*/
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      /*Decoração*/
      font-size: 2rem;
      color: #2F5D8C;
      text-shadow: -7px 10px 20px rgba(0, 0, 0, 1);
    }

    & .temperatura {
      /*Posição*/
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
      /*Decoração*/
      font-size: 7rem;
      color: #2F5D8C;
      text-shadow: -7px 10px 20px rgba(0, 0, 0, 1);
    }

    & .umidade {
      /*Posição*/
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      /*Decoração*/
      font-size: 4rem;
      color: #2F5D8C;
      text-shadow: -7px 10px 20px rgba(0, 0, 0, 1);
    }

    .hora {
      /*Posição*/
      position: absolute;
      top: 61%;
      left: 49%;
      transform: translate(-50%, -50%);
      /*Decoração*/
      font-size: 2rem;
      color: #2F5D8C;
      text-shadow: 0 0 10px rgba(0, 0, 0, 1);
    }
  }

  & .agradavel {
    min-height: 100vh;
    width: 100%;
    background: url("/public/img-agradavel.png") no-repeat center center/cover;
    position: relative;
    box-shadow: 0 0 75px rgba(0, 0, 0, 0.8);

     & .cidade {
      /*Posição*/
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      /*Decoração*/
      font-size: 2rem;
      color: #79C49E;
      text-shadow: -7px 10px 20px rgba(0, 0, 0, 1);
     }
    & .temperatura {
      /*Posição*/
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
      /*Decoração*/
      font-size: 7rem;
      color: #79C49E;
      text-shadow: -7px 10px 20px rgba(0, 0, 0, 1);
    }

    & .umidade {
      /*Posição*/
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      /*Decoração*/
      font-size: 4rem;
      color: #79C49E;
      text-shadow: -7px 10px 20px rgba(0, 0, 0, 1);
    }

    .hora {
      /*Posição*/
      position: absolute;
      top: 61%;
      left: 49%;
      transform: translate(-50%, -50%);
      /*Decoração*/
      font-size: 2rem;
      color: #79C49E;
      text-shadow: 0 0 10px rgba(0, 0, 0, 1);
    }

    & select{
      border: 2px solid #79C49E;
      background: #79C49E;
    }
  }

  & .quente {
    min-height: 100vh;
    width: 100%;
    background: url("/public/img-quente.png") no-repeat center center/cover;
    position: relative;
    box-shadow: 0 0 75px rgba(0, 0, 0, 0.8);

    & .cidade{
      /*Posição*/
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      /*Decoração*/
      font-size: 2rem;
      color: #A20000;
      text-shadow: -7px 10px 20px rgba(0, 0, 0, 1);
    }
    & .temperatura {
      /*Posição*/
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
      /*Decoração*/
      font-size: 7rem;
      color: #A20000;
      text-shadow: -7px 10px 20px rgba(0, 0, 0, 1);
    }

    & .umidade {
      /*Posição*/
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      /*Decoração*/
      font-size: 4rem;
      color: #A20000;
      text-shadow: -7px 10px 20px rgba(0, 0, 0, 1);
    }

    .hora {
      /*Posição*/
      position: absolute;
      top: 61%;
      left: 49%;
      transform: translate(-50%, -50%);
      /*Decoração*/
      font-size: 2rem;
      color: #A20000;
      text-shadow: 0 0 10px rgba(0, 0, 0, 1);
    }

    & select{
      border: 2px solid #A20000;
      background: #A20000;
    }
  }
}
</style>
