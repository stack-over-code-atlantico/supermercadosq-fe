import styled from "styled-components";

export const CheckType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px 0 0 15px;
  align-items: flex-start;

  .checkBox, #cliente, #fornecedor {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0;

    span {
      margin-left: 10px;
    }
  }
`;

export const ProfileAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  label {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon {
    background: var(--color-blue-light);
    color: var(--color-white);
    border-radius: 5px;
    margin-top: 5px;
    cursor: pointer;
    width: 100px;
    height: 120px;
    transition: filter 0.3s;
    &:hover {
      filter: brightness(0.7);
    }
  }
`;

export const InfoForm = styled.div`
  display: grid;
  grid-template-columns: 70% 35%;

  .leftSignUp label {
    margin-bottom: 20px;
  }

  .rightSignUp label {
    margin-bottom: 0px !important;
  }
`;
