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
  DivIconCircle,
  DivProductAllergy,
  DivProductAllergyEffect,
  DivIconBack,
  Span,
} from "./styles";
import { FaUserCircle } from "react-icons/fa";
import { GoComment } from "react-icons/go";

export function ProductCard({
  nome,
  alergia = "",
  descricao = "",
  ingredientes = "",
  imagem,
  usuario,
  dataPostagem,
  color,
  icon,
  setOpenModal,
  onClick,
}) {
  return (
    <DivProductCardFace onClick={onClick}>
      <DivProductCardFront className="front">
        <img src={imagem} className="restrictionImg" />
        <DivRestrictionAndName>
          {Array.isArray(color) ? (
            color?.map((item, index) => (
              <DivIconBack top="12px" color={item}>
                <img className="icon" src={icon[index]} />
              </DivIconBack>
            ))
          ) : (
            <DivIconBack top="12px" color={color}>
              <img className="icon" src={icon} />
            </DivIconBack>
          )}
          <p className="productName">{nome}</p>
          <Span color={Array.isArray(color) ? color[0] : color}></Span>
        </DivRestrictionAndName>
      </DivProductCardFront>
      <DivProductCardBack className="back">
        <DivProductCardBackContent
          color={Array.isArray(color) ? color[0] : color}
        >
          <h2>{nome}</h2>
          <DivBackContentInfos color={Array.isArray(color) ? color[0] : color}>
            <DivProductDescription>
              <p>{descricao}</p>
            </DivProductDescription>
            <DivPersonDetails>
              <FaUserCircle className="user-image" />
              <DivNameAndPubDate>
                <p className="pPersonName">{usuario}</p>
                <p className="pPubDate">
                  Publicação feita em{" "}
                  {dataPostagem.split("T")[0].split("-").reverse().join("/")}
                </p>
              </DivNameAndPubDate>
            </DivPersonDetails>
          </DivBackContentInfos>
          <DivComment color={Array.isArray(color) ? color[0] : color}>
            <button className="comment-btn">
              <GoComment onClick={setOpenModal} className="comment-icon" />
            </button>
          </DivComment>
        </DivProductCardBackContent>
      </DivProductCardBack>
    </DivProductCardFace>
  );
}
