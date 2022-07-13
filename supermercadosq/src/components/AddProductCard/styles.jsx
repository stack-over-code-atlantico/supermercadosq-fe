import styled from "styled-components";

export const DivAddProductCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 240px;
    height: 380px;

    margin-top: 35px;

    background-color: var(--color-gray-light);

    box-shadow: 2px 5px 10px #ccc;
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