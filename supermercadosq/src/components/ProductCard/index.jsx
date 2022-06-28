import React from "react";

import { DivProductCard, DivRestrictionAndName } from './styles';
import LeiteCondensado from '../../assets/images/leite-condensado-italac.jpg'
import Bola from '../../assets/images/bola.jpg'

export function ProductCard (){
    return(
        <DivProductCard>
            <img src={LeiteCondensado} className="restrictionImg"/>
            <DivRestrictionAndName>
                <img src={Bola}/>
                <p className="productName">Leite Condensado Italac</p>
            </DivRestrictionAndName>
        </DivProductCard>
    );
};