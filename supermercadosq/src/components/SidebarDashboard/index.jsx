import React from 'react';
import { Sidebar, SidebarName, SidebarEmail, SidebarIcon, SidebarButton } from './style';
import admIcon from '../../assets/icons/adm-icon.png';

const SidebarDashboard = ({ onClick }) => {



  return (
    <Sidebar>

      <SidebarName>
        User name
        <SidebarIcon src={admIcon} />
      </SidebarName>
      <SidebarEmail>
        email@email.com
      </SidebarEmail>

      <SidebarButton onClick={onClick}>
        Postagens
      </SidebarButton>
      <SidebarButton>
        Comentários
      </SidebarButton>
      <SidebarButton>
        Usuários
      </SidebarButton>

    </Sidebar>
  );
};

export default SidebarDashboard;
