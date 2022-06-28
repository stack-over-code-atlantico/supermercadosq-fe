import styled from "styled-components";

export const DivProductCard = styled.div`
    border-radius: 10px;
    border: none;
    box-shadow: 0px 5px 10px gray;

    width: 165px;
    height: 225px;

    background-color: var(--color-gray-light);

    display: flex;
    align-items: center;
    flex-direction: column;
    
    img{
        display: block;
        border-radius: 10px 10px 0px 0px;
        width: 165px;
        height: 190px;        
    }
`;

export const DivRestrictionAndName = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 0.5rem;
    flex-wrap: wrap;   
    margin: 10px 0px 0px 0px;

    p{
        font-size: 10px;
        text-align: justify;
    }

    img{
        width: 18px;
        height: 18px;
        border-radius: 100%;
        display: flex;
    }
`;