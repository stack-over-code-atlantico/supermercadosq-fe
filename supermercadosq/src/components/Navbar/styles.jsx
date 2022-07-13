import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';


export const Nav = styled.nav`
  background: transparent; /* transparent */
  height: 7vh; /* 6rem */
  display: flex;

  padding: 0.5rem;
  justify-content: space-between;
  z-index: 10;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-left: 28%;
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
  width: auto;
  height: 100%;


  span {
    display: block;
    width: 100%;
    position: relative;
    transition: 200ms ease all;
    cursor: pointer;

    &:hover {
      color: white;
    }
  }

  span:before {
    content: "";
    width: 0px;
    height: 2px;
    position: absolute;
    top: 32px;
    background-color: #ffffff;
    border-radius: 2px;
    transition: 500ms ease all;
  }

  span:hover:before {
    width: 100%;
  }

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
    top: -20px;
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
  height: auto;
  border-bottom: 2px solid transparent;

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
  position: relative;
  right: -50%;
`;

export const NavLogout = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1rem;
  position: relative;
  right: -45%;
`;

export const NavIcon = styled.img`
  width: 20px;
  position: relative;
  top: 5px;
  left: 5px;
`;
