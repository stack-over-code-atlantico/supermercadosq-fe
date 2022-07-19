import styled from "styled-components";

export const ContainerAvatar = styled.div`
  justify-content: center;
  align-items: center;

  label {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ProfileInformationContainer = styled.div`
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

  .title-icon {
    font-weight: 400;
    color: var(--color-blue-light);
    margin-left: 41%;
  }

  hr {
    width: 100%;
  }

  form {
    width: 100%;

    .align {
      display: flex;
      width: 100%;
      gap: 4%;

      label {
        width: 48%;
      }
    }

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

        cursor: pointer;
        transition: filter 0.3s;

        &:hover {
          filter: brightness(0.7);
        }
      }

      input {
        border: 1px solid var(--color-blue-light);
        height: 40px;
        padding-left: 8px;

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

      :last-child {
        justify-content: end;
      }

      #button {
        padding: 2% 10%;
        background-color: var(--color-blue-light);
        color: var(--color-white);
        border: none;
        border-radius: 5px;
        font-size: 100%;
        margin-top: 25px;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 1300px) {
    padding-left: 10vw;
  }

  @media (max-width: 800px) {
    padding-left: 30vw;
    font-size: 0.8rem;
  }
`;
