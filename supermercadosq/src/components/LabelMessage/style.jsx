import styled from 'styled-components';

export const LabelComment = styled.span`
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
    background-color: var(--color-blue-light);
    color: white;
    border: none;
    &:hover {
      color: var(--color-blue-light);
      background-color: white;
      border: 1px solid var(--color-blue-light);
    }
  }
`;
