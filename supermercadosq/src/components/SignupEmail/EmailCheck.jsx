import { useEffect, useState, useContext } from "react";
import { SignupContext } from "../../Provider/Signup.provider";
import { Form, Actions } from "../../styles/CommunsStyles";
import InputPassword from "../InputPassword/InputPassword";
import RequirePassword from "../RequirePassword";

const EmailCheck = ({ nextStep }) => {
  const { emailSignup, setEmailSignup, passwordSignup, setPasswordSignup } =
    useContext(SignupContext);

  const [hasErrorEmail, setHasErrorEmail] = useState(true);
  const [hasErrorPassword, setHasErrorPassword] = useState(true);
  const [hasError, setHasError] = useState(true);

  const requiredCases = {
    case: false,
    number: false,
    length: false,
  };
  const [validateInput, setValidateInput] = useState(requiredCases);

  //validadeErrorPassowrd
  useEffect(() => {
    if (validateInput.case && validateInput.length && validateInput.number) {
      setHasErrorPassword(false);
    } else {
      setHasErrorPassword(true);
    }
  }, [validateInput]);

  //disabled button
  useEffect(() => {
    if (!hasErrorEmail && !hasErrorPassword) {
      setHasError(false);
    } else {
      setHasError(true);
    }
  }, [hasErrorEmail, hasErrorPassword]);

  useEffect(() => {
    handleCheckPassword(passwordSignup);
  }, [passwordSignup]);

  useEffect(() => {
    handleCheckEmail(emailSignup);
  }, [emailSignup]);

  const handleCheckEmail = (value) => {
    setEmailSignup(value);
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(emailSignup)) {
      setHasErrorEmail(false);
    } else {
      setHasErrorEmail(true);
    }
  };

  const handleCheckPassword = (password) => {
    const regexUppercase = /^(?=.*[A-Z]).+$/;
    const regexLowercase = /^(?=.*[a-z]).+$/;
    const regexNumber = /^(?=.*[0-9]).+$/;
    const regexCaracter = /\W|_/;
    const length = password.length >= 8;
    setValidateInput({
      case:
        regexUppercase.test(passwordSignup) &&
        regexLowercase.test(passwordSignup),
      number:
        regexNumber.test(passwordSignup) && regexCaracter.test(passwordSignup),
      length,
    });
    if (validateInput.case && validateInput.length && validateInput.number) {
      setHasErrorPassword(false);
    } else {
      setHasErrorPassword(true);
    }
  };
  return (
    <Form>
      <h1>Crie sua conta</h1>
      <p>
        E conheça mais sobre vários produtos e seus respectivos componentes.
      </p>
      <form>
        <label>
          <span>Email</span>
          <input
            type="email"
            value={emailSignup}
            onChange={(e) => setEmailSignup(e.target.value)}
            name="email"
            id="email"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                return document.getElementById("password").focus();
              }
            }}
          />
        </label>

        <label>
          <span>Senha</span>
          <InputPassword setValue={setPasswordSignup} value={passwordSignup} />
        </label>
        <RequirePassword
          lengthPassword={validateInput.length}
          casePassword={validateInput.case}
          numberPassword={validateInput.number}
        />
        <Actions>
          <span>
            Já possui uma conta? <br />
            <a href="/login">Entrar</a>
          </span>
          <button disabled={hasError} onClick={nextStep}>
            Criar Conta
          </button>
        </Actions>
      </form>
    </Form>
  );
};

export default EmailCheck;
