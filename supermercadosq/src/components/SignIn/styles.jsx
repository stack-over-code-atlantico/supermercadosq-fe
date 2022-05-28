import styled from 'styled-components'
import BgLogin from '../../assets/Backgrounds/BgLogin.png'

export const StyleLogin = styled.div`
  background-image: url(${BgLogin});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
`

export const LoginContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 800px;
  height: 450px;
  background-color: white;
  border-radius: 5px;
`

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
    .actions {
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
        width: 152px;
        height: 39px;
      }
    }
  }
`

export const LoginLogo = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 0.2px solid #10101024;
  img {
    height: 45%;
  }
`
