import React, { useState } from "react";
import { PasswordSecurityContainer } from "./styles";

const PasswordSecurityForm = () => {
  const [senhaAntiga, setSenhaAntiga] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [repeteNovaSenha, setRepeteNovaSenha] = useState("");
  const [hasErrorPassword, setHasErrorPassword] = useState(true);

  const requiredCases = {
    case: false,
    number: false,
    length: false,
  };
  const [validateInput, setValidateInput] = useState(requiredCases);

  const handleCheckPassword = (event) => {
    event.preventDefault();
    if (novaSenha !== repeteNovaSenha) {
      alert("Senhas diferentes");
      return;
    }
    const regexUppercase = /^(?=.*[A-Z]).+$/;
    const regexLowercase = /^(?=.*[a-z]).+$/;
    const regexNumber = /^(?=.*[0-9]).+$/;
    const regexCaracter = /\W|_/;
    const length = novaSenha.length >= 8;
    setValidateInput({
      case: regexUppercase.test(novaSenha) && regexLowercase.test(novaSenha),
      number: regexNumber.test(novaSenha) && regexCaracter.test(novaSenha),
      length,
    });
    if (validateInput.case && validateInput.length && validateInput.number) {
      setHasErrorPassword(false);
      alert("ok");
      return;
    } else {
      alert("n ok");
      setHasErrorPassword(true);
      return;
    }
  };
  console.log(hasErrorPassword + "oi");

  return (
    <>
      <PasswordSecurityContainer>
        <h2 className="title">Editar senha</h2>
        <h3 className="subtitle">Edite sua senha</h3>
        <hr />
        <form onSubmit={handleCheckPassword}>
          <label>
            Senha antiga:
            <input
              type="password"
              value={senhaAntiga}
              onChange={(e) => setSenhaAntiga(e.target.value)}
            />
          </label>

          <label>
            Nova senha:
            <input
              type="password"
              value={novaSenha}
              onChange={(e) => setNovaSenha(e.target.value)}
            />
          </label>

          <label>
            Digite novamente a nova senha:
            <input
              type="password"
              value={repeteNovaSenha}
              onChange={(e) => setRepeteNovaSenha(e.target.value)}
            />
          </label>
          <div style={{ display: "flex", marginLeft: "355px" }}>
            <input id="button" type="submit" value="Salvar" />
          </div>
        </form>
      </PasswordSecurityContainer>
    </>
  );
};

export default PasswordSecurityForm;
