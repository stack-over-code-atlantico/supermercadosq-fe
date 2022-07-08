import styled from 'styled-components';

export const LabelComment = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
  width: 100%;

  input {
    width: 93%;
    color: var(--color-gray);
  }
  button {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: ${props=>props.color};
    color: white;
    border: none;
    &:hover {
      color: ${props=>props.color};
      background-color: white;
      border: 1px solid ${props=>props.color};
    }
  }
`;
