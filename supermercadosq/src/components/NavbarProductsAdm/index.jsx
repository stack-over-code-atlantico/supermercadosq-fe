import React from "react";
import Vector from '../../assets/icons/vector.svg';
import { DivNavbarAdm, NavbarListAdm, ProductListItemAdm } from "../NavbarProductsAdm/styles";

export function NavbarAdm(){
    return(
        <DivNavbarAdm>
            <NavbarListAdm>
                <ProductListItemAdm>
                    <a href="#">Home</a>
                </ProductListItemAdm>
                <ProductListItemAdm>
                    <a href="#">Perfil</a>
                </ProductListItemAdm>
                <ProductListItemAdm>
                    <a href="#">
                        Moderação
                        <img src={Vector}/>
                    </a>
                </ProductListItemAdm>
                <ProductListItemAdm>
                    <a href="#">Sair</a>
                </ProductListItemAdm>
            </NavbarListAdm>
        </DivNavbarAdm>
    )
}