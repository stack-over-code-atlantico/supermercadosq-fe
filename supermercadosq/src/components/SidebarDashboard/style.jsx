import styled from 'styled-components';

export const Sidebar = styled.aside`
  height: 100vh;
  width: 300px;
  margin-left: ${props => props.opened ? '0px' : '-250px'};
  background-color: #280851;
  box-shadow: 4px 0 10px #d2d2d2;
  border-radius: 0 8px 8px 0;
  transition: 500ms all;

  .open-btn {
    left: 0px;
    transition: 500ms all;
    position: absolute;
  }

  .logout {
    top: 350px;
  }
`;

export const Filters = styled.h3`
  color: white;
  position: relative;
  top: 220px;
  margin: 0 28px;
  font-weight: 200;
  font-size: 12px;
  width: 180px;
  text-align: center;
  border-bottom: 1px dashed white;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  left: 200px;
  top: 10px;
  transition: 500ms all;

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

export const SpanButton = styled.span`
  position: relative;
  z-index: 2;
  left: ${props => props.left ? props.left : '-30px'};
  color: #fff;
  font-size: 14px;
  transition: all 300ms;
  font-weight: 400;
`;

export const ButtonIcon = styled.span`
  font-size: 20px;
  position: absolute;
  left: -40px;
  top: -7px;
  color: #280851;
  opacity: 0;
  transition: all 200ms ease;
`;

export const SidebarButton = styled.button`
  display: block;
  width: 85%;
  height: 60px;
  top: 250px;
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
    width: ${props => props.active ? '100%' : 0};
    height: 100%;
    border-radius: 0 50px 50px 0;
    background: ${props => props.active ? '#24589c' : '#B996E8'};
    transition: all .35s;
  }

  &:hover:after{
    width: 100%;
  }

  &:hover {
    ${SpanButton} {
      left: 12px;
      color: ${props => props.active ? '#fff' : '#000'};
      font-weight: 800;
    }
    ${ButtonIcon} {
      opacity: 1;
      color: ${props => props.active ? '#fff' : '#280851'}
    }

  }
`;



