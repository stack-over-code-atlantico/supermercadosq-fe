import styled from "styled-components";

export const DivAddProductCard = styled.div`
    border: 0.5px;
    border-radius: 5px;
    width: 150px;
    height: 200px;
    background-color: var(--color-gray-light);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DivButtonAddProductCard = styled.button`
    background-color: var(--color-white);
    height: 30px;
    width: 30px;
    border-radius: 100%;
    border: 0.5px;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        height: 15px;
        width: 15px;
    }
`;