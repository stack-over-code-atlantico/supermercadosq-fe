import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 100vh;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: var(--color-gray);
  background-color: rgba(0, 0, 0, 0.5);
  h2 {
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
  @media (max-width: 1185px) {
    width: 400px;
  }

  @media (max-width: 998px) {
    height: 500px;
    width: 300px;
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
  gap: 20px;

  label {
    gap: 5px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  input {
    height: 40px;
    border-radius: 8px;
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
    border-radius: 8px;
    resize: none;
    height: 180px;
    border: 1.5px solid var(--color-blue-light);
  }
  @media (max-width: 1185px) {
    width: 550px;
  }

  @media (max-width: 998px) {
    height: 500px;
    width: 400px;
    .ProductInitial {
      flex-direction: column;
    }
    textarea {
      height: 100px;
    }
    gap: 5px;
  }
`;

export const CloseButton = styled.span`
  width: 25px;
  height: 22px;
  color: #fff;
  background-color: #3ebcd3;
  text-align: center;
  vertical-align: middle;
  padding-bottom: 2px;
  cursor: pointer;
  border-radius: 5px;
  transition: 300ms all ease;

  &:hover {
    background-color: #2d9db1;
    width: 35px;
  }
`;

export const TitleDiv = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    border-radius: 8px;
    width: 20%;
    height: 40px;
    text-align: center;
    color: var(--color-white);
    background-color: #3ebcd3;
    border: 2px solid #3ebcd3;
    font-weight: 700;
    transition: 400ms all ease;
  }

  button:hover:not(:disabled) {
    background-color: transparent;
    color: #3ebcd3;
    border: 2px solid #3ebcd3;
  }
`;

export const customStyles = styled.div`
  height: 40px;
  border: 1.5px solid var(--color-blue-light);
  padding: 0px 5px;
  overflow-y: auto;
`;
