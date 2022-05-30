import React from 'react'
import { Form } from '../styles.jsx'


const Create = () => {
  return (
        <Form>
          <h1>Crie sua conta</h1>
          <p>
            E conheça mais sobre vários produtos e seus respectivos
            componentes.
          </p>
          <form>
            <label>
              <span>Email</span>
              <input type="email" name="email" id="email" />
            </label>

            <label>
              <span>Senha</span>
              <input type="password" name="password" id="password" />
            </label>
            
            <label id="requiredPassword">
              <span>Deve conter o mínimo de 8 caracteres, maiúscula, minúscula, caracter especial e números.</span>
            </label>
            <div className="actions">
              <span>
                Já possui uma conta? <br/><a href="">Entrar</a>
              </span>
              <button>Criar</button>
            </div>
          </form>
        </Form>
  )
}

export default Create
