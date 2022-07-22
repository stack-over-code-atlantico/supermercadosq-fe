import React, { useContext, useEffect, useState } from "react";
import { SignupContext } from "../../Provider/Signup.provider";
import { Actions, Form } from "../../styles/CommunsStyles";
import { CheckType, ProfileAvatar, InfoForm } from "./styles";
import { cnpj, cpf } from "cpf-cnpj-validator";
import { BsFillPersonFill } from "react-icons/bs";

const InfosCheck = ({ nextStep, prevStep }) => {
  const {
    nameSignup,
    setNameSignup,
    docSignup,
    setDocSignup,
    cellNumberSignup,
    setCellNumberSignup,
    typeUserSignup,
    setTypeUserSignup,
    fileSignup,
    setFileSignup,
  } = useContext(SignupContext);

  const [hasError, setHasError] = useState(true);
  const [hasErrorDoc, setHasErrorDoc] = useState(true);
  const [hasErrorName, setHasErrorName] = useState(true);
  const [hasErrorCellphone, setHasErrorCellphone] = useState(true);
  const [urlSrc, setUrlSrc] = useState(null);

  const handleSelectFile = (event) => {
    setFileSignup(event.target.files[0]);
    setUrlSrc(URL.createObjectURL(event.target.files[0]));
  };

  const handleCheckName = () => {
    setNameSignup(nameSignup.replace(/( )+/g, " "));
    const regEx = /[a-zA-Z]{4,150}/g;
    regEx.test(nameSignup) ? setHasErrorName(false) : setHasErrorName(true);
  };

  const validCpf = () => {
    const checkCpf = cpf.isValid(docSignup);
    checkCpf ? setHasErrorDoc(false) : setHasErrorDoc(true);
  };
  const validCnpj = () => {
    const checkCnpj = cnpj.isValid(docSignup);
    checkCnpj ? setHasErrorDoc(false) : setHasErrorDoc(true);
  };

  useEffect(() => {
    handleCheckName();
  }, [nameSignup]);

  useEffect(() => {
    hasErrorDoc ? setHasErrorDoc(true) : setHasErrorDoc(false);
  }, [hasErrorDoc]);

  useEffect(() => {
    if (typeUserSignup === "cliente") {
      validCpf();
    }
    if (typeUserSignup === "fornecedor") {
      validCnpj();
    }
    if (!typeUserSignup) {
      return;
    }
  }, [docSignup, typeUserSignup]);

  useEffect(() => {
    handleCheckNumber();
  }, [cellNumberSignup]);

  const handleCheckNumber = () => {
    cellNumberSignup.length == 11
      ? setHasErrorCellphone(false)
      : setHasErrorCellphone(true);
  };

  useEffect(() => {
    hasErrorDoc || hasErrorName || hasErrorCellphone
      ? setHasError(true)
      : setHasError(false);
  }, [hasErrorDoc, hasErrorName, hasErrorCellphone]);

  return (
    <Form>
      <h1>Estamos quase lá</h1>
      <p>Só mais alguns dados</p>
      <form>
        <InfoForm>
          <div className="leftSignUp">
            <label>
              <span>Nome*</span>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nome Completo"
                value={nameSignup}
                onChange={(e) => setNameSignup(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    return document.getElementById("userDocument").focus();
                  }
                }}
              />
            </label>
            <label>
              <span>CPF/CNPJ* <span className="label-info">(somente números)</span></span>
              <input
                type="number"
                name="userDocument"
                id="userDocument"
                placeholder="Número do Documento"
                value={docSignup}
                onChange={(e) => setDocSignup(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    return document.getElementById("cellphone").focus();
                  }
                }}
              />
              {hasErrorDoc && docSignup !== '' ? (<span style={{color: '#E94F47', margin: '-10px 0 10px 0'}}>
              {typeUserSignup === "fornecedor" ? ('CNPJ inválido') : ('CPF inválido')}
              </span>) : (<></>)}
            </label>
            <label>
              <span>Telefone/celular* <span className="label-info">(somente números)</span></span>
              <input
                type="number"
                name="cellphone"
                id="cellphone"
                placeholder="(  ) 9####-####"
                value={cellNumberSignup}
                onChange={(e) => setCellNumberSignup(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    return document.getElementById("cellphone").focus();
                  }
                }}
              />
              {hasErrorCellphone && cellNumberSignup !== '' ? (<span style={{color: '#E94F47', margin: '-10px 0 10px 0'}}>Número de telefone inválido</span>) : (<></>)}
            </label>
          </div>
          <div className="rightSignUp">
            <ProfileAvatar>
              <label for="file">
                <span>Imagem</span>
                {urlSrc !== null ? (
                  <img
                    src={urlSrc}
                    style={{
                      width: 100,
                      height: 120,
                      borderRadius: 5,
                      cursor: "pointer",
                    }}
                  />
                ) : (
                  <BsFillPersonFill className="icon" />
                )}
                <input
                  type="file"
                  onChange={handleSelectFile}
                  id="file"
                  style={{ display: "none" }}
                />
              </label>
            </ProfileAvatar>
            <CheckType>
              <span id="TypeUser">Sou*: </span>
              <label className="checkBox">
                <input
                  type="radio"
                  name="tipoUsuario"
                  id="cliente"
                  value="cliente"
                  readOnly={true}
                  checked={typeUserSignup === "cliente"}
                  onClick={(e) => setTypeUserSignup(e.target.value)}
                />
                <span>Cliente</span>
              </label>
              <label className="checkBox">
                <input
                  type="radio"
                  name="tipoUsuario"
                  id="fornecedor"
                  value="fornecedor"
                  readOnly={true}
                  checked={typeUserSignup === "fornecedor"}
                  onClick={(e) => setTypeUserSignup(e.target.value)}
                />
                <span>Fornecedor</span>
              </label>
            </CheckType>
          </div>

          <Actions>
            <button onClick={prevStep}>Voltar</button>
            <button disabled={hasError} onClick={nextStep}>
              Continuar
            </button>
          </Actions>
        </InfoForm>
      </form>
    </Form>
  );
};

export default InfosCheck;
