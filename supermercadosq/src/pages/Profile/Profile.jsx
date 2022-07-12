import React, { useState, useEffect } from 'react';
import Routes from '../../Routes/AppRoutes';
import NavBar from '../../components/NavBarSecond/NavBarSecond';
import SideBar from '../../components/SideBar/SideBar';
import ProfileInformationForm from '../../components/ProfileInformation/ProfileInformation';
import PasswordSecurityForm from '../../components/PasswordSecurity/PasswordSecurity';
import PostCommentsForm from '../../components/PostComments/PostComments';
import { dataUser } from '../../services/useUser';
import { userLevel } from '../../services/useAuth';


export default function Profile() {
  const [isProfile, setIsProfile] = useState(true);
  const [isPassword, setIsPassword] = useState(false);
  const [isPosts, setIsPosts] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const {id_usuario} = userLevel();
    // console.log(id_usuario); 
    const teste = dataUser(id_usuario);
    setData(teste);
  },[])

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
      <div style={{ width: '100%', display: 'grid', gridTemplateColumns: '20% 70%' }}>
        <NavBar />
        <SideBar
          handleProfile={handleProfileScreen}
          handlePassword={handlePasswordScreen}
          handlePosts={handlePostsScreen}
        />
        {
          isProfile
            ? (<ProfileInformationForm />)
            : (<></>)
        }
        {
          isPassword
            ? (<PasswordSecurityForm />)
            : (<></>)
        }
        {
          isPosts
            ? (<PostCommentsForm />)
            : (<></>)
        }
      </div>
   );
}
