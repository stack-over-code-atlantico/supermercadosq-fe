import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  background: transparent; /* transparent */
  height: 90px; /* 6rem */
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px)/2);
  z-index: 10;
`;

export const NavbarContainer = styled.div`  
  display: flex;  
  justify-content: space-between;  
  height: 80px;   
`;  

export const NavLink = styled(Link)`
  color: var(--color-black);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
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

  margin-right: 32px;

  @media screen and (max-width: 768px){
    display: none;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;  
    transition: all 0.5s ease;
    background: var(--color-gray);
  }
`;

export const NavItem = styled.li`  
  height: 80px;  
  border-bottom: 2px solid transparent;  
  &:hover {  
    border-bottom: 2px solid #4b59f7;  
  }  
  @media screen and (max-width: 960px) {  
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