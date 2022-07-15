import styled from "styled-components";

export const DivButtonAddProductCard = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 0;
    border:none;
    transition: 500ms all ease;
    font-size: 12px;
    h1{
      color: #3EBCD3;
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
    height: 380px;

    margin-top: 35px;

    background-color: var(--color-gray-light);

    box-shadow: 2px 5px 10px #ccc;
    border-radius: 10px;
    border:none;
    transition: 500ms all ease;

    h3 {
      color: var(--color-gray-light);

      position: relative;
      top: 50px;
    }

    &:hover {
      background-color: #9beeee;

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
