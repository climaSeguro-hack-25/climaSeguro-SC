<script setup>
</script>
<template>
  <section class="fazerLogin">
    <div class="fundo">
      <div class="letreiro">
        <h2 class="logo">
          <RouterLink to="/">
            <img src="/public/logo.png" alt="logo" class="logo-img">
          </RouterLink>
        </h2>
        <h3>
          Fazer Login
        </h3>
      </div>
      <div class="login">
        <button class="Criar">
          <RouterLink to="/criar">
            <span class="link">
              Criar Conta
            </span>
          </RouterLink>
        </button>
        <div class="email">
          <label for="email" class="text">e-mail:
            <input type="email" id="email" name="email" placeholder="username@email.com" class="caixa" required>
          </label>
        </div>
        <div class="senha">
          <label for="password" class="text">Senha:
            <input type="password" id="password" name="password" placeholder="*********" class="caixa" required>
          </label>
          <RouterLink to="#" class="esqueci">Esqueceu sua senha?</RouterLink>
        </div>
        <button type="submit" class="entrar">Entrar</button>
      </div>
    </div>
  </section>
</template>
<style scoped>
.fazerLogin {
  background: linear-gradient(-135deg, #5DADE2, #AED6F1, #ffffff, #FFF3C2, #E67E22);
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  & .fundo {
    background-color: #ffffff;
    border-radius: 50px;
    display: flex;
    box-shadow: 0 0 75px rgba(0, 0, 0, 0.8);
    padding: 5vw;
    gap: 40px;

    & .letreiro {
      margin: 20px;

      & .logo {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;

        & .logo-img {
          width: 90px;
          margin-top: 10px;
        }
      }

      & h3 {
        font-size: 35px;
        text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.8);
      }
    }

    & .login {
      display: flex;
      flex-direction: column;

      & .Criar {
        background: #ffffff;
        border: #164969 1.5px solid;
        border-radius: 10px;
        margin: 20px;
        padding: 10px;
        font-family: 'Julius Sans One', sans-serif;
        transition: all 0.7s ease;
        cursor: pointer;

        & .link {
          font-size: 15px;
          color: #164969;
        }
      }

      & .Criar:hover {
        background: #164969;

        & .link {
          color: #ffffff;
        }
      }

      & div {
        margin: 10px;
        display: flex;
        flex-direction: column;

        & .text {
          font-size: 20px;
          color: #000000;

          & .caixa {
            border: #776D6D 1.5px solid;
            border-radius: 10px;
            padding: 10px;
            color: #1E1E1E;
          }

          & .caixa::placeholder {
            color: #1E1E1E;
            opacity: 1;
            font-family: 'Julius Sans One', sans-serif;
            font-size: 15px;
          }
        }

        & .esqueci {
          font-size: 10px;
          color: #164969;
        }
      }

      & .entrar {
        background: #164969;
        border: #164969 1.5px solid;
        border-radius: 10px;
        color: #ffffff;
        font-family: 'Julius Sans One', sans-serif;
        font-size: 15px;
        padding: 10px 20px;
        cursor: pointer;
        transition: all 0.7s ease;
      }

      & .entrar:hover {
        background: #ffffff;
        color: #164969;
      }
    }
  }
}
</style>
