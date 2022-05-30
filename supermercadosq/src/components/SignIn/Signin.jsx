import React from 'react'
import { LoginContainer, LoginLogo, StyleLogin } from './styles.jsx'
import LogoSQ from '../../assets/Images/LogoSQ.png'
import InfosCheck from './Inputs/InfosCheck'

const Login = () => {
  return (
    <StyleLogin>
      <LoginContainer>
        <LoginLogo>
          <img
            src={LogoSQ}
            alt="Logo do Supermercado SQ, dentro do Q possui um carrinho de compras, com algumas bolinhas nas cores rosa, laranja, azul, marrom e verde."
          />
        </LoginLogo>
        <InfosCheck />
      </LoginContainer>
    </StyleLogin>
  )
}

export default Login
