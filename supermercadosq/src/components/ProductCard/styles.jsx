import styled from "styled-components";

export const DivProductCardFace = styled.div`
    width: 240px;
    height: 380px;

    margin-top: 35px;

    perspective: 800px;

    &:hover .front {
        transform: rotateY(180deg);
        z-index: 0;
    }
  
    &:hover .back {
        transform: rotateY(0);
        z-index: 1;
    }
`;

export const DivProductCardFront = styled.div`
    position: absolute;

    transition: 700ms;

    width: 100%;
    height: 100%;

    border-radius: 10px;
    border: none;
    box-shadow: 0px 5px 10px gray;

    background-color: var(--color-white);

    display: flex;
    align-items: center;
    flex-direction: column;
    
    z-index: 1;

    img{
        display: block;
        border-radius: 10px 10px 0px 0px;
        width: 240px;
        height: 315px;        
    }
    
`;

export const DivProductCardBack = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    transform: rotateY(-180deg);
    backface-visibility: hidden;

    position: absolute;

    width: 100%;
    height: 100%;

    transition: 700ms;

    border-radius: 10px;
    border: none;
    box-shadow: 0px 5px 10px gray;

    background-color: #fff;

    img {
        width: 28px;
        height: 28px;
        
        border-radius: 50%;

        margin: 10px 0px 10px 0px;
    }

`;

export const DivRestrictionAndName = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 0.5rem;
    flex-wrap: wrap;   
    margin: 20px 0px 0px 0px;

    p{
        font-size: 1rem;
        text-align: justify;
    }

    img{
        width: 22px;
        height: 22px;
        border-radius: 50%;
        display: flex;
    }
`;

export const DivProductCardBackContent = styled.div`
    background-color: var(--color-blue-light);

    width: 100%;
    height: 100%;

    border-radius: 0px 0px 10px 10px;

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: bold;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;

        color: #fff;
    }

    .divLittleBall {
        background-color: var(--color-purple);

        display: flex;
        justify-content: center;
        align-items: center;

        width: 20px;
        height: 20px;
        border-radius: 50%;

        margin-bottom: 100%;
        box-shadow: 0px 2px 10px gray;

        position: absolute;
    }
`;

export const DivBackContentInfos = styled.div`
    background-color: var(--color-blue-light);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
`;

export const DivProductDescription = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    margin: 0px 15px;

    background-color: #fff;

    p {
        font-size: 0.6rem;
        text-align: justify;
        color: var(--color-gray);

        display: block;
        padding: 20px 10px;

    }

    span {
        font-weight: bold;
    }
`;

export const DivPersonDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: row;

    padding: 10px 0px 0px 15px;

    img {
        width: 22px;
        height: 22px;

        border-radius: 50%;
        margin: 0px 10px -10px -10px;
        padding: 0;
    }
`;

export const DivNameAndPubDate = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;

    flex-direction: column;

    p {
        color: var(--color-white);
    }

    .pPersonName {
        font-size: 0.8rem;
    }

    .pPubDate {
        font-size: 0.6rem;
        margin-bottom: 5px;
    }
`;

export const DivComment = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 22px;
        height: 22px;

        border-radius: 50%;
        margin: 10px 0px;
    }
`;