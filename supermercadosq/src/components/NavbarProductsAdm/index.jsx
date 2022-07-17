import React from "react";
import Vector from "../../assets/icons/vector.svg";
import {
  DivNavbarAdm,
  NavbarListAdm,
  ProductListItemAdm,
} from "../NavbarProductsAdm/styles";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/useAuth";

export function NavbarAdm({ productName }) {
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
  const handleNavigateModeration = () => {
    navigate("/dashboard", { replace: true });
  };

  const logOff = () => {
    logout();
    handleNavigateHome();
  };

  return (
    <DivNavbarAdm>
      <NavbarListAdm>
        <ProductListItemAdm>
          <a href="" onClick={handleNavigateHome}>
            Home
          </a>
          {productName}
        </ProductListItemAdm>
        <ProductListItemAdm>
          <a href="" onClick={handleNavigateProfile}>
            Perfil
          </a>
        </ProductListItemAdm>
        <ProductListItemAdm>
          <a href="" onClick={handleNavigateProduct}>
            Postagens
          </a>
        </ProductListItemAdm>
        <ProductListItemAdm>
          <a href="" onClick={handleNavigateModeration}>
            Moderação
            <img src={Vector} />
          </a>
        </ProductListItemAdm>
        <ProductListItemAdm>
          <a href="" onClick={logOff}>
            Sair
          </a>
        </ProductListItemAdm>
      </NavbarListAdm>
    </DivNavbarAdm>
  );
}
