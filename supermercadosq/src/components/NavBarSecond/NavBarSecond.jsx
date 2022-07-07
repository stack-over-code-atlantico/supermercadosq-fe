import React from 'react';
import { useState, useEffect } from "react";
import Cookie from 'js-cookie';
import { isAfter } from 'date-fns';
import {
  Nav,
  NavLink,
  NavItem,
  NavMenu,
  NavbarContainer,
} from '../../components/NavBarSecond/styles.jsx';
import { FaBars, FaTimes } from "react-icons/fa";
import lockLogo from '../../assets/icons/lock.svg';
import logoutIcon from '../../assets/icons/logout-icon.png';
import { IconContext } from "react-icons/lib";
import { logout } from '../../services/useAuth';

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [isLogged, setIsLogged] = useState(false)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <IconContext.Provider value={{ color: "var(--color-white)" }}>
        <Nav>
          <NavbarContainer>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLink to='/login/home' onClick={closeMobileMenu}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/login/profile' onClick={closeMobileMenu} className='borderbottom'>
                  Perfil
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/login/postagens' onClick={closeMobileMenu}>
                  Postagens
                </NavLink>
              </NavItem>  
              
              <NavItem>
                <NavLink to='/login/sair' onClick={closeMobileMenu}>
                  Sair
                </NavLink>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

