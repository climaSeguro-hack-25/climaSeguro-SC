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
          Criar Conta
        </h3>
      </div>
      <div class="criar">
        <p class="comentario">
          Já possui uma conta?
        </p>
        <button class="login">
          <RouterLink to="/login">
            <span class="link">
              Fazer Login
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
            <input type="password" id="password" name="password" placeholder="Crie uma senha" class="caixa" required>
          </label>
          <p class="requisito">*Use 8 ou mais letras, números e símbolos</p>
          <label for="password" class="text">confirmar senha:
            <input type="password" id="password" name="password" placeholder="confirme sua senha" class="caixa"
              required>
          </label>
        </div>
        <button type="submit" class="criar">Entrar</button>
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

    & .criar {
      display: flex;
      flex-direction: column;

      & .comentario {
        font-size: 10px;
        color: #164969;
        margin: 20px 20px 0 20px;
      }

      & .login {
        background: #ffffff;
        border: #164969 1.5px solid;
        border-radius: 10px;
        margin: 0 20px 20px 20px;
        padding: 10px;
        font-family: 'Julius Sans One', sans-serif;
        transition: all 0.7s ease;
        cursor: pointer;

        & .link {
          font-size: 15px;
          color: #164969;
        }
      }

      & .login:hover {
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

        & .requisito {
          font-size: 10px;
          color: #A20000
        }
      }

      & .criar {
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

      & .criar:hover {
        background: #ffffff;
        color: #164969;
      }
    }
  }
}
</style>
