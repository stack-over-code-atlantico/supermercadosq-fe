import styled from "styled-components"

export const Form = styled.div`
padding: 7% 12.5%;

p {
  font-size: 12px;
  color: var(--color-gray);
  padding-bottom: 16px;
}

form {
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 13px;
    margin-top: 5px;
    height: 30px;
  }
  input:focus {
    border: 2px solid var(--color-blue-light);
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  label {
    flex-direction: column;
    display: flex;
    font-size: 12px;
    font-weight: 600;
  }

  #keepConnected,
  .actions {
    flex-direction: row;
    display: flex;
    align-items: center;
  }
  #keepConnected {
    gap: 10px;
    color: var(--color-gray);
    font-size: 12px;
    span {
      font-weight: 400;
    }
    input {
      height: 13px;
      margin-top: 0px;
      margin-bottom: 0px;
    }
  }
  #requiredPassword {
    font-size: 10px;
    font-weight: 400;
    color: var(--color-gray);
  }
}
`

export const Actions = styled.div`
  padding-top: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  span {
    font-size: 10px;
    color: var(--color-gray);

    a {
      text-decoration: none;
      color: var(--color-blue-light);
      font-weight: 700;
    }
  }
  button {
    color: var(--color-white);
    background-color: var(--color-blue-light);
    border: none;
    font-weight: 700;
    width: 40%;
    height: 39px;
  }
`

export const BackHome = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  color: var(--color-blue-light);
  font-size: 13px;
  top: 92%;
  left: 5%;

  #icon {
    font-size: 16px;
  }

  a {
    text-decoration: none;
    font-weight: 700;
    color: var(--color-blue-light);
  }
`