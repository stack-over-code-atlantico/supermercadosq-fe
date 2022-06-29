import styled from "styled-components";

export const DivAddProductCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 240px;
    height: 380px;

    background-color: var(--color-gray-light);

    box-shadow: 0px 5px 10px gray;
    border-radius: 10px;
    border:none;
`;

export const DivButtonAddProductCard = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 30px;
    height: 30px;
    
    background-color: var(--color-white);
    
    border-radius: 100%;
    border:none;

    img{
        height: 15px;
        width: 15px;
    }
`;