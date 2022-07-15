import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Circle } from '../../components/Circle/index'
import { TextoBlog } from '../../components/TextoBlog/index'
import CircleMenu from '../../components/CircleMenu/index';
import { MenuContext } from '../../Provider/Menu.provider';
import { userLevel } from '../../services/useAuth';

export function Home(){

  const [allergyMenu, setAllergyMenu] = useState({
    home: false,
    egg: false,
    wheat: false,
    peanut: false,
    mustard: false,
    fish: false,
    seafood: false,
    milk: false,
  });

  userLevel();

  return (
    <MenuContext.Provider value={{allergyMenu, setAllergyMenu}}>
      <Navbar />
      <div style={{
        width: '53%',
        margin: '0 0 0 26%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        // backgroundColor: 'red',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh'}}
        >
          <div>
            <Circle />
            <TextoBlog />
          </div>
          <CircleMenu />
        </div>
      </div>
    </MenuContext.Provider>
  );
}

export default Home;
