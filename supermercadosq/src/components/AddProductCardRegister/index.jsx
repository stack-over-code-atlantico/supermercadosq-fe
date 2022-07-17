import React from "react";
import { Button, DivAddProductCard, DivButtonAddProductCard } from "./styles";
import { useNavigate } from "react-router-dom";
import { BsArrowDown } from "react-icons/bs";
export function AddProductCardRegister() {
  let navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/register", { replace: true });
  };
  return (
    <DivAddProductCard>
      <DivButtonAddProductCard>
        <h1>Ainda não faz parte dessa comunidade?</h1>
      </DivButtonAddProductCard>
      <h3>
        Crie sua conta agora!
        <br />
        <BsArrowDown
          style={{
            marginTop: "30px",
            fontSize: "40px",
          }}
        />
      </h3>
      <Button onClick={handleNavigate}>+</Button>
    </DivAddProductCard>
  );
}
