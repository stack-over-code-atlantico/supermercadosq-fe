import React, { useContext, useEffect, useState } from 'react'
import { SignupContext } from '../../Provider/Signup.provider'
import { Actions, Form } from '../../styles/CommunsStyles'
import { CheckType, ProfileAvatar } from './styles'
import { cnpj, cpf } from 'cpf-cnpj-validator'
import { BsFillPersonFill } from "react-icons/bs";

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

  const [hasError, setHasError] = useState(true)
  const [hasErrorDoc, setHasErrorDoc] = useState(true)
  const [hasErrorName, setHasErrorName] = useState(true)
  const [hasErrorCellphone, setHasErrorCellphone] = useState(true)

  const handleCheckName = () => {
    setNameSignup(nameSignup.replace(/( )+/g, ' '))
    const regEx = /[a-zA-Z]{4,150}/g
    regEx.test(nameSignup) ? setHasErrorName(false) : setHasErrorName(true)
  }

  const validCpf = () => {
    const checkCpf = cpf.isValid(docSignup)
    checkCpf ? setHasErrorDoc(false) : setHasErrorDoc(true)
  }
  const validCnpj = () => {
    const checkCnpj = cnpj.isValid(docSignup)
    checkCnpj ? setHasErrorDoc(false) : setHasErrorDoc(true)
  }

  useEffect(() => {
    handleCheckName()
  }, [nameSignup])

  useEffect(() => {
    hasErrorDoc ? setHasErrorDoc(true) : setHasErrorDoc(false)
  }, [hasErrorDoc])

  useEffect(() => {
    if (typeUserSignup === 'cliente') {
      validCpf()
    }
    if (typeUserSignup === 'fornecedor') {
      validCnpj()
    }
    if (!typeUserSignup) {
      return
    }
  }, [docSignup, typeUserSignup])

  useEffect(() => {
    handleCheckNumber()
  }, [cellNumberSignup])

  const handleCheckNumber = () => {
    cellNumberSignup.length == 11
      ? setHasErrorCellphone(false)
      : setHasErrorCellphone(true)
  }

  useEffect(() => {
    hasErrorDoc || hasErrorName || hasErrorCellphone
      ? setHasError(true)
      : setHasError(false)
  }, [hasErrorDoc, hasErrorName, hasErrorCellphone])

  return (
    <Form>
      <h1>Estamos quase lá</h1>
      <p>Só mais alguns dados</p>
      <form>
        <ProfileAvatar>
            <label for="file">
              <BsFillPersonFill className="icon" size="3rem" />
              <input type="file" id="file" style={{ display: "none" }} />
            </label>
          </ProfileAvatar>
        <label>
          <span>Nome</span>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome Completo"
            value={nameSignup}
            onChange={e => setNameSignup(e.target.value)}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                e.preventDefault()
                return document.getElementById('userDocument').focus()
              }
            }}
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
            onKeyPress={e => {
              if (e.key === 'Enter') {
                e.preventDefault()
                return document.getElementById('cellphone').focus()
              }
            }}
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
            onKeyPress={e => {
              if (e.key === 'Enter') {
                e.preventDefault()
                return document.getElementById('cellphone').focus()
              }
            }}
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
              checked={typeUserSignup === 'cliente'}
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
              checked={typeUserSignup === 'fornecedor'}
              onClick={e => setTypeUserSignup(e.target.value)}
            />
            <span>Fornecedor</span>
          </label>
        </CheckType>

        <Actions>
          <button onClick={prevStep}>Voltar</button>
          <button disabled={hasError} onClick={nextStep}>
            Continuar
          </button>
        </Actions>
      </form>
    </Form>
  )
}

export default InfosCheck
