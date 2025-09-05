<script setup>
import { ref, onMounted, computed } from "vue";

const weather = ref(null);

onMounted(async () => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=-26.3753&lon=-48.7183&units=metric&appid=e0f01069437f3d0fc36c33301bd037b1&lang=pt_br`;
  const res = await fetch(url);
  const data = await res.json();
  weather.value = data.list[0];
});

const timePart = computed(() => weather.value ? weather.value.dt_txt.split(" ")[1] : "");

const bgClass = computed(() => {
  if (!weather.value) return "loading";
  const temp = weather.value.main.temp;
  if (temp <= 15) {
    return "frio";
  } else if (temp <= 25) {
    return "agradavel";
  } else{
    return "quente";
  }
});
</script>

<template>
  <section>
    <div :class="['container', bgClass]">

      <div v-if="weather">
        <p class="hora">{{ timePart }}</p>
        <h2 class="temperatura">{{ weather.main.temp }}°C</h2>
        <h3 class="umidade">{{ weather.main.humidity }}<i class="mdi mdi-water-percent"></i></h3>

      </div>
      <div v-else>
        <p class="carregar">Carregando...</p>
      </div>
    </div>
  </section>
</template>
<style scoped>
/* estilos personalizados */
.frio {
  min-height: 100vh;
  width: 100%;
  background: url("/public/img-frio.png") no-repeat center center/cover;
  position: relative;
  box-shadow: 0 0 75px rgba(0, 0, 0, 0.8);

  & .temperatura {
    /*Posição*/
    position: absolute;
    top: 40%;
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
    top: 48%;
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
    top: 53%;
    left: 49%;
    transform: translate(-50%, -50%);
    /*Decoração*/
    font-size: 2rem;
    color: #2F5D8C;
    text-shadow: 0 0 10px rgba(0, 0, 0, 1);
  }
}
.agradavel {
  min-height: 100vh;
  width: 100%;
  background: url("/public/img-agradavel.png") no-repeat center center/cover;
  position: relative;
  box-shadow: 0 0 75px rgba(0, 0, 0, 0.8);

  & .temperatura {
    /*Posição*/
    position: absolute;
    top: 40%;
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
    top: 48%;
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
    top: 53%;
    left: 49%;
    transform: translate(-50%, -50%);
    /*Decoração*/
    font-size: 2rem;
    color: #79C49E;
    text-shadow: 0 0 10px rgba(0, 0, 0, 1);
  }
}
.quente {
  min-height: 100vh;
  width: 100%;
  background: url("/public/img-quente.png") no-repeat center center/cover;
  position: relative;
  box-shadow: 0 0 75px rgba(0, 0, 0, 0.8);

  & .temperatura {
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

  & .umidade {
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

  .hora {
    /*Posição*/
    position: absolute;
    top: 53%;
    left: 49%;
    transform: translate(-50%, -50%);
    /*Decoração*/
    font-size: 2rem;
    color: #A20000;
    text-shadow: 0 0 10px rgba(0, 0, 0, 1);
  }
}
.loading {
  min-height: 100vh;
  width: 100%;
  position: relative;
  box-shadow: 0 0 75px rgba(0, 0, 0, 0.8);
  .carregar {
    /*Posição*/
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    /*Decoração*/
    font-size: 5rem;
    color: #000000;
    text-shadow: -7px 10px 20px rgba(0, 0, 0, 1);
  }
}
</style>
