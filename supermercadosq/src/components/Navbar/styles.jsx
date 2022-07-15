import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';


export const Nav = styled.nav`
  background: transparent;
  height: 7vh; /* 6rem */
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem;
  z-index: 10;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: pink; */
  width: 53%;
  margin: 0 0 0 5%;
  height: 6vh;
`;

export const NavLogo = styled(Link)`
  color: var(--color-black);
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  position: relative;
  left: 0rem;

  h1{
    word-wrap: nowrap;
  }

  @media screen and (max-width: 1340px) {
    position: relative;
    left: -3rem;
  }

  @media screen and (max-width: 900px){
    position: relative;
    left: -0.5rem;
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

  @media screen and (max-width: 1366px) {
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

  @media screen and (max-width: 1366px){
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

  position: relative;

  @media screen and (max-width: 1340px) {
    height: auto;
    border-bottom: 2px solid transparent;
    position: relative;
    top: 0.15rem;
    left: 11rem;
  }

  @media screen and (max-width: 900px) {
    height: auto;
    border-bottom: 2px solid transparent;
    position: relative;
    top: 0.15rem;
    left: 8rem;
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
  position: relative;
  top: -2px;
  left: 20px;
  @media screen and (max-width: 1366px){
    display: none;
  }
`;

export const NavLabel = styled.div`
`;

export const NavLogout = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1rem;
  position: relative;
`;

export const NavIcon = styled.img`
  width: 20px;
  position: relative;
  top: 5px;
  left: 5px;
`;
