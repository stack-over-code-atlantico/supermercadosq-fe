import React from 'react';
import { SideLink } from './styles';
import { BiChevronRight } from 'react-icons/bi';

export default function ProfileInformation() {
  return (
     <>
      
      <SideLink to='/login/profile' >
        <div style={{ display: 'flex', alignItems: 'center'}}>
          Informações do perfil 
          <BiChevronRight size='1.5rem' />
        </div>  
      </SideLink>
     </>
  );
} 