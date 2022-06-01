import React from 'react';
import { useState, useEffect } from "react"; 
import { Nav, NavLink, NavItem, NavMenu, NavInf, NavLabel, NavbarContainer, MobileIcon, NavLogo } from './styles';
import { FaBars, FaTimes } from "react-icons/fa";
import lockLogo from '../../assets/icons/lock.svg'
import { IconContext } from "react-icons/lib";

export function Navbar() {
  const [click, setClick] = useState(false); 
  const handleClick = () => setClick(!click);  
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    <IconContext.Provider value={{ color: "var(--color-black)" }}>  
      <Nav>
        <NavbarContainer>
          <NavLogo to='/' onClick={closeMobileMenu}>
            <h1>Supermercado SQ</h1>
          </NavLogo>
          <MobileIcon onClick={handleClick}>  
                {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLink to='/login' activestyle={{ color: '#3EBCD3'}} onClick={closeMobileMenu}>
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/register' activestyle={{ color: '#3EBCD3'}} onClick={closeMobileMenu}>
                Registro
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/product' activestyle={{ color: '#3EBCD3'}} onClick={closeMobileMenu}>
                Produto
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/about' activestyle={{ color: '#3EBCD3'}}
              onClick={closeMobileMenu}>
                Sobre
              </NavLink>
            </NavItem>
          </NavMenu>
          <NavInf>
            <NavLabel>Visitante</NavLabel>
            <img src={lockLogo} />
          </NavInf>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
}

