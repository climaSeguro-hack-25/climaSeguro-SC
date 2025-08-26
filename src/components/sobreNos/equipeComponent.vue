<script setup>
</script>
<template>
  <section class="equipe">
    <div class="titulo">
      <h2>Nossa Equipe</h2>
    </div>
    <div class="nossaEquipe">
      <div class="membro">
        <!-- ROBERTA RIBEIRO -->
        <p>
          <img src="/public/provisorio.png" alt="roberta">
        </p>
        <div class="seperar">
          <h3>Roberta Ribeiro</h3>
          <input type="checkbox" id="recolhivelRoberta" />
          <label for="recolhivelRoberta" class="recolhivelRoberta-icon">
            <i class="mdi mdi-chevron-up"></i>
          </label>
          <div class="sobre">
            <p>Turma: <span class="resposta">2Info2</span></p>
            <p>Github: <span class="resposta">roberta2212</span></p>
            <p>Email: <span class="resposta">robertaapbeta2212@gmail.com</span></p>
          </div>
        </div>
      </div>

      <div class="membro">
        <!-- SARA SCHULZ -->
        <p>
          <img src="/public/saraSchulz.png" alt="sara">
        </p>
        <div class="seperar">
          <h3>Sara Schulz</h3>
          <input type="checkbox" id="recolhivelSara" />
          <label for="recolhivelSara" class="recolhivelSara-icon">
            <i class="mdi mdi-chevron-up"></i>
          </label>
          <div class="sobre">
            <p>Turma: <span class="resposta">2Info2</span></p>
            <p>Github: <span class="resposta">saraSchulz</span></p>
            <p>Email: <span class="resposta">sara.ifc2024@gmail.com</span></p>
          </div>
        </div>
      </div>

      <div class="membro">
        <!-- YASMIN KAUANY DE OLIVEIRA -->
        <p>
          <img src="/public/yasminOliveira.png" alt="sara">
        </p>
        <div class="seperar">
          <h3>Yasmin Kauany de Oliveira</h3>
          <input type="checkbox" id="recolhivelYasmin" />
          <label for="recolhivelYasmin" class="recolhivelYasmin-icon">
            <i class="mdi mdi-chevron-up"></i>
          </label>
          <div class="sobre">
            <p>Turma: <span class="resposta">2Info2</span></p>
            <p>Github: <span class="resposta">YasminKauanydeOliveira</span></p>
            <p>Email: <span class="resposta">yass.oliveiraifc@gmail.com</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="space">

    </div>
  </section>
</template>
<style scoped>
.equipe {
  width: 100%;
  text-align: center;

  & .titulo {
    margin: 2vw 0;
    font-size: 2rem;
    padding: 2rem 0;
    text-shadow: 0 4px 7px rgba(0, 0, 0, 0.8);
  }

  & .nossaEquipe {
    background: #FFFAEE;
    padding: 2vw 3vw;
    box-shadow: 0 0 75px rgba(0, 0, 0, 0.8);
    align-items: center;
    display: flex;

    & .membro {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3rem;
      margin: 20px;
      & h3{
        text-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
      }
      & label{
        cursor: pointer;
        color: #154360;
        font-size: 1.5rem;
        transition: color 0.3s ease;
        text-shadow: 4px 4px 20px rgba(0, 0, 0, 0.8);
        background: rgba(0, 0, 0, 0.35);
        padding:  0 7px;
        border-radius: 20px;
        transition: all 0.5s ease;
        display: inline-block;
      }
      & label:hover{
        color: #C0392B;
        background: rgba(255, 255, 255, 0.35);
      }
      & .sobre {
        background: #ffffff;
        padding: 10px;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
        border-radius: 10px;
        & p{
          margin: 10px 0;
          font-weight: bold;
          font-size: 20px;
          text-shadow: 0 4px 30px rgba(0, 0, 0, 0.8);
          & .resposta {
            font-size: 17px;
            color: #154360;
          }
        }
      }
    }
  }
}
.sobre {
  transform: scale(0);
  transition: transform 0.5s ease-in-out;
}
.equipe {
  transition: all 0.5s ease;
  font-size: 20px;
}

/*recolhivel Roberta */
#recolhivelRoberta {
  display: none;
}
#recolhivelRoberta:checked~.sobre {
  transform: scale(1);
}
#recolhivelRoberta:checked + label {
  transform: rotate(180deg);
  color: #C0392B;
  background: rgba(255, 255, 255, 0.35);
}
/*recolhivel Sara */
#recolhivelSara {
  display: none;
}
#recolhivelSara:checked~.sobre {
  transform: scale(1);
}
#recolhivelSara:checked + label {
  transform: rotate(180deg);
  color: #C0392B;
  background: rgba(255, 255, 255, 0.35);
}
/*recolhivel Yasmin */
#recolhivelYasmin {
  display: none;
}
#recolhivelYasmin:checked~.sobre {
  transform: scale(1);
}
#recolhivelYasmin:checked + label {
  transform: rotate(180deg);
  color: #C0392B;
  background: rgba(255, 255, 255, 0.35);
}
.space{
  width: 100%;
  padding: 4rem 0;
}
</style>
