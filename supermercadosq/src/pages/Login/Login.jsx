import React, { useState } from 'react'
import {
  LoginContainer,
  LoginForm,
  LoginLogo,
  StyleLogin,
  LabelError,
  Actions
} from './styles.jsx'
import LogoSQ from '../../assets/Images/LogoSQ.png'
import { IoIosArrowBack } from 'react-icons/io';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()

    if (!email && !password) {
      setError('Preencha seus dados')
      return
    }
    if (!email) {
      setError('Preencha seu email')
      return
    }
    if (!password) {
      setError('Preencha sua senha')
      return
    }
    if(email && password){
      
      setError('')
      return
    }
    
  }
  return (
    <StyleLogin>
      <LoginContainer>
        <LoginForm>
          <h1>Entre</h1>
          <p>
            E não perca mais nada sobre os vários produtos e seus respectivos
            componentes.
          </p>
          <form onSubmit={handleLogin}>
            <label>
              <span>Email</span>
              <input
                type="email"
                onChange={e => setEmail(e.target.value)}
                name="email"
                id="email"
              />
            </label>

            <label>
              <span>Senha</span>
              <input
                type="password"
                onChange={e => setPassword(e.target.value)}
                name="password"
                id="password"
              />
            </label>

            <label id="keepConnected">
              <input type="checkbox" name="keepConnected" id="keepConnected" />
              <span>Manter conectado</span>
            </label>
            <LabelError>{error}</LabelError>
          <Actions>
            <span>
              Ainda não possui uma conta? <a href="/register">Criar Conta</a>
            </span>
            <button >Entrar</button>
          </Actions>
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
