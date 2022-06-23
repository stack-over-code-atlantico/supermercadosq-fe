import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: var(--color-gray);
  background-color: #000000a6;
  h2{
    color: var(--color-blue-light);
  }
`;
export const ImageUpload = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  background-color: white;
  border: 2px solid var(--color-blue-light);
  border-right-width: 1px;
  color: var(--color-blue-light);
  width: 500px;
  height: 550px;
  border-radius: 20px 0 0 20px;
  svg {
    cursor: pointer;
  }
`;
export const RegisterForm = styled.form`
  background-color: white;
  width: 650px;
  height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 0 20px 20px 0;
  padding: 20px 35px;
  border: 2px solid var(--color-blue-light);
  border-left-width: 1px;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  gap: 25px;

  label {
    gap: 5px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  input {
    height: 40px;
    border: 1.5px solid var(--color-blue-light);
    padding: 0px 5px;
  }
  .ProductInitial {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  textarea {
    padding: 10px;
    resize: none;
    height: 180px;
    border: 1.5px solid var(--color-blue-light);
  }
`;

export const Buttons = styled.div`
display: flex;
justify-content: space-between;
  button {
    padding: 15px;
    width: 40%;
    color: var(--color-white);
    background-color: var(--color-blue-light);
    border: none;
    font-weight: 700;
  }
`;
