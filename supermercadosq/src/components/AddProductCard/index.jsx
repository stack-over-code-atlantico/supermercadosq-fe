import React from "react";
import { DivAddProductCard, DivButtonAddProductCard } from "./styles";

export function AddProductCard({ onClick }) {
  return (
    <DivAddProductCard onClick={onClick}>
      <DivButtonAddProductCard>
        <h1>+</h1>
      </DivButtonAddProductCard>
      <h3>Criar postagem</h3>
    </DivAddProductCard>
  );
}
