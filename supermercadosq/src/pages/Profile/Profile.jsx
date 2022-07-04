import React from 'react';
import Routes from '../../Routes/AppRoutes';
import NavBar from '../../components/NavBarSecond/NavBarSecond';
import MenuBar from '../../components/MenuBar/MenuBar';
import InformacoesPerfil from '../../components/ProfileInformation/ProfileInformation';
import SenhasSegurança from '../../components/PasswordSecurity/PasswordSecurity';
import PostagensComentarios from '../../components/PostComments/PostComments';

export default function Profile() {
   return (
      <>
        <NavBar />
        <MenuBar />
        <InformacoesPerfil />
        <SenhasSegurança />
        <PostagensComentarios />
      </>
   );
}