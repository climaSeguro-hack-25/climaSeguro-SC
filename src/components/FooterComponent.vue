<script setup>
</script>
<template>
  <footer>
    <div class="maior">
      <div class="redesSociais">
        <ul>
          <p>
          Redes Sociais:
          </p>
          <li>
            <a href="https://www.instagram.com/clima_seguro.ifc/">
              <i class="mdi mdi-instagram"></i>
              clima_seguro.ifc
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=61579871360977">
              <i class="mdi mdi-facebook"></i>
              Clima Seguro - IFC
            </a>
          </li>
        </ul>
      </div>

      <div class="contato">
        <ul>
          <p>
          Contato
          </p>
          <li>
            <i class="mdi mdi-email"></i>
            climasegurosc@gmail.com
          </li>
          <li>
            <i class="mdi mdi-phone-classic"></i>
            +55 (47) 99206-7618
          </li>
        </ul>
      </div>
    </div>
    <div class="direitos">
      <p>
        &copy; Alguns direitos reservados. Clima Seguro - SC 2025
      </p>
      <p>
        desenvolvido por:<br>Roberta Ribeiro<br>Sara Schulz<br>Yasmin kauany de oliveira
      </p>
    </div>
  </footer>
</template>
<style scoped>
footer {
  background: linear-gradient(#164969, #FFF3C2);
  border-radius: 20px;
  box-shadow: 0 0 75px rgba(0, 0, 0, 0.8);
  padding: 2rem 0;

  & .maior {
    display: flex;
    justify-content: space-around;

    & li {
      margin: 20px 10px;
      font-size: 1.5rem;
    }
    & p {
      font-size: 1.5rem;
      color: #ffffff;
    }
}
  & .direitos{
    display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 10px;
  margin-top: 1rem;

  color: #000000;
  }
}
</style>
