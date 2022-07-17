import styled from "styled-components";

export const DivFooter = styled.div`
  background-color: var(--color-blue-light);
  color: var(--color-white);

  display: flex;
  flex-direction: column;
  justify-content: center;

  p.powered {
    font-size: 16px;
    display: flex;
    justify-content: center;    
    span {
        font-size: 16px;
        display: flex;
        justify-content: center;
        padding-bottom: 10px;

        a {
            font-weight: bold;
        }
    }
`;

export const PoweredText = styled.div`
    text-align: center;
    margin: 0 auto;
    padding-bottom: 10px;

    a {
        font-weight: bold;
        text-decoration: none;
        color: var(--color-white);

        transition: 200ms ease-in-out;

        &:hover {
            opacity: 0.6;
        }
    }
`

export const CopyrightText = styled.p`
  padding: 10px 20px;
  font-size: 12px;
  display: flex;
  justify-content: center;
`;

export const MenuFooter = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  list-style: none;
  padding: 10px 0px;

    a {
        font-size: 16px;
        text-decoration: none;
        color: var(--color-white);
        transition: 200ms ease-in-out;

        &:hover {
            opacity: 0.6;
        }
    }
`;

export const SocialMediaIcon = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 10px 0px;
    
    img {
        width: 1.25rem;
        transition: 200ms ease-in-out;

        &:hover {
            opacity: 0.6;
        }
    }
    
`;

