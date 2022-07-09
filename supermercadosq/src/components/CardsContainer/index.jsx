import React from "react";
import { DivCards } from "./styles";
import { AddProductCard } from "../../components/AddProductCard";
import { ProductCard } from "../../components/ProductCard";

export function CardsContainer ({
    // id_product,
    // nome_product
}){
    return(
        <DivCards>
            <AddProductCard/>
            <ProductCard
                // id_product={id_product}
                // nome_product={nome_product}
            />
        </DivCards>
    );
};