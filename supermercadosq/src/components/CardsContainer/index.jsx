import React from "react";
import { DivCards } from "./styles";
import { AddProductCard } from "../../components/AddProductCard";
import { ProductCard } from "../../components/ProductCard";

export function CardsContainer (){
    return(
        <DivCards>
            <AddProductCard/>
            <ProductCard/>
        </DivCards>
    );
};