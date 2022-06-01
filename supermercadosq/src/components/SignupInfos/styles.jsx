import styled from 'styled-components'

export const CheckType = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  label,
  .checkBox {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 5px;
    align-items: center;
    justify-content: center;
    input {
      margin: 0px;
    }
  }
`
