import React from "react";

import { DivRestrictionAndName, DivProductCardFace, DivProductCardFront, DivProductCardBack, DivProductCardBackContent, DivBackContentInfos, DivProductDescription, DivPersonDetails, DivNameAndPubDate, DivComment } from './styles';
import LeiteCondensado from '../../assets/images/leite-condensado-italac.jpg'
import Bola from '../../assets/images/bola.jpg'

export function ProductCard (){
    return(
        <DivProductCardFace>
            <DivProductCardFront className="front">
                <img src={LeiteCondensado} className="restrictionImg"/>
                <DivRestrictionAndName>
                    <img src={Bola}/>
                    <p className="productName">Leite Condensado Italac</p>
                </DivRestrictionAndName>
            </DivProductCardFront>
            <DivProductCardBack className="back">
                <img src={Bola}/>
                <DivProductCardBackContent>
                    <h2>Leite Condensado</h2>
                    <div className="divLittleBall"></div>
                    <DivBackContentInfos>
                        <DivProductDescription>
                            <p><span>Lorem ipsum</span> dolor sit amet consectetur adipisicing elit. Dignissimos cupiditate ab aperiam reprehenderit quaerat tempore aut, facilis eaque laudantium recusandae odio voluptatum incidunt sint voluptas doloremque ullam laborum consectetur modi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis commodi facilis a labore, tenetur exercitationem repellat </p>
                        </DivProductDescription>
                        <DivPersonDetails>
                            <img src={Bola}/>
                            <DivNameAndPubDate>
                                <p className="pPersonName">Emanuel Victor</p>
                                <p className="pPubDate">Publicação feita em 28/06/2022</p>
                            </DivNameAndPubDate>
                        </DivPersonDetails>
                    </DivBackContentInfos>
                    <DivComment>
                        <img src={Bola}/>
                    </DivComment>
                </DivProductCardBackContent>
            </DivProductCardBack>
        </DivProductCardFace>
        
    );
};