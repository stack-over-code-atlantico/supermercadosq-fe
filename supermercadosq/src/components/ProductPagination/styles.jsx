import styled from 'styled-components';

export const PaginationDiv = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaginationBtn = styled.button`
  width: 70px;
  height: 30px;
  background-color: #3EBCD3;
  border: 1px solid #f0f0f0;
`;

export const PaginationBtnNumeric = styled.button`
  width: 30px;
  height: 30px;
  background-color: #3EBCD3;
  border: 1px solid #f0f0f0;

  :active {
    background-color: red;
  }
`;
