import React, { useEffect, useState } from 'react'

import { NavbarProducts } from '../../components/NavbarProducts'
import { Footer } from '../../components/Footer'
import { NavbarAdm } from '../../components/NavbarProductsAdm'
import { CardsContainer } from '../../components/CardsContainer'
import { FilterButton } from '../../components/FilterButton'
import { getAllProducts } from '../../services/useProducts'
import { ListProducts } from './styles' 

export function Product () {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     AllProducts(0)
//   }, []);


// async function AllProducts(page) {
//   await getAllProducts(page).then((resp)=>{
//     setPosts(resp.data)
//   })

    return (
      <>
        <NavbarAdm/>
        <NavbarProducts/>
        <FilterButton/>
        <CardsContainer/>
        {/* <ListProducts>
          {posts?.map((product)=>{
            return (
              <Product key={product.id_product}>
                <CardsContainer>
                  id_product={product?.id_product}
                  nome_product={product?.nome}
                </CardsContainer>
              </Product>
            )
          })}
        </ListProducts> */}
        <Footer/>
      </>
    )
  }
// }
export default Product;