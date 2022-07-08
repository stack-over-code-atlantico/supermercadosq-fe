import React from 'react';
import { SideBarContainer } from './styles'
import { SideLink, SideItem } from './styles';

import { BiChevronRight } from 'react-icons/bi';


export default function SideBar() {

  return (
    <SideBarContainer> 
        <SideItem>
          <SideLink to='/profile/profileinformation' activestyle={{fontWeight: 'bold'}} >
            Informações do perfil           
          </SideLink>
        </SideItem>

        <SideLink to='/profile/passwordsecurity' activestyle={{fontWeight: 'bold'}}>
          <div style={{ display: 'flex', alignItems: 'center', margin: '1rem 0'}}>
            Senhas e segurança 
          </div>  
        </SideLink>

        <SideLink to='/profile/postcomments' activestyle={{fontWeight: 'bold'}}>
          <div style={{ display: 'flex', alignItems: 'center'}}>
            Postagens e comentários
          </div>  
        </SideLink>
    </SideBarContainer>
  );
}   