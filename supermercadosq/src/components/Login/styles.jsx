import styled from 'styled-components';
import BgLogin from '../../assets/Backgrounds/BgLogin.png'

export const StyleLogin = styled.div`
    background-image: url(${BgLogin});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoginContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 58%;
    height: 60%;
    background-color: white;
`;

export const LoginForm = styled.div`
`;

export const LoginLogo = styled.figure`


`;