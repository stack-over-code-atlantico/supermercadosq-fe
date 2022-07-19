import React from "react";
import { useState, useEffect } from "react";
import Cookie from "js-cookie";
import { isAfter } from "date-fns";
import {
  Nav,
  NavLink,
  NavItem,
  NavMenu,
  NavInf,
  NavLabel,
  NavbarContainer,
  MobileIcon,
  NavLogo,
  NavLogout,
  NavIcon,
} from "./styles";
import { FaBars, FaTimes } from "react-icons/fa";
import lockLogo from "../../assets/icons/lock.svg";
import logoutIcon from "../../assets/icons/logout-icon.png";
import { IconContext } from "react-icons/lib";
import useAuth from "../../services/useAuth";
import Dialog from "../../components/Dialog";

export function Navbar() {
  const {logout, open, setOpen} = useAuth();
  const [click, setClick] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleLogoutModal = () => {
    setOpen(true);
  }

  const handleLogout = () => {
    logout();
  };

  const handleLogoutClose = () => {
    setOpen(false);
  }

  useEffect(() => {
    if (Cookie.get("token") && Cookie.get("expires")) {
      const expires = new Date(parseInt(Cookie.get("expires"), 10));
      if (isAfter(new Date(), expires)) {
        setIsLogged(true);
      }
    }
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "var(--color-black)" }}>
        {open ? (<Dialog logout={handleLogout} close={handleLogoutClose} />) : (<></>)}
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <h1>
                <span>Supermercado SQ</span>
              </h1>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              {isLogged ? (
                <></>
              ) : (
                <>
                  <NavItem>
                    <NavLink
                      to="/login"
                      activestyle={{ color: "#3EBCD3" }}
                      onClick={closeMobileMenu}
                    >
                      <span>Login</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="/register"
                      activestyle={{ color: "#3EBCD3" }}
                      onClick={closeMobileMenu}
                    >
                      <span>Registrar</span>
                    </NavLink>
                  </NavItem>
                </>
              )}
              {isLogged ? (
                <NavLogout onClick={handleLogoutModal}>
                  Sair
                  <NavIcon src={logoutIcon} />
                </NavLogout>
              ) : (
                <NavInf>
                  <NavLabel>
                    Visitante
                    <NavIcon src={lockLogo} />
                  </NavLabel>
                </NavInf>
              )}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}
