import styled from 'styled-components';

export const PasswordSecurityContainer = styled.div`
  margin: 10vh 10vh;
  display: flex;
  flex-direction: column;

  .title {
    color: rgba(114, 114, 114, 1);
    font-weight: 400;
  }

  .subtitle {
    margin-top: 4vh;
    font-weight: 400;
    color: var(--color-blue-light);
  }

  hr{
    width: 450px;
  }

  form {
    width: 100%;

    label {
      display: flex;
      flex-direction: column;
      color: var(--color-blue-light);
      margin-top: 2vh;
      input {
        border: 1px solid var(--color-blue-light);
        height: 30px;
        width: 450px;
      }
    }


    #button {
        margin-top: 4vh;
        padding: 1rem 1.5rem;
        background-color: var(--color-blue-light);
        color: var(--color-white);
        border: none;
        border-radius: 5px;
        font-size: 95%;

        &:hover {
          cursor: pointer;
        }
      }
  }


`
