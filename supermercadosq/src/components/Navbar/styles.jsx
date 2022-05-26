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

export const NavLink = styled(Link)`
  color: var(--color-black);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const Bars = styled(FaBars)`
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

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 32px;

  & a.active{
    color: var(--color-blue-ciel);
  }

  @media screen and (max-width: 768px){
    display: none;
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
  padding: 10px 22px;
`;