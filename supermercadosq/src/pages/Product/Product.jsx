import React from 'react'

import { NavbarProducts } from '../../components/NavbarProducts'
import { Footer } from '../../components/Footer'
import { NavbarAdm } from '../../components/NavbarProductsAdm'
import { CardsContainer } from '../../components/CardsContainer'
import { FilterButton } from '../../components/FilterButton'

export function Product(){

  console.log(userLevel());

  return (
    <>
      <NavbarAdm/>
      <NavbarProducts/>
      <FilterButton/>
      <CardsContainer/>
      <Footer/>
    </>
  )
}

export default Product