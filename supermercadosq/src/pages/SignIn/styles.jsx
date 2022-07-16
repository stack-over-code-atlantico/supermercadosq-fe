import styled from "styled-components";
import BgLogin from "../../assets/Backgrounds/BgLogin.png";

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
`;

export const LoginContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 800px;
  height: 450px;
  background-color: white;
  border-radius: 5px;

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
`;

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
  }
`;
