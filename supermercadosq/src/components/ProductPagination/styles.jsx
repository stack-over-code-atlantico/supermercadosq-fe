import styled from 'styled-components';

export const PaginationDiv = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;

export const PaginationBtn = styled.button`
  width: 70px;
  height: 30px;
  background-color: #3EBCD3;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  transition: 250ms ease-in-out;

  &:hover {
    opacity: 0.9;
  }
`;

export const PaginationBtnNumeric = styled.button`
  width: 30px;
  height: 30px;
  background-color: #3EBCD3;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  transition: 300ms ease-in-out;

  :active {
    background-color: red;
  }

  &:hover {
    opacity: 0.7;
  }
`;
