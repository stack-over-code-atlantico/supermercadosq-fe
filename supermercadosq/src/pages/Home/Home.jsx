import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Circle } from '../../components/Circle/index'
import { TextoBlog } from '../../components/TextoBlog/index'
import CircleMenu from '../../components/CircleMenu/index';
import { MenuContext } from '../../Provider/Menu.provider';

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

  return (
    <MenuContext.Provider value={{allergyMenu, setAllergyMenu}}>
      <Navbar />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'}}
      >
        <Circle />
        <TextoBlog />
        <CircleMenu />
      </div>
    </MenuContext.Provider>
  );
}

export default Home;
