import styled from 'styled-components';

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

  hr{
    width: 100%;
  } 

  form {
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
        margin-left: 35vh;
        padding: 3% 20%;
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
