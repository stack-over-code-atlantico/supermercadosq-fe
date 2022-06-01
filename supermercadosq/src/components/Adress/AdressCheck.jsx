import React from 'react'
import { CityInput, Form, StreetInput, Actions } from './styles'

const AdressCheck = ({nextStep}) => {
  return (
    <Form>
      <h1>Só mais um passo</h1>
      <p>Conclua seu cadastro com os dados que faltam</p>
      <form>
        <label>
          <span>CEP</span>
          <input type="number" name="Cep" id="Cep" placeholder="#####-###" />
        </label>
        <StreetInput>
          <label>
            <span>Rua</span>
            <input type="text" name="Street" id="Street" />
          </label>
          <label>
            <span>Número</span>
            <input type="number" name="StreetNumber" id="StreetNumber" />
          </label>
        </StreetInput>
        <CityInput>
        <label>
            <span>Bairro</span>
            <input type="text" name="Neighborhood" id="Neighborhood" />
          </label>
          <label>
            <span>Cidade</span>
            <input type="text" name="City" id="City" />
          </label>
          <label>
            <span>Estado</span>
            <input type="text" name="CityState" id="CityState" />
          </label>
        </CityInput>

        
        <Actions>
          <button onClick={nextStep}>Voltar</button>
          <button onClick={nextStep}>Finalizar</button>
        </Actions>
      </form>
    </Form>
  )
}

export default AdressCheck
