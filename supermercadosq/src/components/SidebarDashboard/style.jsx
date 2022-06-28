import styled from 'styled-components';

export const Sidebar = styled.aside`
  height: 100vh;
  width: 300px;
  margin-left: ${props => props.opened ? '0px' : '-250px'};
  background-color: #280851;
  box-shadow: 4px 0 10px #d2d2d2;
  border-radius: 0 15px 15px 0;
  transition: 500ms all;
`;

export const CloseIcon = styled.img`
  transition: 500ms all;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
  left: 210px;
  top: 10px;

  &:hover {
    background: #1F073F;
  }
`;

export const SidebarName = styled.h2`
  max-width: 220px;
  font-size: 20px;
  color: #fff;
  position: relative;
  top: 100px;
  left: 40px;
`;

export const SidebarEmail = styled.h3`
  font-size: 16px;
  color: #fff;
  position: relative;
  top: 90px;
  left: 40px;
  font-weight: 400;
`;

export const SidebarIcon = styled.img`
  width: 60px;
  position: relative;
  left: 10px;
  top: 8px;
`;

export const SpanButton = styled.span`
  position: relative;
  z-index: 2;
  left: ${props => props.left ? props.left : '-30px'};
  color: #fff;
  font-size: 14px;
  transition: all 300ms;
  font-weight: 400;
`;

export const ButtonIcon = styled.img`
  width: 20px;
  position: absolute;
  left: -40px;
  top: -2px;
  opacity: 0;
  transition: all 200ms ease;
`;

export const SidebarButton = styled.button`
  display: block;
  width: 85%;
  height: 60px;
  top: 180px;
  line-height: 40px;
  font-size: 18px;
  background: transparent;
  border: transparent;
  position: relative;
  transition: all .35s;

  &:after{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    border-radius: 0 50px 50px 0;
    background: #B996E8;
    transition: all .35s;
  }

  &:hover:after{
    width: 100%;
  }

  &:hover {
    ${SpanButton} {
      left: 12px;
      color: #000;
      font-weight: 800;
    }
    ${ButtonIcon} {
      opacity: 1;
    }

  }
`;



