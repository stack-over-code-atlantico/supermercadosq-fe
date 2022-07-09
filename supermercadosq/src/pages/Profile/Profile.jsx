import React, { useState } from 'react';
import Routes from '../../Routes/AppRoutes';
import NavBar from '../../components/NavBarSecond/NavBarSecond';
import SideBar from '../../components/SideBar/SideBar';
import ProfileInformationForm from '../../components/ProfileInformation/ProfileInformation';
import PasswordSecurityForm from '../../components/PasswordSecurity/PasswordSecurity';
import PostCommentsForm from '../../components/PostComments/PostComments';

export default function Profile() {
  const [isProfile, setIsProfile] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPosts, setIsPosts] = useState(false);

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
      <div style={{ width: '100%', display: 'grid', gridTemplateColumns: '20% 80%' }}>
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
