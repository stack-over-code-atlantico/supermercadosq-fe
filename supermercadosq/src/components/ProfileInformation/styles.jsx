import styled from 'styled-components';


export const ProfileInformationContainer = styled.div`
  margin: 15vh  20vh;
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


  hr{
    width: 100%;
  } 

  form {
    .align {
      display: flex;
      gap: 20px;
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

  #button {
      margin-top: 4vh;
      margin-left: 60vh;
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

`





