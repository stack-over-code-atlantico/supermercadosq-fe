import React from 'react';
import Routes from '../../Routes/AppRoutes';
import NavBar from '../../components/NavBarSecond/NavBarSecond';
import SideBar from '../../components/SideBar/SideBar';


export default function Profile() {
   return (
      <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
        <NavBar />
        <SideBar />

      </div>
   );
}
