import styled from "styled-components";

export const CircleDiv = styled.div`

  margin: 0 auto;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 63.5%;
  margin-left: -25px;
  margin-top: -25px;
  display: flex;
  justify-content: center;
  align-items: center;


  input#toggle:checked ~ #show-menu .btn .menuBtn {
    transform: translateY(-30px);
    opacity: 0;

  }

  input#toggle:checked ~ #show-menu .btn .closeBtn {
    transform: translateY(0px);
    opacity: 1;
  }

  input#toggle:checked ~ #show-menu .btn:nth-child(2) {
    top:-200px;
    opacity:1;
    filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    background-color: #9CDD6E;
  }

  input#toggle:checked ~ #show-menu .btn:nth-child(3) {
    top:-140px;
    left:140px;
    opacity:1;
    filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    background-color: #DAC50A;
  }

  input#toggle:checked ~ #show-menu .btn:nth-child(4) {
    left:200px;
    opacity:1;
    filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    background-color: #D3B273;
  }

  input#toggle:checked ~ #show-menu .btn:nth-child(5) {
    top: 140px;
    left: 140px;
    opacity: 1;
    filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    background-color: #C87C53;
  }

  input#toggle:checked ~ #show-menu .btn:nth-child(6) {
    top: 200px;
    opacity: 1;
    filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    background-color: #F59E1D;
  }

  input#toggle:checked ~ #show-menu .btn:nth-child(7) {
    top: 140px;
    left: -140px;
    opacity: 1;
    filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    background-color: #8CEAFC;
  }

  input#toggle:checked ~ #show-menu .btn:nth-child(8) {
    left:-200px;
    opacity:1;
    filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    background-color: #F66A69;
  }

  input#toggle:checked ~ #show-menu .btn:nth-child(9) {
    top: -140px;
    left: -140px;
    opacity: 1;
    filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    background-color: #3EBCD3;
  }

  img {
    width: 50px;
    transition: 200ms ease-in-out;
  }

  .main-btn {
    border-radius: 50%;
    box-shadow: 0 7px 5px #999;
    position: absolute;
    transition: 500ms ease;


    &:hover {
      bottom: -155px;
      box-shadow: 0 2px 5px #999;
      cursor: pointer;
    }
  }

  .closeBtn {
    position: absolute;
    left: 50px;
    bottom: 45px;
  }
`;

export const ImageButton = styled.img`
  position: relative;
  left: 30px;
  top: 30px;
  border-radius: 50%;
  transform: scale(3.5);

`;

export const MainButton = styled.div`
  position: relative;
  left: -35px;
  top: -30px;
  width: 150px;
  height: 150px;
  background-color: #FFF;

  @media (max-width: 1366px) {
    width: 60px;
    height: 60px;
    position: relative;
    background-color: #eee;
    top: -65px;
    left: 0;

    &:hover {
      background-color: #9CDD6E;
    }
  }
`;

export const MenuButton = styled.a`
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  @media (max-width: 1366px) {
    display: none;
  }
`;

export const CloseButton = styled.a`
  transition: all 0.3s ease;
  transform: translateY(50px);
  opacity: 0;
  margin-top: 10;
  position: relative;

  @media (max-width: 1366px) {
    img {
      position: absolute;
      top: -7px;
      left: -45px;
    }
  }
`;

export const CircleButton = styled.button`
  width: 85px;
  height: 85px;
  border: 1px solid #fff;
  border-radius: 70px;
  position: absolute;
  overflow: hidden;
  cursor: pointer;
  background: #ECEFF1;
  font-size: 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;

  @media (max-width: 1366px) {
    position: static;
    width: 60px;
    height: 60px;
  }

  -webkit-transition: all 0.5s cubic-bezier(.25,.8,.25,1);
  transition: all 0.5s cubic-bezier(.25,.8,.25,1);

  opacity: 0;
  filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  z-index: -2;
  -webkit-transition: all 0.6s cubic-bezier(.87,-.41,.19,1.44);
  transition: all 0.6s cubic-bezier(.87,-.41,.19,1.44);

  &:nth-child(2) {top:0px;-webkit-transition-delay: 0s;transition-delay: 0s}
  &:nth-child(3) {top:0px;left:0px;-webkit-transition-delay: 0.1s;transition-delay: 0.1s}
  &:nth-child(4) {left:0px;-webkit-transition-delay: 0.2s;;transition-delay: 0.2s}
  &:nth-child(5) {top:0px;left:0px;-webkit-transition-delay: 0.3s;transition-delay: 0.3s}
  &:nth-child(6) {top:0px;-webkit-transition-delay: 0.4s;transition-delay: 0.4s}
  &:nth-child(7) {top:0px;left:0px;-webkit-transition-delay: 0.5s;transition-delay: 0.5s}
  &:nth-child(8) {left:0px;-webkit-transition-delay: 0.6s;transition-delay: 0.6s}
  &:nth-child(9) {top:0px;left:0px;-webkit-transition-delay: 0.7s;transition-delay: 0.7s}

`;

export const IconsMenu = styled.img`
  width: 50px;
  height: 50px;

  @media (max-width: 1366px) {
      transform: scale(0.8);
    }
`;

export const LabelMenu = styled.label`
  @media (max-width: 1366px) {
      position: absolute;
      top: -140px;
      right: -180px;
    }
`;

export const CircleLink = styled.a``;

export const ToggleMenu = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

