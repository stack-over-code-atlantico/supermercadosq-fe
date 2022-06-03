import React, { useContext } from 'react'
import { SignupContext } from '../../Provider/Signup.provider'
import { Actions, Form } from '../../styles/CommunsStyles'
import { CheckType } from './styles'

const InfosCheck = ({ nextStep, prevStep }) => {
  const {
    nameSignup,
    setNameSignup,
    docSignup,
    setDocSignup,
    cellNumberSignup,
    setCellNumberSignup
  } = useContext(SignupContext)

  return (
    <Form>
      <h1>Estamos quase lá</h1>
      <p>Só mais alguns dados</p>

      <form>
        <label>
          <span>Nome</span>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome Completo"
            value={nameSignup}
            onChange={e => setNameSignup(e.target.value)}
            onKeyPress={(e) => { if (e.key === 'Enter') {
              e.preventDefault()
              return document.getElementById('userDocument').focus()
            } }}
          />
        </label>
        <label>
          <span>CPF/CNPJ</span>
          <input
            type="number"
            name="userDocument"
            id="userDocument"
            placeholder="Número do Documento"
            value={docSignup}
            onChange={e => setDocSignup(e.target.value)}
            onKeyPress={(e) => { if (e.key === 'Enter') {
              e.preventDefault()
              return document.getElementById('cellphone').focus()
            } }}
            
          />
        </label>
        <label>
          <span>Telefone/celular</span>
          <input
            type="number"
            name="cellphone"
            id="cellphone"
            placeholder="(  ) 9####-####"
            value={cellNumberSignup}
            onChange={e => setCellNumberSignup(e.target.value)}
            onKeyPress={(e) => { if (e.key === 'Enter') {
              e.preventDefault()
              return document.getElementById('cellphone').focus()
            } }}
          />
        </label>
        <CheckType>
          <span id="TypeUser">Sou: </span>
          <label className="checkBox">
            <input
              type="radio"
              name="cliente"
              id="cliente"
              value="cliente"
            />
            <span>Cliente</span>
          </label>
          <label className="checkBox">
            <input
              type="radio"
              name="fornecedor"
              id="fornecedor"
              value="fornecedor"
            />
            <span>Fornecedor</span>
          </label>
        </CheckType>

        <Actions>
          <button onClick={prevStep}>Voltar</button>
          <button onClick={nextStep}>Continuar</button>
        </Actions>
      </form>
    </Form>
  )
}

export default InfosCheck
