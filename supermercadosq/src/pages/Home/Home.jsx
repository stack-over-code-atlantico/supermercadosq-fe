import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Circle } from '../../components/Circle/index'
import { TextoBlog } from '../../components/TextoBlog/index'

export function Home(){
  return (
    <>
    <Navbar />
    <div style={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '90vh'}}
    >
      <Circle />
      <TextoBlog />
    </div>
    </>
  );
}

export default Home
