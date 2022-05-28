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
    border-radius: 5px;
`;

export const LoginForm = styled.div`
    padding: 7% 12.5%;

    p {
        font-size: 12px;
        color: var(--color-gray);
    }

    form {
        display: flex;
        flex-direction: column;

        label {
            flex-direction: column;
            display: flex;
        }

        #keepConnected, .actions {
            flex-direction: row;
            display: flex;
            align-items: center;
        }
        #keepConnected {
            gap: 10px;
            color: var(--color-gray);
            font-size: 14px;
            margin-top: 13px;

            span {
                margin-top: 13px;
            }
        }
        .actions {
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
    
`;

export const LoginLogo = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 0.2px solid #10101024;
    img {
        height: 45%;
    }
`;

