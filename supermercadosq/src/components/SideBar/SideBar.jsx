import React from 'react';
import { SideBarContainer } from './styles'
import InformacoesPerfil from '../../components/ProfileInformation/ProfileInformation';
import SenhasSegurança from '../../components/PasswordSecurity/PasswordSecurity';
import PostagensComentarios from '../../components/PostComments/PostComments';

export default function SideBar() {
  return (
    <SideBarContainer>
      <InformacoesPerfil />
      <SenhasSegurança />
      <PostagensComentarios />
    </SideBarContainer>
  );
}   