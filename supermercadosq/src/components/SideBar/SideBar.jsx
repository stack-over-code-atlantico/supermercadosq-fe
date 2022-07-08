import React, { useState } from 'react';
import { SideBarContainer } from './styles'
import { SideLink, SideItem } from './styles';

import { BiChevronRight } from 'react-icons/bi';


export default function SideBar({handleProfile, handlePassword, handlePosts}) {

  return (
    <SideBarContainer>
        <SideItem>
          <SideLink
            activestyle={{fontWeight: 'bold'}}
            onClick={handleProfile}
          >
            Informações do perfil
          </SideLink>
        </SideItem>

        <SideLink activestyle={{fontWeight: 'bold'}} onClick={handlePassword}>
          <div style={{ display: 'flex', alignItems: 'center', margin: '1rem 0'}}>
            Senhas e segurança
          </div>
        </SideLink>

        <SideLink activestyle={{fontWeight: 'bold'}} onClick={handlePosts}>
          <div style={{ display: 'flex', alignItems: 'center'}}>
            Postagens e comentários
          </div>
        </SideLink>
    </SideBarContainer>
  );
}
