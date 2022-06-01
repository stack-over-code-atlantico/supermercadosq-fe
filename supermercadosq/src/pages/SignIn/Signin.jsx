import React, { useState } from 'react'
import { LoginContainer, LoginLogo, StyleLogin } from './styles.jsx'
import LogoSQ from '../../assets/Images/LogoSQ.png'
import AdressCheck from '../../components/Adress/AdressCheck'
import EmailCheck from './Inputs/EmailCheck'
import InfosCheck from './Inputs/InfosCheck'
import { IoIosArrowBack } from 'react-icons/io';

const SignIn = () => {
  const [info, setInfo] = useState(false)
  const [address, setAddress] = useState(false)

  const handleEmail = e => {
    e.preventDefault()
    setAddress(true)
  }
  const handleAddress = e => {
    e.preventDefault()
    setInfo(true)
    setAddress(false)
  }

  const handleScreens =()=>{
    if(address) return (<AdressCheck nextStep={handleAddress}/>)
    if(info) return (<InfosCheck />)
    //default
    return <EmailCheck nextStep={handleEmail}/>
  }

  return (
    <StyleLogin>
      <LoginContainer>
        <LoginLogo>
          <img
            src={LogoSQ}
            alt="Logo do Supermercado SQ, dentro do Q possui um carrinho de compras, com algumas bolinhas nas cores rosa, laranja, azul, marrom e verde."
          />
        <span id='backHome'><IoIosArrowBack id='icon'/><a href="/">Página Inicial</a></span>
        </LoginLogo>
        {handleScreens()}
      </LoginContainer>
    </StyleLogin>
  )
}

export default SignIn
