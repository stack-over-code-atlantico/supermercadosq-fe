import React from 'react';
import { Navbar } from '../../components/Navbar';

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
      <h1>Home</h1>
    </div>
    </>
  );
}
