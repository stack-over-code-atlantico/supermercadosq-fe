import React, { useContext } from 'react'
import { SignupContext } from '../../Provider/Signup.provider'
import { CityInput, StreetInput } from './styles'
import { Form, Actions } from '../../styles/CommunsStyles'

const AdressCheck = ({ nextStep, prevStep }) => {
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

  return (
    <Form>
      <h1>Só mais um passo</h1>
      <p>Conclua seu cadastro com os dados que faltam</p>
      <form>
        <label>
          <span>CEP</span>
          <input
            type="number"
            onChange={e => setCepSignup(e.target.value)}
            value={cepSignup}
            name="Cep"
            id="Cep"
            placeholder="#####-###"
          />
        </label>
        <StreetInput>
          <label>
            <span>Rua</span>
            <input
              type="text"
              onChange={e => setStreetSignup(e.target.value)}
              value={streetSignup}
              name="Street"
              id="Street"
            />
          </label>
          <label>
            <span>Número</span>
            <input
              type="number"
              onChange={e => setAddressNumberSignup(e.target.value)}
              value={addressNumberSignup}
              name="StreetNumber"
              id="StreetNumber"
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
              name="Neighborhood"
              id="Neighborhood"
            />
          </label>
          <label>
            <span>Cidade</span>
            <input
              type="text"
              onChange={e => setCitySignup(e.target.value)}
              value={citySignup}
              name="City"
              id="City"
            />
          </label>
          <label>
            <span>Estado</span>
            <input
              type="text"
              onChange={e => setStateAddressSignup(e.target.value)}
              value={stateAddressSignup}
              name="CityState"
              id="CityState"
            />
          </label>
        </CityInput>

        <Actions>
          <button onClick={prevStep}>Voltar</button>
          <button onClick={nextStep}>Finalizar</button>
        </Actions>
      </form>
    </Form>
  )
}

export default AdressCheck
