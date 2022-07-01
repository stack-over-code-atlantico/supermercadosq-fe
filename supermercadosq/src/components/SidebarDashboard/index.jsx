import React, { useState, useEffect } from 'react';
import { logout, userLevel  } from '../../services/useAuth';
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
import backIcon from '../../assets/icons/back-icon.png';
import { FaComments } from "react-icons/fa";
import { BsFillFilePostFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { useCallback } from 'react';

const SidebarDashboard = () => {

  const [open, setOpen] = useState(true);
  const [user, setUser] = useState({});

  const handleOpen = useCallback(() => setOpen(!open));
  const handleLogout = useCallback(() => logout());

  useEffect(() => {
    setUser(userLevel);
  }, []);

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
          {user.nome}
          <SidebarIcon src={admIcon} />
        </SidebarName>
        <SidebarEmail> {user.email} </SidebarEmail>

        <SidebarButton>
          <SpanButton left="-45px">
            <ButtonIcon>
              <BsFillFilePostFill />
            </ButtonIcon>

            Postagens
          </SpanButton>
        </SidebarButton>

        <SidebarButton>
          <SpanButton left="-37px">
            <ButtonIcon>
             <FaComments />
            </ButtonIcon>
            Comentários
          </SpanButton>
        </SidebarButton>

        <SidebarButton onClick={handleLogout}>
          <SpanButton left="-68px">
            <ButtonIcon>
              <BiLogOut />
            </ButtonIcon>
            Sair
          </SpanButton>
        </SidebarButton>
      </Sidebar>
    </>
  );
};

export default SidebarDashboard;
