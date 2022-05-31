import React from 'react'
import { LoginContainer, LoginLogo, StyleLogin } from './styles.jsx'
import LogoSQ from '../../assets/Images/LogoSQ.png'
import AdressCheck from './Inputs/AdressCheck'

const SignIn = () => {
  return (
    <StyleLogin>
      <LoginContainer>
        <LoginLogo>
          <img
            src={LogoSQ}
            alt="Logo do Supermercado SQ, dentro do Q possui um carrinho de compras, com algumas bolinhas nas cores rosa, laranja, azul, marrom e verde."
          />
        </LoginLogo>
        <AdressCheck />
      </LoginContainer>
    </StyleLogin>
  )
}

export default SignIn
