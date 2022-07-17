import React, { useState } from "react";
import { SideBarContainer, SideItem, SideLink } from "./styles";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function SideBar({
  handleProfile,
  handlePassword,
  handlePosts,
}) {
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
  };

  const handlePasswordSide = () => {
    setScreens((prev) => ({
      info: false,
      password: true,
      historic: false,
    }));
  };

  const handleHistoric = () => {
    setScreens((prev) => ({
      info: false,
      password: false,
      historic: true,
    }));
  };

  return (
    <SideBarContainer>
      <SideItem>
        <SideLink
          onClick={() => {
            handleProfile();
            handleInfo();
          }}
        >
          Informações do perfil
          {screens.info ? <MdKeyboardArrowRight size="28px" /> : ""}
        </SideLink>
      </SideItem>

      <SideItem>
        <SideLink
          onClick={() => {
            handlePassword();
            handlePasswordSide();
          }}
        >
          Senhas e segurança
          {screens.password ? <MdKeyboardArrowRight size="28px" /> : ""}
        </SideLink>
      </SideItem>

      <SideItem>
        <SideLink
          onClick={() => {
            handlePosts();
            handleHistoric();
          }}
        >
          Postagens e comentários
          {screens.historic ? <MdKeyboardArrowRight size="28px" /> : ""}
        </SideLink>
      </SideItem>
    </SideBarContainer>
  );
}
