import React, { useState, useEffect } from "react";
import { getAllProducts } from '../../services/useProducts';
import { PaginationBtn, PaginationBtnNumeric, PaginationDiv } from "./styles";

const ProductPagination = ({ changePage, prevPage, nextPage }) => {
  const [page, setPage] = useState();

  useEffect(() => {
    (async function() {
      const response = await getAllProducts();
      setPage( new Array(Math.ceil((response.data.length - 8) / 9) + 1).fill(true))
    })();
  }, []);

  return (
    <>
      <PaginationDiv>
        <PaginationBtn onClick={prevPage}> Anterior </PaginationBtn>
        {page && page.map((item, index) => (
          <PaginationBtnNumeric
            value={index + 1}
            onClick={changePage}
          >
            {index + 1}
          </PaginationBtnNumeric>
        ))}
        <PaginationBtn onClick={nextPage}> Próximo </PaginationBtn>
      </PaginationDiv>
    </>
  );
};

export default ProductPagination;
