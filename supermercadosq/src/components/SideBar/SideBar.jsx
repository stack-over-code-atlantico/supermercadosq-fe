import React, { useState } from 'react';
import { SideBarContainer, SideItem, SideLink  } from './styles'
import { BiChevronRight } from 'react-icons/bi';
 

export default function SideBar({handleProfile, handlePassword, handlePosts}) {

  return (
    <SideBarContainer>
        <SideItem>
          <SideLink onClick={handleProfile}>
            Informações do perfil
          </SideLink>
        </SideItem>

        <SideItem>
          <SideLink onClick={handlePassword}>
              Senhas e segurança
          </SideLink>
        </SideItem>

        <SideItem>
          <SideLink onClick={handlePosts}>
              Postagens e comentários
          </SideLink>
        </SideItem>
        
    </SideBarContainer>
  );
}

// export default function SideBar({handleProfile, handlePassword, handlePosts}) {

//   return (
//     <SideBarContainer>
//         <SideItem>
//           <NavLink
//             activestyle={{fontWeight: 'bold'}}
//             to={handleProfile}
//           >
//             Informações do perfil
//           </NavLink>
//         </SideItem>
//         <SideItem>
//           <NavLink activeStyle={ {
//       textDecoration: 'none',
//       color: 'red'
//     }} to={handlePassword}>
//             {/* <div style={{ display: 'flex', alignItems: 'center', margin: '1rem 0'}}> */}
//               Senhas e segurança
//             {/* </div> */}
//           </NavLink>
//         </SideItem>
        
//         <SideItem>
//           <NavLink activestyle={{fontWeight: 'bold'}} to={handlePosts}>
//             {/* <div style={{ display: 'flex', alignItems: 'center'}}> */}
//               Postagens e comentários
//             {/* </div> */}
//           </NavLink>
//         </SideItem>

        
//     </SideBarContainer>
//   );
// }


