import React, { useState } from 'react'
import { LoginContainer, LoginLogo, StyleLogin } from './styles.jsx'
import LogoSQ from '../../assets/Images/LogoSQ.png'
import AdressCheck from '../../components/SignupAdress/AdressCheck'
import EmailCheck from '../../components/SignupEmail/EmailCheck'
import InfosCheck from '../../components/SignupInfos/InfosCheck'
import { IoIosArrowBack } from 'react-icons/io'
import { BackHome } from '../../styles/CommunsStyles.jsx'
import { SignupContext } from '../../Provider/Signup.provider.jsx'

const SignIn = () => {
  //states to hange components
  const [info, setInfo] = useState(false)
  const [address, setAddress] = useState(false)
  const [email, setEmail] = useState(true)

  const [emailSignup, setEmailSignup] = useState('')
  const [passwordSignup, setPasswordSignup] = useState('')
  const [nameSignup, setNameSignup] = useState('')
  const [docSignup, setDocSignup] = useState('')
  const [cellNumberSignup, setCellNumberSignup] = useState('')

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
  const handleFinish = e => {
    e.preventDefault()

    console.log(dataSignup)
  }
  //change components
  const handleScreens = () => {
    if (address)
      return <AdressCheck nextStep={handleFinish} prevStep={handleInfos} />
    if (info)
      return <InfosCheck nextStep={handleAddress} prevStep={handleEmail} />
    if (email) return <EmailCheck nextStep={handleInfos} />
  }

  const dataSignup = {
    emailSignup,
    passwordSignup,
    nameSignup,
    docSignup,
    cellNumberSignup
  }
  return (
    <SignupContext.Provider
      value={{
        emailSignup,
        setEmailSignup,
        passwordSignup,
        setPasswordSignup,
        nameSignup,
        setNameSignup,
        docSignup,
        setDocSignup,
        cellNumberSignup,
        setCellNumberSignup
      }}
    >
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
    </SignupContext.Provider>
  )
}

export default SignIn
