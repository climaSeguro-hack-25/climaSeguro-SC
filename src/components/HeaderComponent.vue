<script setup>
</script>
<template>
  <header>
    <h1 class="logo">
      <a href="#">
        <img src="/public/logo.png" alt="logo">
      </a>
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
          <a href="#" class="logo">
            <img src="/public/logo.png" alt="logo">
          </a>
          <ul class="menu-list">
            <li class="white"><a href="#"> Home</a></li>
            <li class="white">
              <a href="#"> Hoje</a>
            </li>
            <li class="notificacao">
              <a href="#">
                <input type="checkbox" id="notificacao-toggle" />
                <label for="notificacao-toggle" class="notificacao-icon">
                  <div class="comAlerta">
                    <i class="fa-regular fa-bell"></i>
                  </div>
                  <div class="semAlerta">
                    <i class="fa-regular fa-bell-slash"></i>
                  </div>
                </label>
              </a>
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
				HEADER
=====================================*/
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
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
      margin: 0 40vw;
      border: 2px solid;
      border-image: linear-gradient(to bottom, white, black)1;


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
          text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.8);
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
  transition: all 0.5s ease;
}

.menu-icon:hover .linha {
  background: #000000;
}

div.linha {
  height: 4px;
  background: #ffffff;
  border-radius: 2px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.50);
  transition: all 0.5s ease;
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

/*============Estilo menu Notificação===========*/
#notificacao-toggle {
  display: none;
}

.notificacao-icon .comAlerta {
  display: block;
}

.notificacao-icon .semAlerta {
  display: none;
}

#notificacao-toggle:checked+.notificacao-icon .comAlerta {
  display: none;
}

#notificacao-toggle:checked+.notificacao-icon .semAlerta {
  display: block;
}
</style>
