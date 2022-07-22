import React, { useState } from "react";
import { DivFilter, FilterIcon } from "./styles";

export function FilterButton({
  title,
  left,
  hidden,
  alergias,
  setAlergias,
  egg,
  seafood,
  milk,
  mustard,
  fish,
  gluten,
  soja,
  peanut,
  wheat
}) {
  const handleChange = async (event) => {
    if (event.target.checked) {
      setAlergias((prev) => [
        ...Array.from(new Set([...prev, event.target.value])),
      ]);
    } else {
      const removeItem = alergias.indexOf(event.target.value);
      if (removeItem > -1) {
        alergias.splice(removeItem, 1);
        setAlergias((prev) => [...Array.from(new Set([...prev]))]);
      }
    }
  };

  return (
    <DivFilter left={left} hidden={hidden}>
      <ul className="listaFiltros">
        <li className="itemFiltrar">
          <a href="#">{title}</a>
          <ul className="subLista">
            <li className="itemLista">
              <input
                type="checkbox"
                id="peixe"
                value="peixe"
                onChange={handleChange}
              />
              <FilterIcon>
                <img src={fish} />
              </FilterIcon>
              <label htmlFor="peixe">Peixe</label>
            </li>
            <li className="itemLista">
              <input
                type="checkbox"
                id="soja"
                value="soja"
                onChange={handleChange}
              />
              <FilterIcon>
                <img src={soja} />
              </FilterIcon>
              <label htmlFor="soja">Soja</label>
            </li>
            <li className="itemLista">
              <input
                type="checkbox"
                id="cereais"
                value="cereais"
                onChange={handleChange}
              />
              <FilterIcon>
                <img src={wheat} />
              </FilterIcon>
              <label htmlFor="cereais">Cereais</label>
            </li>
            <li className="itemLista">
              <input
                type="checkbox"
                id="amendoim"
                value="amendoim"
                onChange={handleChange}
              />
              <FilterIcon>
                <img src={peanut} />
              </FilterIcon>
              <label htmlFor="amendoim">Amendoim</label>
            </li>
            <li className="itemLista">
              <input
                type="checkbox"
                id="mariscos"
                value="mariscos"
                onChange={handleChange}
              />
              <FilterIcon>
                <img src={seafood} />
              </FilterIcon>
              <label htmlFor="mariscos">Mariscos</label>
            </li>
            <li className="itemLista">
              <input
                type="checkbox"
                id="ovo"
                value="ovo"
                onChange={handleChange}
              />
              <FilterIcon>
                <img src={egg} />
              </FilterIcon>
              <label htmlFor="ovo">Ovo</label>
            </li>
            <li className="itemLista">
              <input
                type="checkbox"
                id="lactose"
                value="lactose"
                onChange={handleChange}
              />
              <FilterIcon>
                <img src={milk} />
              </FilterIcon>
              <label htmlFor="lactose">Lactose</label>
            </li>
            <li className="itemLista">
              <input
                type="checkbox"
                id="gluten"
                value="gluten"
                onChange={handleChange}
              />
              <FilterIcon>
                <img src={gluten} />
              </FilterIcon>
              <label htmlFor="lactose">Glúten</label>
            </li>
            <li className="itemLista">
              <input
                type="checkbox"
                id="mostarda"
                value="mostarda"
                onChange={handleChange}
              />
              <FilterIcon>
                <img src={mustard} />
              </FilterIcon>
              <label htmlFor="mostarda">Mostarda</label>
            </li>
          </ul>
        </li>
      </ul>
    </DivFilter>
  );
}
