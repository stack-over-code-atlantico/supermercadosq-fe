import React, { useContext, useEffect, useState } from 'react'
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
    setCellNumberSignup,
    typeUserSignup,
    setTypeUserSignup
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
          />
        </label>
        <label>
          <span>CPF/CNPJ</span>
          <input
            type="number"
            name="cellphone"
            id="cellphone"
            placeholder="Número do Documento"
            value={docSignup}
            onChange={e => setDocSignup(e.target.value)}
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
          />
        </label>
        <CheckType>
          <span id="TypeUser">Sou: </span>
          <label className="checkBox">
            <input
              type="radio"
              name="tipoUsuario"
              id="cliente"
              value="cliente"
              readOnly={true}
              checked={typeUserSignup==='cliente'?true:false}
              onClick={e => setTypeUserSignup(e.target.value)}
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
              checked={typeUserSignup==='fornecedor'?true:false}
              onClick={e=> setTypeUserSignup(e.target.value)}
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
