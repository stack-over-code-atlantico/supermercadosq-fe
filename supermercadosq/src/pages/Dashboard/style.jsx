import styled from 'styled-components';

export const DivDashboard = styled.div`
  display: flex;
`;

export const BackButton = styled.button`
  width: 150px;
  height: 50px;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
  margin-top: 30px;
  margin-left: 20px;
  border-radius: 8px;
  transition: 500ms all ease;

  &::after {
  content: "";
  background-color: #280851;
  width: 150px;
  height: 50px;
  border-radius:7px;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.2s;
}

  &:hover::after {
    background-color: #BD8BFF;
    top: 7px;
    left: -7px;
  }
`;
