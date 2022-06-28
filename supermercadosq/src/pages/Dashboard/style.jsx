import styled from 'styled-components';

export const DivDashboard = styled.div`
  display: flex;
`;

export const BackButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: #280851;
  text-align: left;
  padding-left: 20px;
  color: #fff;
  margin-top: 30px;
  margin-left: 20px;
  transition: 300ms all ease;

  &::after {
    content: "Voltar";
    color: transparent;
    left: 50px;
    z-index: 1;
    position: absolute;
    transition: 300ms all ease;
  }

  &:hover::after {
    content: "Voltar";
    color: #fff;
    position: absolute;
    left: 40px;
    z-index: 1;

  }

  &:hover {
    width: 120px;
    transition: 500ms all ease;
  }
`;
