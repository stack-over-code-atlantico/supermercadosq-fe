import React, { useState, useEffect, useCallback } from 'react';
import { logout, userLevel  } from '../../services/useAuth';
import {
  Sidebar,
  SidebarName,
  SidebarEmail,
  SidebarButton,
  SpanButton,
  ButtonIcon,
  CloseButton,
  Filters,
} from './style';
import { FaComments } from "react-icons/fa";
import { BsFillFilePostFill, BsArrowLeftCircle } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { RiAdminLine } from "react-icons/ri";


const SidebarDashboard = ({
  handlePost,
  handleComment,
  hasPost,
  hasComment
}) => {

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
                  <BsArrowLeftCircle
                    style={{
                      color: 'white',
                      fontSize: '20px',
                      transform: 'rotate(180deg)',
                      transition: '500ms all ease'
                    }}
                  />
                </CloseButton>
              )
              : (
                <CloseButton onClick={handleOpen}>
                  <BsArrowLeftCircle
                    style={{
                      color: 'white',
                      fontSize: '20px',
                      transition: '500ms all ease'
                    }}
                  />
                </CloseButton>
              )
          }
        <SidebarName>
          {user.nome}
          <RiAdminLine style={{ fontSize: '30px'}} />
        </SidebarName>
        <SidebarEmail> {user.email} </SidebarEmail>

        <Filters>Filtros</Filters>
        <SidebarButton onClick={handlePost} active={hasPost}>
          <SpanButton left="-45px">
            <ButtonIcon>
              <BsFillFilePostFill />
            </ButtonIcon>

            Postagens
          </SpanButton>
        </SidebarButton>

        <SidebarButton onClick={handleComment} active={hasComment}>
          <SpanButton left="-37px">
            <ButtonIcon>
             <FaComments />
            </ButtonIcon>
            Comentários
          </SpanButton>
        </SidebarButton>

        <SidebarButton onClick={handleLogout} className="logout">
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
