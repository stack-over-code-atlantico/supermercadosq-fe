import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: var(--color-blue-light); 
  height: 7vh; /* 6rem */
  display: flex;
  justify-content: center;
  padding: 0.5rem calc((100vw - 600px)/2);
  z-index: 10;
  position: fixed;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
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
  padding: 0 4rem;
  border-bottom: 2px solid transparent;

  .border-bottom {
    height: 30px;
    border-bottom: 2px solid var(--color-white);
  }

  &:hover {
    border-bottom: 2px solid var(--color-white);
  }


  @media screen and (max-width: 768px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavLink = styled(Link)`
  color: var(--color-white);
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
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

export const NavLogout = styled.button`
  background-color: transparent;
  color: var(--color-white);
  font-weight: bold;
  border: none;
  font-size: 1rem;
  position: relative;
  height: 100%;
`;


