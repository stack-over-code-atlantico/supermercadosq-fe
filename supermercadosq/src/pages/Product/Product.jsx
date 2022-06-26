import React from 'react'
import { NavbarProducts } from '../../components/NavbarProducts'
//import { CardsProducts } from '../../components/CardsProducts'
import { Footer } from '../../components/Footer'
import { NavbarAdm } from '../../components/NavbarProductsAdm'
import { AddProductCard } from '../../components/AddProductCard'

export function Product(){
  return (
    <>
      <NavbarAdm/>
      <NavbarProducts />
      <AddProductCard/>
      {/* <CardsProducts /> */}
      <Footer />
    </>
  )
}

export default Product
