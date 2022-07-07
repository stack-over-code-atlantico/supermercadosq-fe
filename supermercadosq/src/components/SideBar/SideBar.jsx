import React from 'react';
import { SideBarContainer } from './styles'
import { SideLink } from './styles';
import { BiChevronRight } from 'react-icons/bi';


export default function SideBar() {
  return (
    <SideBarContainer>
       <SideLink to='/login/profile'>
        <div style={{ display: 'flex', alignItems: 'center'}} >
          Informações do perfil           
          <BiChevronRight size='1.5rem' />
        </div>  
      </SideLink>

      <SideLink to='/login/profile/teste2' >
        <div style={{ display: 'flex', alignItems: 'center', margin: '1rem 0'}}>
          Senhas e segurança 
        </div>  
      </SideLink>

      <SideLink to='/login/profile/teste3' >
        <div style={{ display: 'flex', alignItems: 'center'}}>
          Postagens e comentários
        </div>  
      </SideLink>
    </SideBarContainer>
  );
}   