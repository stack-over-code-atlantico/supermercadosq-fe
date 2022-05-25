import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './styles';
import lockLogo from '../../assets/lock.svg'

export function Navbar() {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>Supermercado SQ</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/login' activestyle={{ color: '#3EBCD3'}}>
            Login
          </NavLink>
          <NavLink to='/register' activestyle={{ color: '#3EBCD3'}}>
            Registro
          </NavLink>
          <NavLink to='/product' activestyle={{ color: '#3EBCD3'}}>
            Produto
          </NavLink>
          <NavLink to='/about' activestyle={{ color: '#3EBCD3'}}>
            Sobre
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Visitante</NavBtnLink>
          <img src={lockLogo} />
        </NavBtn>
      </Nav>
    </>
  );
}

