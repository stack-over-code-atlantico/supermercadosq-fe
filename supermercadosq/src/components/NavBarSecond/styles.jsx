import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: var(--color-blue-light); /* transparent */
  height: 7vh; /* 6rem */
  display: flex;
  justify-content: center;
  padding: 0.5rem calc((100vw - 1000px)/2);
  z-index: 10;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;


export const NavLink = styled(Link)`
  color: var(--color-white);
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  padding: 0 4rem;
  height: 100%;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      transition: all 0.3s ease;
    }
  }
`;


export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;
  margin-right: 8vw;

  @media screen and (max-width: 850px){
    margin-right: 5vw;
  }

  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.6s ease;
    background: var(--color-gray);
  }
`;

export const NavItem = styled.li`
  height: 30px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid var(--color-white);
  }
  .borderbottom {
    border-bottom: 2px solid var(--color-white);
  }
  
  @media screen and (max-width: 768px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;
