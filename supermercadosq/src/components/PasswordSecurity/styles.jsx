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
    background: #E9E6E6;
  }

  form {
    width: 100%;

    div {
      display: flex;
      margin-left: 355px;
    }

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

  @media (max-width: 1300px) {
    padding-left: 15vw;

    hr{
      width: 300px;
    }

    form{

      div {
        margin-left: 205px;
      }

      label{
          input {
          border: 1px solid var(--color-blue-light);
          height: 30px;
          width: 300px;
        }
      }
    }
  }

  @media (max-width: 800px) {
    padding-left: 24vw;
    font-size: 0.8rem;

    hr{
      width: 250px;
    }

    form{

      div {
        margin-left: 165px;
      }

      label{
        input {
          border: 1px solid var(--color-blue-light);
          height: 30px;
          width: 250px;
        }
      }
    }
  }

`
