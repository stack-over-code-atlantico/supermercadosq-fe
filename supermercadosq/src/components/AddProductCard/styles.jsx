import styled from "styled-components";

export const DivButtonAddProductCard = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  background-color: var(--color-white);

  border-radius: 100%;
  border: none;
  transition: 500ms all ease;

  h1 {
    color: #3ebcd3;
    transition: 500ms all ease;
  }
`;

export const DivAddProductCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  cursor: pointer;
  width: 240px;
  height: 320px;
  position: relative;
  margin-top: -30px;

  background-color: var(--color-gray-light);

  box-shadow: 2px 5px 10px #ccc;
  border-radius: 10px;
  border: none;
  transition: 500ms all ease;

  h3 {
    color: var(--color-gray-light);
    transition: 500ms all ease;
    position: relative;
    top: 30px;
  }

  &:hover {
    background-color: #9beeee;

    h3 {
      color: #ffffff;
      text-shadow: 2px 2px 2px #2496aa;
    }

    ${DivButtonAddProductCard} {
      width: 60px;
      height: 60px;

      h1 {
        color: #2496aa;
        font-size: 40px;
      }
    }
  }
`;
