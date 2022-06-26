import React from 'react'
import { DivNavbarProducts, NavbarList, ProductListItem } from './styles'

export function NavbarProducts(){
    return(
        <DivNavbarProducts>
            <NavbarList>
                <ProductListItem>
                    <a href='#'>Home</a>
                </ProductListItem>
                <ProductListItem>
                    <a href='#'>Perfil</a>
                </ProductListItem>
                <ProductListItem>
                    <a href='#'>Postagens</a>
                </ProductListItem>
                <ProductListItem>
                    <a href='#'>Comentários</a>
                </ProductListItem>
                <ProductListItem>
                    <a href='#'>Sair</a>
                </ProductListItem>
            </NavbarList>
        </DivNavbarProducts>
    )
}