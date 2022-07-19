import styled from 'styled-components';

export const DialogSection = styled.section`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DialogButtonDiv = styled.div`
  width: 260px;
  margin-top: 20px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: column wrap;
`;

export const DialogBox = styled.div`
  width: 400px;
  height: 250px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  gap: 10px;
`;

export const DialogText = styled.h2`
  font-size: 16px;
`;

export const DialogButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: ${props => props.color ? props.color : '#9CDD6E'};
  border: transparent;
  border-radius: 10px;
  font-weight: 700;
  transition: all .5s ease;

  &:hover {
    color: ${props => props.color ? props.color : '#9CDD6E'};
    background-color: #fff;
    border: 1px solid ${props => props.color ? props.color : '#9CDD6E'};
  }
`;
