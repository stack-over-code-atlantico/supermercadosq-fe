import React, { useState} from 'react'
import { Navbar } from '../../components/Navbar'
import { AboutComponent } from '../../components/About';
import { Circle } from '../../components/Circle';
import { MenuContext } from '../../Provider/Menu.provider';
import { Footer } from '../../components/Footer';


function About(){
  const color = '#3ebcd3';
  return (
    <MenuContext.Provider value={{ color }}>
      <Navbar />
      {/* <Circle /> */}
      <AboutComponent />
      <Footer />
    </MenuContext.Provider>
  )
}

export default About;
