import styled from "styled-components";

export const CircleDiv = styled.div`
    * {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

  margin: 0 auto;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 70%;
  margin-left: -25px;
  margin-top: -25px;
  display: flex;
  justify-content: center;
  align-items: center;

  input#toggle:checked ~ #show-menu .btn .menuBtn {
    transform: translateY(-50px);
    opacity: 0;
  }

  input#toggle:checked ~ #show-menu .btn .closeBtn {
    transform: translateY(0px);
    opacity: 1;
  }

  input#toggle:checked ~ #show-menu .btn:nth-child(2) {
    top:-280px;
    opacity:1;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    background-color: #9CDD6E;
  }

  input#toggle:checked ~ #show-menu .btn:nth-child(3) {
    top:-200px;
    left:200px;
    opacity:1;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    background-color: #DAC50A;
  }

  input#toggle:checked ~ #show-menu .btn:nth-child(4) {
    left:280px;
    opacity:1;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    background-color: #D3B273;
  }

  input#toggle:checked ~ #show-menu .btn:nth-child(5) {
    top: 200px;
    left: 200px;
    opacity: 1;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    background-color: #C87C53;
  }

  input#toggle:checked ~ #show-menu .btn:nth-child(6) {
    top: 280px;
    opacity: 1;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    background-color: #F59E1D;
  }

  input#toggle:checked ~ #show-menu .btn:nth-child(7) {
    top: 200px;
    left: -200px;
    opacity: 1;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    background-color: #8CEAFC;
  }

  input#toggle:checked ~ #show-menu .btn:nth-child(8) {
    left:-280px;
    opacity:1;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    background-color: #F66A69;
  }

  input#toggle:checked ~ #show-menu .btn:nth-child(9) {
    top: -200px;
    left: -200px;
    opacity: 1;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    background-color: #3EBCD3;
  }

  img {
    width: 50px;
    transition: 200ms ease-in-out;
  }

  .main-btn {
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 7px 5px #999;
    width: 250px;
    height: 250px;
    position: absolute;
    left: -80px;
    bottom: -170px;
    transition: 500ms ease;

    &:hover {
      bottom: -180px;
      box-shadow: 0 2px 5px #999;
      cursor: pointer;
    }
  }

  .first-btn {
    border-radius: 50%;
    width: 250px;
    height: 250px;
    position: absolute;
    left: 0px;
    bottom: -250px;
  }

  .closeBtn {
    position: absolute;
    left: 100px;
    bottom: 90px;
  }
`;

export const MainButton = styled.div``;

export const MenuButton = styled.a`
  position: absolute;
  transition: all 0.3s ease;
`;

export const CloseButton = styled.a`
  position: absolute;
  transition: all 0.3s ease;
  transform: translateY(50px);
  opacity: 0;
  margin-top: 10
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

  -webkit-transition: all 0.5s cubic-bezier(.25,.8,.25,1);
  transition: all 0.5s cubic-bezier(.25,.8,.25,1);

  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  z-index: -2;
  -webkit-transition: all 0.6s cubic-bezier(.87,-.41,.19,1.44);
  transition: all 0.6s cubic-bezier(.87,-.41,.19,1.44);

  &:nth-child(2) {top:0px;-webkit-transition-delay: 0s;transition-delay: 0s}
  &:nth-child(3) {top:0px;left:0px;-webkit-transition-delay: 0.1s;transition-delay: 0.1s}
  &:nth-child(4) {left:0px;;-webkit-transition-delay: 0.2s;;transition-delay: 0.2s}
  &:nth-child(5) {top:0px;left:0px;-webkit-transition-delay: 0.3s;transition-delay: 0.3s}
  &:nth-child(6) {top:0px;-webkit-transition-delay: 0.4s;transition-delay: 0.4s}
  &:nth-child(7) {top:0px;left:0px;-webkit-transition-delay: 0.5s;transition-delay: 0.5s}
  &:nth-child(8) {left:0px;-webkit-transition-delay: 0.6s;transition-delay: 0.6s}
  &:nth-child(9) {top:0px;left:0px;-webkit-transition-delay: 0.7s;transition-delay: 0.7s}

  &:hover {
    margin-bottom: 15px;
    }
  }
`;

export const LabelMenu = styled.label``;

export const CircleLink = styled.a``;

export const ToggleMenu = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

