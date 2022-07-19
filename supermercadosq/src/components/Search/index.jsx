import React from "react";
import { SearchDiv } from "./styles";
import { BsSearch } from 'react-icons/bs';

export function Search({ handleSubmit, name, handleChange }) {

  return (
    <SearchDiv >
      <form className="search-box" onSubmit={handleSubmit}>
      <button className="btn-search">
        <BsSearch className="icon-search" />
      </button>
      <input
        type="text"
        className="input-search"
        placeholder="Procurar..."
        value={name}
        onChange={handleChange}
        />
      </form>

    </SearchDiv>
  );
}
