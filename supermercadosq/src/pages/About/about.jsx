import React from 'react'
import { Navbar } from '../../components/Navbar'

export function About(){
  return (
    <>
    <Navbar />
    <div style={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '90vh'}}
    >

      <h1>About</h1>
    </div>
    </>
  )
}

export default About
