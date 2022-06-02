import React from 'react'
import { Actions, Form } from '../../styles/CommunsStyles'
import { CheckType } from './styles'

const InfosCheck = ({ nextStep, prevStep}) => {
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
          />
        </label>
        <label>
          <span>CPF/CNPJ</span>
          <input
            type="number"
            name="cellphone"
            id="cellphone"
            placeholder="Número do Documento"
          />
        </label>
        <label>
          <span>Telefone/celular</span>
          <input
            type="number"
            name="cellphone"
            id="cellphone"
            placeholder="(  ) 9####-####"
          />
        </label>
        <CheckType>
          <span id="TypeUser">Sou: </span>
          <label className="checkBox">
            <input type="checkbox" name="cliente" id="cliente" />
            <span>Cliente</span>
          </label>
          <label className="checkBox">
            <input type="checkbox" name="fornecedor" id="fornecedor" />
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
