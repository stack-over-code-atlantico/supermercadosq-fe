import { useState } from 'react'
import { Form, Actions } from '../../styles/CommunsStyles'


const EmailCheck = ({nextStep}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')




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
            onChange={e => setEmail(e.target.value)}
            name="email"
            id="email"
          />
        </label>

        <label>
          <span>Senha</span>
          <input
            type="password"
            onChange={e => setPassword(e.target.value)}
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
          <button onClick={nextStep}>
            Criar Conta
          </button>
        </Actions>
      </form>
    </Form>
  )
}

export default EmailCheck
