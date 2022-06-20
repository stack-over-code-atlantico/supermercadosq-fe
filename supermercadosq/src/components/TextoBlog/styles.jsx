import styled from "styled-components";

export const Div = styled.div`
    margin: 3% 10% 0 17%;
`

export const Title = styled.h1`
    color: ${props => props.color };
    font-size: 70px;
    transition: 500ms ease;
`;

export const SubTitle = styled.h2`
    color: ${props => props.color };
    font-size: 40px;
    font-weight: 500;
    transition: 500ms ease;
`

export const Paragraph = styled.p`
    padding: 1% 67% 40px 0;

`

export const Button = styled.button`
    color: var(--color-white);
    font-weight: bold;
    background-color: ${props => props.color };
    border: 2px solid #fff;
    padding: 15px 70px;
    text-decoration: none;
    cursor: pointer;
    border-radius: 25px;
    transition: 500ms ease;

    &:hover {
      background-color: transparent;
      border: 2px solid ${props => props.color};
      color: ${props => props.color};
    }
`
