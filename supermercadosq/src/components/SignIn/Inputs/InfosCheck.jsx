import React from 'react'
import { Form } from '../styles.jsx'

const InfosCheck = () => {
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
        <div className="CheckType">
          <span id='TypeUser'>Sou: </span>
          <label>
            <input type="checkbox" name="cliente" id="cliente" />
            <span>Cliente</span>
          </label>
          <label>
            <input type="checkbox" name="fornecedor" id="fornecedor" />
            <span>Fornecedor</span>
          </label>
        </div>

        <div className="actions">
          <button id="confirmCellphone">Continuar</button>
        </div>
      </form>
    </Form>
  )
}

export default InfosCheck
