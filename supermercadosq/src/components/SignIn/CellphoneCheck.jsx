import React from 'react'
import { Form } from './styles.jsx'

const CellphoneCheck = () => {
  return (
    <Form>
          <h1>Estamos quase lá</h1>
          <p>
            Adicione seu telefone para contato
          </p>
          <form>
            <label>
              <span>Telefone/celular</span>
              <input type="number" name="cellphone" id="cellphone" 
                     placeholder='(  ) 9####-####' />
            </label>
            
    
            <div className="actions">
              <button id='confirmCellphone'>Continuar</button>
            </div>
          </form>
        </Form>
  )
}

export default CellphoneCheck
