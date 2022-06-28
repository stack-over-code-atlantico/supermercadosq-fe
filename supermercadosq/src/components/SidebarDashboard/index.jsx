import React, { useState } from 'react';
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
import userIcon from '../../assets/icons/user-icon.png';
import backIcon from '../../assets/icons/back-icon.png';

const SidebarDashboard = () => {

  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Sidebar opened={open}>
        <CloseButton onClick={handleOpen}>
          {
            !open
              ? (
                <CloseIcon
                  width="7px"
                  src={backIcon}
                  style={{ transform: 'rotate(180deg)' }}
                />
              )
              : (
                <CloseIcon
                  width="7px"
                  src={backIcon}
                />
              )
          }
        </CloseButton>

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

        <SidebarButton>
          <SpanButton left="-51px">
            <ButtonIcon src={userIcon} />
            Usuários
          </SpanButton>
        </SidebarButton>
      </Sidebar>
    </>
  );
};

export default SidebarDashboard;
