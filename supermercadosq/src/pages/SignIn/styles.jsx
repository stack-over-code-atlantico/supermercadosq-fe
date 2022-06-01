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

  #TypeUser {
    font-weight: 600;
    text-align: center;
    margin: auto 0;
  }

  .CheckType {
    display: flex;
    flex-direction: row;
    gap: 20px;
    label {
      gap: 5px;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      input {
        margin: 0px;
      }
    }
  }
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

export const LoginLogo = styled.figure`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 0.2px solid #10101024;
  img {
    height: 45%;
  }
  #backHome {
    width: 100%;
    position: absolute;
    display: flex;
    color: var(--color-blue-light);
    font-size: 10px;
    top: 95%;
    left: 3%;

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
export const StreetInput = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 0.2fr;
  gap: 10px;
  input {
    width: 100%;
  }
`
export const CityInput = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.3fr 0.2fr;
  gap: 10px;
  input {
    width: 100%;
  }
`
