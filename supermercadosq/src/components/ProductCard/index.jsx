import React from "react";

import {
  DivRestrictionAndName,
  DivProductCardFace,
  DivProductCardFront,
  DivProductCardBack,
  DivProductCardBackContent,
  DivBackContentInfos,
  DivProductDescription,
  DivPersonDetails,
  DivNameAndPubDate,
  DivComment,
  DivIconCircle
} from './styles';
import { FaUserCircle } from "react-icons/fa";
import { GoComment } from "react-icons/go";



export function ProductCard ({
  nome,
  alergia = '',
  descricao = '',
  ingredientes = '',
  imagem,
  usuario,
  dataPostagem,
  color,
  icon
}){
    return(
        <DivProductCardFace>
            <DivProductCardFront className="front">
                <img src={imagem} className="restrictionImg"/>
                <DivRestrictionAndName>
                    <DivIconCircle color={color} >
                      <img className="icon" src={icon} />
                    </DivIconCircle>
                    <p className="productName">{nome}</p>
                </DivRestrictionAndName>
            </DivProductCardFront>
            <DivProductCardBack className="back">
                {/* <img src={Bola}/> */}
                <DivProductCardBackContent color={color}>
                    <h2>{nome}</h2>
                    <div className="divLittleBall"></div>
                    <DivBackContentInfos color={color}>
                        <DivProductDescription>
                            <p>
                               {descricao}
                            </p>
                        </DivProductDescription>
                        <DivPersonDetails>
                            <FaUserCircle className="user-image"/>
                            <DivNameAndPubDate>
                                <p className="pPersonName">{usuario}</p>
                                <p className="pPubDate">Publicação feita em {
                                dataPostagem.split('T')[0].split('-').reverse().join('/')}</p>
                            </DivNameAndPubDate>
                        </DivPersonDetails>
                    </DivBackContentInfos>
                    <DivComment>
                        <button className="comment-btn">
                          <GoComment className="comment-icon" />
                        </button>
                    </DivComment>
                </DivProductCardBackContent>
            </DivProductCardBack>
        </DivProductCardFace>

    );
};
