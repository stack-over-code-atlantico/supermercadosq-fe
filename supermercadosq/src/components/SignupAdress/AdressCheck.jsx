import React, { useContext, useEffect, useState } from 'react'
import { SignupContext } from '../../Provider/Signup.provider'
import { CityInput, StreetInput } from './styles'
import { Form, Actions, LabelError } from '../../styles/CommunsStyles'

const AdressCheck = ({ nextStep, prevStep }) => {
  const [error, setError] = useState('')
  const [hasError, setHasError] = useState(true)
  const [hasErrorNumber, setHasErrorNumber] = useState(true)
  const [hasErrorCep, setHasErrorCep] = useState(true)

  const {
    cepSignup,
    setCepSignup,
    streetSignup,
    setStreetSignup,
    addressNumberSignup,
    setAddressNumberSignup,
    neighborhoodSignup,
    setNeighborhoodSignup,
    citySignup,
    setCitySignup,
    stateAddressSignup,
    setStateAddressSignup
  } = useContext(SignupContext)

  const handleCheckCep = () => {
    const cep = cepSignup.replace(/\D/g, '')
    if (cep.length !== 8) {
      setStreetSignup('')
      setNeighborhoodSignup('')
      setCitySignup('')
      setStateAddressSignup('')
      setError('Digite os 8 números do CEP')
      setHasErrorCep(true)
      return
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.json())
      .then(data => {
        if (data.erro) {
          setStreetSignup('')
          setNeighborhoodSignup('')
          setCitySignup('')
          setStateAddressSignup('')
          setError('CEP não encontrado')
          setHasErrorCep(true)
          return
        }
        setStreetSignup(data.logradouro)
        setNeighborhoodSignup(data.bairro)
        setCitySignup(data.localidade)
        setStateAddressSignup(data.uf)
        setHasErrorCep(false)
        setError('')
      })
  }

  const handleCheckNumber = () => {
    if (addressNumberSignup.length < 1 || addressNumberSignup.length > 6 || !addressNumberSignup) {
      setError('Número inválido')
      setHasErrorNumber(true)
    } else {
      setError('')
      setHasErrorNumber(false)
    }
  }

  useEffect(() => {
    handleCheckCep()
  }, [cepSignup])

  useEffect(() => {
    handleCheckNumber()
  }, [addressNumberSignup])

  useEffect(() => {
    if(hasErrorNumber || hasErrorCep) {
      setHasError(true)
    } else {
      setHasError(false)
    }
  }, [hasErrorNumber, hasErrorCep])


  return (
    <Form>
      <h1>Só mais um passo</h1>
      <p>Conclua seu cadastro com os dados que faltam</p>
      <form>
        <label>
          <span>CEP</span>
          <input
            type="text"
            onChange={e => setCepSignup(e.target.value)}
            value={cepSignup}
            name="cepSignup"
            id="cepSignup"
            placeholder="#####-###"
            onKeyPress={(e) => { if (e.key === 'Enter') {
              e.preventDefault()
              return document.getElementById('addressNumberSignup').focus()
            } }}
          />
        </label>
        <StreetInput>
          <label>
            <span>Rua</span>
            <input
              type="text"
              onChange={e => setStreetSignup(e.target.value)}
              value={streetSignup}
              name="streetSignup"
              id="streetSignup"
              disabled
            />
          </label>
          <label>
            <span>Número</span>
            <input
              type="number"
              onChange={e => setAddressNumberSignup(e.target.value)}
              value={addressNumberSignup}
              id="addressNumberSignup"
              onKeyPress={(e) => { if (e.key === 'Enter') {
                e.preventDefault()
                return document.getElementById('addressNumberSignup').focus()
              } }}
            />
          </label>
        </StreetInput>
        <CityInput>
          <label>
            <span>Bairro</span>
            <input
              type="text"
              onChange={e => setNeighborhoodSignup(e.target.value)}
              value={neighborhoodSignup}
              name="neighborhoodSignup"
              id="neighborhoodSignup"
              disabled
            />
          </label>
          <label>
            <span>Cidade</span>
            <input
              type="text"
              onChange={e => setCitySignup(e.target.value)}
              value={citySignup}
              name="citySignup"
              id="citySignup"
              disabled
            />
          </label>
          <label>
            <span>Estado</span>
            <input
              type="text"
              onChange={e => setStateAddressSignup(e.target.value)}
              value={stateAddressSignup}
              name="stateAddressSignup"
              id="stateAddressSignup"
              disabled
            />
          </label>
        </CityInput>
        <LabelError>{error}</LabelError>
        <Actions>
          <button onClick={prevStep}>Voltar</button>
          <button disabled={hasError} onClick={nextStep}>Finalizar</button>
        </Actions>
      </form>
    </Form>
  )
}

export default AdressCheck
