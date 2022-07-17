import styled from "styled-components";

export const DivButtonAddProductCard = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0;
  border: none;

  transition: 500ms all ease;
  font-size: 12px;
  h1 {
    color: #3ebcd3;
    transition: 500ms all ease;
  }
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 250px;
  z-index: -1;
  transition: 500ms all ease;
  border: 2px solid #50bfd3;
  border-radius: 50%;
  background-color: #50bfd3;
  color: white;

  &:hover {
    background-color: #dee6e7;
    color: #50bfd3;
    font-size: 24px;
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
    text-align: center;
    position: relative;
    top: 50px;
  }

  &:hover {
    background-color: #9beeee;

    ${Button} {
      top: 325px;
      z-index: 0;
    }

    h3 {
      color: #ffffff;
      text-shadow: 2px 2px 2px #2496aa;
      position: relative;
      transition: 300ms all ease-in-out;
      top: 70px;
    }

    ${DivButtonAddProductCard} {
      width: 0px;
      height: 0px;

      h1 {
        color: #2496aa;
        font-size: 28px;
      }
    }
  }
`;
