import styled from "styled-components";

export const LoginContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 800px;
  height: 450px;
  background-color: white;
  border-radius: 5px;
`;

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
  }
`;
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
`;
export const StreetInput = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 0.2fr;
  gap: 10px;
  input {
    width: 100%;
  }
`;
export const CityInput = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.3fr 0.2fr;
  gap: 10px;
  input {
    width: 100%;
  }
`;
