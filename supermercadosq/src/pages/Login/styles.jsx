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

export const LoginForm = styled.div`
  padding: 7% 12.5%;
  position: relative;

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

    label {
      flex-direction: column;
      display: flex;
      font-size: 12px;
      font-weight: 600;
    }

    #keepConnected {
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
    .actions {
      padding-top: 44px;
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
  #backHome {
    display: flex;
    padding-top: 30px;
    color: var(--color-blue-light);
    font-size: 10px;
    #icon {
      font-size: 15px;
    }

    a {
      text-decoration: none;
      font-weight: 700;
      color: var(--color-blue-light);
    }
  }
`

export const LoginLogo = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 0.2px solid #10101024;
  img {
    height: 45%;
  }
`


export const Actions = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;

  padding-top: 44px;
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
`
