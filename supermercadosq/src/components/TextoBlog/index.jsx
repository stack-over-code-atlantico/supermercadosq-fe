import React, { useContext } from 'react'
import { Title } from  './styles'
import { SubTitle } from  './styles'
import { Paragraph }  from './styles'
import { Button } from './styles'
import { Div } from './styles'
import { MenuContext } from '../../Provider/Menu.provider';

export function TextoBlog(){

  const { allergyMenu } = useContext(MenuContext);

  const handleColor = () => {
    if (allergyMenu.home) return '#9CDD6E';
    if (allergyMenu.egg) return '#DAC50A';
    if (allergyMenu.wheat) return '#D3B273';
    if (allergyMenu.peanut) return '#C87C53';
    if (allergyMenu.mustard) return '#F59E1D';
    if (allergyMenu.fish) return '#9CDBE7';
    if (allergyMenu.seafood) return '#F66A69';
    if (allergyMenu.milk) return '#3EBCD3';
    return '#9CDD6E';
  };

  const handleSubtitle = () => {
    if (allergyMenu.home) return <SubTitle color={handleColor}>Comunidade</SubTitle>;
    if (allergyMenu.egg) return <SubTitle color={handleColor}>Ovo</SubTitle>;
    if (allergyMenu.wheat) return <SubTitle color={handleColor}>Glúten</SubTitle>;
    if (allergyMenu.peanut) return <SubTitle color={handleColor}>Amendoim</SubTitle>;
    if (allergyMenu.mustard) return <SubTitle color={handleColor}>Mostarda</SubTitle>;
    if (allergyMenu.fish) return <SubTitle color={handleColor}>Peixe</SubTitle>;
    if (allergyMenu.seafood) return <SubTitle color={handleColor}>Frutos do mar</SubTitle>;
    if (allergyMenu.milk) return <SubTitle color={handleColor}>Leite</SubTitle>;
    return <SubTitle color={handleColor}>Comunidade</SubTitle>;
  };

  return(
      <Div>
        <Title color={handleColor}>SQ Blog</Title>
        {handleSubtitle()}
        <Paragraph>Entre em nosso blog, venha conferir e contribuir na nossa comunidade, está rolando várias discussões sobre tabela nutricional e alergias!</Paragraph>
        <Button color={handleColor}>Blog</Button>
      </Div>
  );
};
