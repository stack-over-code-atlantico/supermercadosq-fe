import React from "react";
import { useState, useEffect } from "react";
import Cookie from "js-cookie";
import { isAfter } from "date-fns";
import {
  Nav,
  NavLink,
  NavItem,
  NavMenu,
  NavbarContainer,
  NavLogout,
} from "../../components/NavBarSecond/styles.jsx";
import { FaBars, FaTimes } from "react-icons/fa";
import lockLogo from "../../assets/icons/lock.svg";
import { IconContext } from "react-icons/lib";
import { logout } from "../../services/useAuth";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "var(--color-white)" }}>
        <Nav>
          <NavbarContainer>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLink
                  to="/"
                  activestyle={{ borderBottom: "2px solid var(--color-white)" }}
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/profile"
                  onClick={closeMobileMenu}
                  className="border-bottom"
                >
                  Perfil
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/product"
                  activestyle={{ borderBottom: "2px solid var(--color-white)" }}
                  onClick={closeMobileMenu}
                >
                  Produtos
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLogout onClick={handleLogout}>Sair</NavLogout>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}
