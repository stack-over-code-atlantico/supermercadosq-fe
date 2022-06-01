import React from 'react'
import { Navbar } from '../../components/Navbar'

export function Product(){
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
