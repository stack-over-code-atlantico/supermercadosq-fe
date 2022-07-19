import React, { useState, useEffect } from "react";
import SideBar from "../../components/SideBar/SideBar";
import ProfileInformationForm from "../../components/ProfileInformation/ProfileInformation";
import PasswordSecurityForm from "../../components/PasswordSecurity/PasswordSecurity";
import PostCommentsForm from "../../components/PostComments/PostComments";
import { getUserById } from "../../services/useUser";
import useAuth from "../../services/useAuth";
import { NavbarProducts } from "../../components/NavbarProducts";
import { NavbarAdm } from "../../components/NavbarProductsAdm";
import Dialog from "../../components/Dialog";

export default function Profile() {
  const {userLevel, open, setOpen, logout} = useAuth();
  const [isProfile, setIsProfile] = useState(true);
  const [isPassword, setIsPassword] = useState(false);
  const [isPosts, setIsPosts] = useState(false);
  const [data, setData] = useState({});

  function getUserData(id_usuario) {
    getUserById(id_usuario).then((resp) => {
      setData(resp.data);
    });
  }

  const handleLogoutModal = () => {
    setOpen(true);
  }

  const handleLogout = () => {
    logout();
  };

  const handleLogoutClose = () => {
    setOpen(false);
  }

  useEffect(() => {
    const { id_usuario } = userLevel();
    getUserData(id_usuario);
  }, []);

  const handleProfileScreen = () => {
    setIsProfile(true);
    setIsPassword(false);
    setIsPosts(false);
  };

  const handlePasswordScreen = () => {
    setIsPassword(true);
    setIsProfile(false);
    setIsPosts(false);
  };

  const handlePostsScreen = () => {
    setIsPosts(true);
    setIsPassword(false);
    setIsProfile(false);
  };

  return (
    <>
    {open ? (<Dialog color="#3EBCD3" close={handleLogoutClose} logout={handleLogout} />) : (<></>)}
    {
      userLevel() && (userLevel().nivel !== 'ADMINISTRADOR' || userLevel().nivel !== 'administrador')
        ? (<NavbarProducts logoff={handleLogoutModal} />)
        : (<NavbarAdm logoff={handleLogoutModal} />)
    }
    <div
      style={{ width: "100%", display: "grid", gridTemplateColumns: "20% 70%" }}
    >
      <SideBar
        handleProfile={handleProfileScreen}
        handlePassword={handlePasswordScreen}
        handlePosts={handlePostsScreen}
      />
      {isProfile ? <ProfileInformationForm data={data} /> : <></>}
      {isPassword ? <PasswordSecurityForm /> : <></>}
      {isPosts ? <PostCommentsForm data={data} /> : <></>}
    </div>
    </>
  );
}
