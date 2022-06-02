import { useEffect, useState, useContext } from 'react'
import { SignupContext } from '../../Provider/Signup.provider'
import { Form, Actions, LabelError } from '../../styles/CommunsStyles'

const EmailCheck = ({ nextStep }) => {
  const { emailSignup, setEmailSignup, passwordSignup, setPasswordSignup } =
    useContext(SignupContext)

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
            onChange={e => setEmailSignup(e.target.value)}
            name="email"
            id="email"
          />
        </label>

        <label>
          <span>Senha</span>
          <input
            type="password"
            value={passwordSignup}
            onChange={e => setPasswordSignup(e.target.value)}
            name="password"
            id="password"
          />
        </label>

        <label id="requiredPassword">
          <span>
            Deve conter o mínimo de 8 caracteres, maiúscula, minúscula, caracter
            especial e números.
          </span>
        </label>
        <Actions>
          <span>
            Já possui uma conta? <br />
            <a href="/login">Entrar</a>
          </span>
          <button onClick={nextStep}>Criar Conta</button>
        </Actions>
      </form>
    </Form>
  )
}

export default EmailCheck
