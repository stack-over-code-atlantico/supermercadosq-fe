import React from "react";
import { DivNavbarProducts, NavbarList, ProductListItem } from "./styles";
import { useNavigate } from "react-router-dom";
import { userLevel } from "../../services/useAuth";
import { NavbarAdm } from "../NavbarProductsAdm";
import { logout } from "../../services/useAuth";

export function NavbarProducts() {
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

  const logOff = () => {
    logout();
    handleNavigateHome();
  };

  return (
    <>
      {userLevel() &&
      (userLevel().nivel === "CLIENTE" ||
        userLevel().nivel === "FORNECEDOR") ? (
        <DivNavbarProducts>
          <NavbarList>
            <ProductListItem>
              <a href="" onClick={handleNavigateHome}>
                Home
              </a>
            </ProductListItem>
            <ProductListItem>
              <a href="" onClick={handleNavigateProfile}>
                Profile
              </a>
            </ProductListItem>
            <ProductListItem>
              <a href="" onClick={handleNavigateProduct}>
                Postagens
              </a>
            </ProductListItem>
            <ProductListItem>
              <a href="" onClick={logOff}>
                Sair
              </a>
            </ProductListItem>
          </NavbarList>
        </DivNavbarProducts>
      ) : (
        <DivNavbarProducts>
          <NavbarList>
            <ProductListItem>
              <a href="" onClick={handleNavigateHome}>
                Home
              </a>
            </ProductListItem>
            <ProductListItem>
              <a href="" onClick={handleNavigateProduct}>
                Postagens
              </a>
            </ProductListItem>
          </NavbarList>
        </DivNavbarProducts>
      )}
      {userLevel() && userLevel().nivel === "ADMINISTRADOR" ? (
        <NavbarAdm />
      ) : (
        <></>
      )}
    </>
  );
}
