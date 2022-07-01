import React from  'react'
import { DivAddProductCard, DivButtonAddProductCard } from './styles'
import SumSimbol from '../../assets/icons/sum.svg'

export function AddProductCard(){
    return(
            <DivAddProductCard>
                <DivButtonAddProductCard>
                    <img src={SumSimbol}/>
                </DivButtonAddProductCard>
            </DivAddProductCard>
    )
}