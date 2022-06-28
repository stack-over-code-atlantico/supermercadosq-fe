import styled from "styled-components";

export const DivAddProductCard = styled.div`
    
    box-shadow: 0px 5px 10px gray;
    border-radius: 10px;
    border:none;
    width: 165px;
    height: 225px;
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
    border:none;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        height: 15px;
        width: 15px;
    }
`;