import React, { useState } from "react";
import { useEffect } from "react";
import { editUserPassword } from "../../services/useUser";
import RequirePassword from "../RequirePassword";
import { PasswordSecurityContainer } from "./styles";
import { userLevel } from "../../services/useAuth";

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
    const { id_usuario } = userLevel();
    editUserPassword(senhaAntiga, novaSenha, id_usuario);
  };
  const handleCheckPasswordCases = () => {
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
      return;
    } else {
      setHasErrorPassword(true);
      return;
    }
  };

  useEffect(() => {
    handleCheckPasswordCases();
  }, [novaSenha]);

  useEffect(() => {
    if (validateInput.case && validateInput.length && validateInput.number) {
      setHasErrorPassword(false);
    } else {
      setHasErrorPassword(true);
    }
  }, [validateInput]);

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
          <div>
            <input
              id="button"
              type="submit"
              value="Salvar"
              disabled={hasErrorPassword}
            />
          </div>
        </form>
        <RequirePassword
          lengthPassword={validateInput.length}
          casePassword={validateInput.case}
          numberPassword={validateInput.number}
        />
      </PasswordSecurityContainer>
    </>
  );
};

export default PasswordSecurityForm;
