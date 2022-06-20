import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  background: transparent; /* transparent */
  height: 7vh; /* 6rem */
  display: flex;
  padding: 0.5rem calc((100vw - 1000px)/2);
  z-index: 10;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

export const NavLogo = styled(Link)`
  color: var(--color-black);
  display: flex;
  margin-right: 3.5vw;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;

  @media screen and (max-width: 850px){
    margin-right: 1vw;
  }
`;

export const NavLink = styled(Link)`
  color: var(--color-black);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;
  color: var(--color-black);

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
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
  height: 80px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #4b59f7;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavInf = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const NavLabel = styled.div`
  padding: 10px 5px 10px 22px;
`;
