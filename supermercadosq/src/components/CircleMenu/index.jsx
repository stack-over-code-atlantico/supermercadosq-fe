import React, { useState, useContext } from 'react';
import homeIcon from '../../assets/icons/home.png';
import seafoodIcon from '../../assets/icons/seafood.png';
import milkIcon from '../../assets/icons/milk.png';
import fishIcon from '../../assets/icons/fish.png';
import mustardIcon from '../../assets/icons/mustard.png';
import peanutIcon from '../../assets/icons/peanut.png';
import eggIcon from '../../assets/icons/egg.png';
import wheatIcon from '../../assets/icons/wheat.png';
import menuIcon from '../../assets/images/LogoSQ2.png';
import closeIcon from '../../assets/icons/close.png';
import { MenuContext } from '../../Provider/Menu.provider';
import {
  CircleDiv,
  CircleButton,
  ToggleMenu,
  MenuButton,
  CloseButton,
  MainButton,
  LabelMenu,
  CircleLink,
} from './styles';

const CircleMenu = () => {
  const [open, setOpen] = useState(false);
  const { setAllergyMenu } = useContext(MenuContext);

  const handleHome = () => {
    setAllergyMenu(({
      home: true,
      egg: false,
      wheat: false,
      peanut: false,
      mustard: false,
      fish: false,
      seafood: false,
      milk: false,
    }));
  };

  const handleEgg = () => {
    setAllergyMenu(({
      home: false,
      egg: true,
      wheat: false,
      peanut: false,
      mustard: false,
      fish: false,
      seafood: false,
      milk: false,
    }));
  };

  const handleWheat = () => {
    setAllergyMenu(({
      home: false,
      egg: false,
      wheat: true,
      peanut: false,
      mustard: false,
      fish: false,
      seafood: false,
      milk: false,
    }));
  };

  const handlePeanut = () => {
    setAllergyMenu(({
      home: false,
      egg: false,
      wheat: false,
      peanut: true,
      mustard: false,
      fish: false,
      seafood: false,
      milk: false,
    }));
  };

  const handleMustard = () => {
    setAllergyMenu(({
      home: false,
      egg: false,
      wheat: false,
      peanut: false,
      mustard: true,
      fish: false,
      seafood: false,
      milk: false,
    }));
  };

  const handleFish = () => {
    setAllergyMenu(({
      home: false,
      egg: false,
      wheat: false,
      peanut: false,
      mustard: false,
      fish: true,
      seafood: false,
      milk: false,
    }));
  };

  const handleSeafood = () => {
    setAllergyMenu(({
      home: false,
      egg: false,
      wheat: false,
      peanut: false,
      mustard: false,
      fish: false,
      seafood: true,
      milk: false,
    }));
  };

  const handleMilk = () => {
    setAllergyMenu(({
      home: false,
      egg: false,
      wheat: false,
      peanut: false,
      mustard: false,
      fish: false,
      seafood: false,
      milk: true,
    }));
  };

  const handleChange = () => {
    setOpen(!open);
  };

  return (
    <>
      <CircleDiv>
        <ToggleMenu id="toggle" checked={open} onChange={handleChange} />
        <LabelMenu id="show-menu" for="toggle">
          <MainButton
            onClick={() => handleHome()}
            className="btn main-btn"
          >
            <MenuButton className="toggleBtn menuBtn">
              <img color="#9CDD6E" className="first-btn" src={menuIcon} />
            </MenuButton>
            <CloseButton className="toggleBtn closeBtn">
              <img src={closeIcon} />
            </CloseButton>
          </MainButton>
          <CircleButton
            onClick={() => handleHome()}
            className="btn"
          >
            <CircleLink className="btn-icon">
              <img className="img-circle" src={homeIcon} />
            </CircleLink>
          </CircleButton>
          <CircleButton
            onClick={() => handleEgg()}
            className="btn">
            <CircleLink className="btn-icon">
              <img className="img-circle" src={eggIcon} />
            </CircleLink>
          </CircleButton>
          <CircleButton
            onClick={() => handleWheat()}
            className="btn"
          >
            <CircleLink className="btn-icon">
              <img className="img-circle" src={wheatIcon} />
            </CircleLink>
          </CircleButton>
          <CircleButton
            onClick={() => handlePeanut()}
            className="btn"
          >
            <CircleLink className="btn-icon">
              <img className="img-circle" src={peanutIcon} />
            </CircleLink>
          </CircleButton>
          <CircleButton
            onClick={() => handleMustard()}
            className="btn"
          >
            <CircleLink className="btn-icon">
              <img className="img-circle" src={mustardIcon} />
            </CircleLink>
          </CircleButton>
          <CircleButton
            onClick={() => handleFish()}
            className="btn"
          >
            <CircleLink className="btn-icon">
              <img className="img-circle" src={fishIcon} />
            </CircleLink>
          </CircleButton>
          <CircleButton
            onClick={() => handleSeafood()}
            className="btn"
          >
            <CircleLink className="btn-icon">
              <img className="img-circle" src={seafoodIcon} />
            </CircleLink>
          </CircleButton>
          <CircleButton
            onClick={() => handleMilk()}
            className="btn"
          >
            <CircleLink className="btn-icon">
              <img className="img-circle" src={milkIcon} />
            </CircleLink>
          </CircleButton>
        </LabelMenu>
      </CircleDiv>
    </>
  );
};

export default CircleMenu;
