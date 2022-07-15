import styled from "styled-components";

export const Div = styled.div`
    position: relative;
    left: 0%;
    width: 100%;
`

export const Title = styled.h1`
    color: ${props => props.color ? props.color: '#000' };
    font-size: 70px;
    transition: 500ms ease;
`;

export const SubTitle = styled.h2`
    color: ${props => props.color ? props.color: '#000' };
    font-size: 40px;
    font-weight: 500;
    transition: 500ms ease;
`

export const Paragraph = styled.p`
    padding-right: 70%;
    padding-left: 3px;
    margin: 20px 0;
    width: 100%;

    @media (max-width: 1366px) {
      padding-right: 50%;
    }

`
export const Button = styled.button`
    color: var(--color-white);
    font-weight: bold;
    width: 120px;
    height: 50px;
    background-color: ${props => props.color ? props.color: '#000' };
    border: 2px solid #fff;
    text-decoration: none;
    cursor: pointer;
    border-radius: 25px;
    transition: 500ms ease;

    &:hover {
      background-color: transparent;
      border: 2px solid ${props => props.color ? props.color: '#000'};
      color: ${props => props.color ? props.color: '#000'};
    }
`
