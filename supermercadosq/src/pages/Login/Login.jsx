import React, { useState, useEffect } from 'react';
import Cookie from 'js-cookie';
import {
  LoginContainer,
  LoginForm,
  LoginLogo,
  StyleLogin,
  Actions
} from './styles.jsx'
import LogoSQ from '../../assets/images/LogoSQ.png'
import { IoIosArrowBack } from 'react-icons/io'
import { BackHome, LabelError } from '../../styles/CommunsStyles.jsx'
import InputPassword from '../../components/InputPassword/InputPassword.jsx'
import { login } from '../../services/useAuth.jsx';
import { isAfter } from 'date-fns';
import { Loading } from '../../components/LoadingScreen/index.jsx';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
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
    if (email && password) {
      setError('')
      return
    }
  }, [email, password]);

  useEffect(() => {
    if (Cookie.get('token') && Cookie.get('expires')) {
      const expires = new Date(parseInt(Cookie.get('expires'), 10));
      if (isAfter(new Date(), expires)) {
        window.location.replace('/');
      }
    } else {
      setIsLogged(true);
    }
  }, []);

  const handleLogin = e => {
    e.preventDefault();
    const authenticate = login({ email: email, senha: password });
    return authenticate;
  }

  return (
    <>
      {
        !isLogged
          ? (<Loading />)
          : (
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
                      value={email}
                      onKeyPress={e => {
                        if (e.key === 'Enter') {
                          e.preventDefault()
                          return document.getElementById('password').focus()
                        }
                      }}
                    />
                  </label>

                  <label>
                    <span>Senha</span>
                    <InputPassword setValue={setPassword} value={password} />

                  </label>
                  <LabelError>{error}</LabelError>
                  <Actions>
                    <span>
                      Ainda não possui uma conta? <a href="/register">Criar Conta</a>
                    </span>
                    <button>Entrar</button>
                  </Actions>
                </form>
                <BackHome>
                  <IoIosArrowBack id="icon" />
                  <a href="/">Página Inicial</a>
                </BackHome>
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
    </>
  )
}

export default Login
