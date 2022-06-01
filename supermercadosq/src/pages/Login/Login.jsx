import React from 'react'
import { LoginContainer, LoginForm, LoginLogo, StyleLogin } from './styles.jsx'
import LogoSQ from '../../assets/Images/LogoSQ.png'
import { IoIosArrowBack } from 'react-icons/io';

const Login = () => {
  return (
    <StyleLogin>
      <LoginContainer>
        <LoginForm>
          <h1>Entre</h1>
          <p>
            E não perca mais nada sobre os vários produtos e seus respectivos
            componentes.
          </p>
          <form>
            <label>
              <span>Email</span>
              <input type="email" name="email" id="email" />
            </label>

            <label>
              <span>Senha</span>
              <input type="password" name="password" id="password" />
            </label>
            
            <label id="keepConnected">
              <input type="checkbox" name="keepConnected" id="keepConnected" />
              <span>Manter conectado</span>
            </label>
            <div className="actions">
              <span>
                Ainda não possui uma conta? <a href="/register">Criar Conta</a>
              </span>
              <button>Entrar</button>
            </div>
          </form>
          <span id='backHome'><IoIosArrowBack id='icon'/><a href="/">Página Inicial</a></span>
        </LoginForm>

        <LoginLogo>
          <img
            src={LogoSQ}
            alt="Logo do Supermercado SQ, dentro do Q possui um carrinho de compras, com algumas bolinhas nas cores rosa, laranja, azul, marrom e verde."
          />
        </LoginLogo>
      </LoginContainer>
    </StyleLogin>
  )
}

export default Login
