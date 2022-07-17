import React, { useState } from "react";
import { LoginContainer, LoginLogo, StyleLogin } from "./styles.jsx";
import LogoSQ from "../../assets/images/LogoSQ.png";
import AdressCheck from "../../components/SignupAdress/AdressCheck";
import EmailCheck from "../../components/SignupEmail/EmailCheck";
import InfosCheck from "../../components/SignupInfos/InfosCheck";
import { IoIosArrowBack } from "react-icons/io";
import { BackHome } from "../../styles/CommunsStyles.jsx";
import { SignupContext } from "../../Provider/Signup.provider.jsx";
import { useCreateUser } from "../../services/useUser";

const SignIn = () => {
  const [info, setInfo] = useState(false);
  const [address, setAddress] = useState(false);
  const [email, setEmail] = useState(true);
  const [fileSignup, setFileSignup] = useState(null);
  const [emailSignup, setEmailSignup] = useState("");
  const [passwordSignup, setPasswordSignup] = useState("");
  const [nameSignup, setNameSignup] = useState("");
  const [docSignup, setDocSignup] = useState("");
  const [cellNumberSignup, setCellNumberSignup] = useState("");
  const [typeUserSignup, setTypeUserSignup] = useState("");
  const [cepSignup, setCepSignup] = useState("");
  const [streetSignup, setStreetSignup] = useState("");
  const [addressNumberSignup, setAddressNumberSignup] = useState("");
  const [neighborhoodSignup, setNeighborhoodSignup] = useState("");
  const [citySignup, setCitySignup] = useState("");
  const [stateAddressSignup, setStateAddressSignup] = useState("");

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(true);
    setInfo(false);
  };
  const handleAddress = (e) => {
    e.preventDefault();
    setAddress(true);
    setInfo(false);
    setNameSignup(nameSignup.trim());
  };
  const handleInfos = (e) => {
    e.preventDefault();
    setInfo(true);
    setEmail(false);
    setAddress(false);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nome", nameSignup);
    formData.append("cpf_cnpj", docSignup);
    formData.append("email", emailSignup);
    formData.append("senha", passwordSignup);
    formData.append("nivel", typeUserSignup);
    formData.append("file", fileSignup);
    formData.append("telefone", cellNumberSignup);
    formData.append("cep", cepSignup);
    formData.append("logradouro", streetSignup);
    formData.append("numero", addressNumberSignup);
    formData.append("bairro", neighborhoodSignup);
    formData.append("cidade", citySignup);
    formData.append("estado", stateAddressSignup);

    const createNewUser = await useCreateUser(formData)
      .then((res) => {
        alert("Usuario Cadastrado com Sucesso");
        window.location.reload();
      })
      .catch((err) => alert("Ocorreu um Erro ao Cadastrar Usuário"));
    return createNewUser;
  };

  const handleScreens = () => {
    if (address)
      return <AdressCheck nextStep={handleFinish} prevStep={handleInfos} />;
    if (info)
      return <InfosCheck nextStep={handleAddress} prevStep={handleEmail} />;
    if (email) return <EmailCheck nextStep={handleInfos} />;
  };

  const dataSignup = {
    emailSignup,
    passwordSignup,
    nameSignup,
    docSignup,
    cellNumberSignup,
    typeUserSignup,
    cepSignup,
    streetSignup,
    addressNumberSignup,
    neighborhoodSignup,
    citySignup,
    stateAddressSignup,
  };
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
        fileSignup,
        setFileSignup,
        cellNumberSignup,
        setCellNumberSignup,
        typeUserSignup,
        setTypeUserSignup,
        cepSignup,
        setCepSignup,
        streetSignup,
        setStreetSignup,
        addressNumberSignup,
        setAddressNumberSignup,
        neighborhoodSignup,
        setNeighborhoodSignup,
        citySignup,
        setCitySignup,
        stateAddressSignup,
        setStateAddressSignup,
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
  );
};

export default SignIn;
