import React, { useState } from 'react'
import { LoginContainer, LoginLogo, StyleLogin } from './styles.jsx'
import LogoSQ from '../../assets/Images/LogoSQ.png'
import AdressCheck from '../../components/SignupAdress/AdressCheck'
import EmailCheck from '../../components/SignupEmail/EmailCheck'
import InfosCheck from '../../components/SignupInfos/InfosCheck'
import { IoIosArrowBack } from 'react-icons/io'
import { BackHome } from '../../styles/CommunsStyles.jsx'

const SignIn = () => {
  const [info, setInfo] = useState(false)
  const [address, setAddress] = useState(false)
  const [email, setEmail] = useState(true)

  const handleEmail = e => {
    e.preventDefault()
    setEmail(true)
    setInfo(false)
  }
  const handleAddress = e => {
    e.preventDefault()
    setAddress(true)
    setInfo(false)
  }
  const handleInfos = e => {
    e.preventDefault()
    setInfo(true)
    setEmail(false)
    setAddress(false)
  }
  const handleFinish = e =>{
    e.preventDefault()
    alert('fim')
  }

  const handleScreens = () => {
    if (address) return <AdressCheck nextStep={handleFinish} prevStep={handleInfos}/>
    if (info) return <InfosCheck nextStep={handleAddress} prevStep={handleEmail}/>
    if(email) return <EmailCheck nextStep={handleInfos} />
  }

  return (
    <StyleLogin>
      <LoginContainer>
        <LoginLogo>
          <img
            src={LogoSQ}
            alt="Logo do Supermercado SQ, dentro do Q possui um carrinho de compras, com algumas bolinhas nas cores rosa, laranja, azul, marrom e verde."
          />
          <BackHome>
            <IoIosArrowBack id="icon" />
            <a href="/">Página Inicial</a>
          </BackHome>
        </LoginLogo>
        {handleScreens()}
      </LoginContainer>
    </StyleLogin>
  )
}

export default SignIn
