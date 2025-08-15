<script setup>

</script>
<template>
  <header>

  </header>
  <header>
    <h1>
      <img src="/public/logo.png" alt="logo">
    </h1>

    <div class="menu-hamburguer">
      <input type="checkbox" id="menu-toggle" />
      <label for="menu-toggle" class="menu-icon">
        <div class="linha"></div>
        <div class="linha"></div>
        <div class="linha"></div>
      </label>
      <div class="overlay">
        <nav class="menu">

          <ul class="menu-list">
            <li class="white"><a href="#">Home</a></li>
            <li class="white">
              <a href="#">Hoje</a>
            </li>
            <li class="notificacao">
              <input type="checkbox" id="notificacao-toggle" />
              <label for="notificacao-toggle" class="notificacao-icon">

              </label>
            </li>
            <li>
              <a href="#">Sobre nós</a>
            </li>
            <li>
              <a href="#"> <i class="fa-regular fa-circle-user"></i> Fazer Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <main>

  </main>
</template>

<style scoped>
/*====================================
				GERAL
=====================================*/
a {
  text-decoration: none;
  color: black;
}

body {

  background-color: rgb(255, 255, 255);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/*====================================
				HEADER
=====================================*/
header {
  display: flex;
  background: rgba(0, 0, 0, 0.20);

  & h1 img {
    margin: 0 20px;

  }

  /*============Estilo menu===========*/
  & .menu {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    text-align: center;
    width: 100%;

    & ul.menu-list {
      list-style: none;
      padding: 0;
      margin: 0;

      & li {
        display: flex;
        margin: 20px 0;
        justify-content: center;
        align-items: center;
        margin: 20px;

        & a {
          text-decoration: none;
          font-size: 2rem;
          color: #000000;
          transition: color 0.5s ease;
          text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.788);
        }

        & a:hover {
          color: #ffffff;
        }

      }

      & li.white a {
        color: #ffffff;

      }
      & li.white a:hover {
          color: #000000;
      }
    }
  }
}

/*============Estilo menu hamburguer===========*/
.menu-hamburguer {
  position: absolute;
  top: 40px;
  right: 40px;
  z-index: 4;
}

#menu-toggle {
  display: none;
}

.menu-icon {
  width: 35px;
  height: 30px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 5;
  position: relative;
}

div.linha {
  height: 4px;
  background: #ffffff;
  border-radius: 2px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.50);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #164969 0%, #FFF3C2 100%);
  transform: scale(0);
  transition: transform 0.5s ease-in-out;
  z-index: 2;
}

#menu-toggle:checked~.overlay {
  transform: scale(1);
}
</style>
