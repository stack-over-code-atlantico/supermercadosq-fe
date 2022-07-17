import React, { useContext } from "react";
import { ImgCircle } from "./styles";
import { MenuContext } from "../../Provider/Menu.provider";

export function Circle() {
  const { allergyMenu } = useContext(MenuContext);

  const handleColor = () => {
    if (allergyMenu.home) return "#9CDD6E";
    if (allergyMenu.egg) return "#DAC50A";
    if (allergyMenu.wheat) return "#D3B273";
    if (allergyMenu.peanut) return "#C87C53";
    if (allergyMenu.mustard) return "#F59E1D";
    if (allergyMenu.fish) return "#9CDBE7";
    if (allergyMenu.seafood) return "#F66A69";
    if (allergyMenu.milk) return "#3EBCD3";
    return "#9CDD6E";
  };

  return <ImgCircle color={handleColor} />;
}
