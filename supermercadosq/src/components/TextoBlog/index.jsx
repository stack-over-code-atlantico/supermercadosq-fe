import React, { useContext } from "react";
import { Title } from "./styles";
import { SubTitle } from "./styles";
import { Paragraph } from "./styles";
import { Button } from "./styles";
import { Div } from "./styles";
import { MenuContext } from "../../Provider/Menu.provider";
import TypeAnimation from "react-type-animation";
import { Link } from "react-router-dom";

export function TextoBlog() {
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

  const handleSubtitle = () => {
    if (allergyMenu.egg) return "Ovo";
    if (allergyMenu.wheat) return "Glúten";
    if (allergyMenu.peanut) return "Amendoim";
    if (allergyMenu.mustard) return "Mostarda";
    if (allergyMenu.fish) return "Peixe";
    if (allergyMenu.seafood) return "Mariscos";
    if (allergyMenu.milk) return "Leite";
    return "Comunidade";
  };

  return (
    <Div>
      <Title color={handleColor}>SQ Blog</Title>
      <SubTitle color={handleColor}>
        <TypeAnimation sequence={[handleSubtitle(), 2000]} />
      </SubTitle>
      <Paragraph>
        Entre em nosso blog, venha conferir e contribuir na nossa comunidade,
        está rolando várias discussões sobre tabela nutricional e alergias!
      </Paragraph>
      <Link to="/product">
        <Button color={handleColor}> Blog </Button>
      </Link>
      <Link to="/about">
        <Button color={handleColor} style={{ marginLeft: "22px" }}>
          {" "}
          Sobre{" "}
        </Button>
      </Link>
    </Div>
  );
}
