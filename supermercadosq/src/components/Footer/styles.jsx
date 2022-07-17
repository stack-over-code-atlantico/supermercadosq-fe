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
    padding: 10px 0px;
  }
`;

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
  }
`;

export const SocialMediaIcon = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  list-style: none;
  padding: 10px 0px;

  img {
    width: 16px;
  }
`;
