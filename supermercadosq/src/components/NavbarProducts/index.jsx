import React from "react";
import { DivNavbarProducts, NavbarList, ProductListItem } from "./styles";
import { useNavigate } from "react-router-dom";
import { NavbarAdm } from "../NavbarProductsAdm";
import useAuth from "../../services/useAuth";

export function NavbarProducts({logoff}) {
  const {userLevel} = useAuth();
  let navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/", { replace: true });
  };
  const handleNavigateProfile = () => {
    navigate("/profile", { replace: true });
  };
  const handleNavigateProduct = () => {
    navigate("/product", { replace: true });
  };

  return (
    <>
      {userLevel() &&
      (userLevel().nivel === "CLIENTE" ||
      userLevel().nivel === "cliente" ||
      userLevel().nivel === "fornecedor" ||
      userLevel().nivel === "FORNECEDOR") ? (
        <DivNavbarProducts>
          <NavbarList>
            <ProductListItem>
              <a href="" onClick={handleNavigateHome}>
                Início
              </a>
            </ProductListItem>
            <ProductListItem>
              <a href="" onClick={handleNavigateProfile}>
                Perfil
              </a>
            </ProductListItem>
            <ProductListItem>
              <a href="" onClick={handleNavigateProduct}>
                Postagens
              </a>
            </ProductListItem>
            <ProductListItem>
              <a onClick={logoff}>
                Sair
              </a>
            </ProductListItem>
          </NavbarList>
        </DivNavbarProducts>
      ) : ( userLevel() && (userLevel().nivel === "ADMINISTRADOR" || userLevel().nivel === "administrador")
        ? (<NavbarAdm logoff={logoff}/>)
        : (<DivNavbarProducts>
          <NavbarList>
            <ProductListItem>
              <a href="" onClick={handleNavigateHome}>
                Início
              </a>
            </ProductListItem>
            <ProductListItem>
              <a href="" onClick={handleNavigateProduct}>
                Postagens
              </a>
            </ProductListItem>
          </NavbarList>
        </DivNavbarProducts>)

      )}
    </>
  );
}
