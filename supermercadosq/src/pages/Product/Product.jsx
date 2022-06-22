import React from 'react'
import { Navbar } from '../../components/Navbar';
import { UserLevel } from '../../Provider/UserLevel.provider';
import { userLevel } from '../../services/useAuth';

export function Product(){

  console.log(userLevel());

  return (
    <>
    <Navbar />
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh'}}
    >
      <h1>Product</h1>
    </div>
    </>
  )
}

export default Product
