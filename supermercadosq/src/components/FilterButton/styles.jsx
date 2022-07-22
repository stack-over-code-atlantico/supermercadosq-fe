import styled from "styled-components";

export const DivFilter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: ${props => props.position ? 'relative' : 'absolute'};
  z-index: 2;
  top: 140px;
  left: ${props => props.left ? `calc(50% - ${props.left})` : ''};
  margin: 1rem 1rem 1rem 19.2rem;
  visibility: ${props => props.hidden ? 'hidden' : ''};

  a {
    text-decoration: none;
    color: #fff;
    font-size: 14px;
  }

  label {
    text-decoration: none;
    color: #fff;
  }

  label:hover {
    opacity: 0.8;
  }

  ul {
    list-style: none;
  }

  img {
    width: 22px;
    height: 22px;
    border: none;
  }

  input[type="checkbox"] {
    height: 22px;
    width: 22px;
    cursor: pointer;
  }

  input:checked {
    background-color: #2a91a3;
    border-radius: 3px;
    appearance: none;
    transition: 300ms all ease;
  }

  input:checked:after {
    content: "";
    display: block;
    position: relative;
    left: 1px;
    width: 5px;
    height: 10px;
    border: 3px solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
    margin: 2px 6px;
  }

  .listaFiltros {
    background-color: #3EBCD3;
    display: flex;
    align-items: center;
    width: 240px;
    padding: 0.4rem 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    color: var(--color-white);
    font-weight: 300;
    position: relative;

    top: -40px;
    right: -175px;
  }

  .listaFiltros .itemFiltrar a {
    display: flex;
    justify-content: center;
    height: 50px;
    align-items: center;
    padding: 0 1.25rem;
    margin: 0 auto;
    cursor: text;
  }

  .listaFiltros .itemFiltrar .subLista {
    display: flex;
    flex-direction: column;
    display: none;
  }

  .listaFiltros:hover {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .subLista {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      gap: 5px;
      margin: 0;
    }
  }

  .listaFiltros .itemFiltrar .subLista .itemLista {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 50px;
    padding: 0;
    cursor: pointer;

    label {
      cursor: pointer;
    }
  }
`;

export const FilterIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #2a91a3;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 26px;
    height: 26px;
    filter: invert(100%);
  }
`;
