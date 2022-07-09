import styled from "styled-components";

export const ProfileInformationContainer = styled.div`
  margin: 15vh 20vh;
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

  .title-icon {
    font-weight: 400;
    color: var(--color-blue-light);
    margin-left: 41%;
  }

  hr {
    width: 100%;
  }

  form {
    .align {
      display: flex;
      width: 100%;
      gap: 10%;
      label {
        width: 45%;
      }
    }
    /* .align {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    } */

    #adressNumber {
      display: grid;
      grid-template-columns: 20% 75%;
      gap: 5%;
    }

    #cityState {
      display: grid;
      grid-template-columns: 75% 20%;
      gap: 5%;
    }

    label {
      display: flex;
      flex-direction: column;
      color: var(--color-blue-light);
      margin-top: 2vh;
      text-align: justify;

      .icon {
        background: var(--color-blue-light);
        color: var(--color-white);
        border-radius: 50%;
        margin-left: 40%;
        cursor: pointer;
        transition: filter 0.3s;

        &:hover {
          filter: brightness(0.7);
        }
      }

      input {
        border: 1px solid var(--color-blue-light);
        height: 30px;

        .width {
          width: 450px;
        }

        .less-width {
          width: 250px;
        }
      }
    }
    div {
      display: flex;
      justify-content: end;
      width: 100%;
      margin-top: 10px;
      #button {
        padding: 2% 10%;
        background-color: var(--color-blue-light);
        color: var(--color-white);
        border: none;
        border-radius: 5px;
        font-size: 100%;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;
