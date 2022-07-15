import React, { useState } from 'react';
import { SideBarContainer, SideItem, SideLink  } from './styles'
import { MdKeyboardArrowRight } from "react-icons/md";



export default function SideBar({handleProfile, handlePassword, handlePosts}) {
  const [screens, setScreens] = useState({
    info: true,
    password: false,
    historic: false,
  });

  const handleInfo = () => {
    setScreens((prev) => ({
      info: true,
      password: false,
      historic: false,
    }));
  }

  const handlePasswordSide = () => {
    setScreens((prev) => ({
      info: false,
      password: true,
      historic: false,
    }));
  }

  const handleHistoric = () => {
    setScreens((prev) => ({
      info: false,
      password: false,
      historic: true,
    }));
  }



  return (
    <SideBarContainer>
        <SideItem>
          <SideLink onClick={() => {
            handleProfile()
            handleInfo()
          }}>
            Informações do perfil
            { screens.info ? <MdKeyboardArrowRight size="28px" /> : ''}
          </SideLink>
        </SideItem>

        <SideItem>
          <SideLink onClick={() => {
            handlePassword()
            handlePasswordSide()
          }}>
              Senhas e segurança
            { screens.password ? <MdKeyboardArrowRight size="28px" /> : ''}
          </SideLink>
        </SideItem>

        <SideItem>
          <SideLink onClick={() => {
            handlePosts()
            handleHistoric()
          }}>
              Postagens e comentários
              { screens.historic ? <MdKeyboardArrowRight size="28px" /> : ''}
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


