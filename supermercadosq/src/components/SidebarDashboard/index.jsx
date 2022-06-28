import React, { useState } from 'react';
import { logout } from '../../services/useAuth';
import {
  Sidebar,
  SidebarName,
  SidebarEmail,
  SidebarIcon,
  SidebarButton,
  SpanButton,
  ButtonIcon,
  CloseButton,
  CloseIcon,
} from './style';
import admIcon from '../../assets/icons/adm-icon.png';
import postIcon from '../../assets/icons/post-icon.png';
import commentIcon from '../../assets/icons/comment-icon.png';
import logoutIcon from '../../assets/icons/logout-icon.png';
import backIcon from '../../assets/icons/back-icon.png';

const SidebarDashboard = () => {

  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <Sidebar opened={open}>
          {
            !open
              ? (
                <CloseButton className={"open-btn"} onClick={handleOpen}>
                  <CloseIcon
                    width="7px"
                    src={backIcon}
                    style={{ transform: 'rotate(180deg)' }}
                  />
                </CloseButton>
              )
              : (
                <CloseButton onClick={handleOpen}>
                  <CloseIcon
                    width="7px"
                    src={backIcon}
                  />
                </CloseButton>
              )
          }
        <SidebarName>
          Emanuel
          <SidebarIcon src={admIcon} />
        </SidebarName>
        <SidebarEmail> email@email.com </SidebarEmail>

        <SidebarButton>
          <SpanButton left="-45px">
            <ButtonIcon src={postIcon} />
            Postagens
          </SpanButton>
        </SidebarButton>

        <SidebarButton>
          <SpanButton left="-37px">
            <ButtonIcon src={commentIcon} />
            Comentários
          </SpanButton>
        </SidebarButton>

        <SidebarButton onClick={handleLogout}>
          <SpanButton left="-68px">
            <ButtonIcon src={logoutIcon}/>
            Sair
          </SpanButton>
        </SidebarButton>
      </Sidebar>
    </>
  );
};

export default SidebarDashboard;
