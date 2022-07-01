import styled, {keyframes} from "styled-components";

const circleAnimation = keyframes`
  0% {
    top: 60px;
    height: 5px;
    border-radius: 50px 50px 25px 25px;
    transform: scaleX(1.7);
  }
  40% {
    height:20px;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 0%;
  }
`;

const shadowAnimation = keyframes`
  0%{
    transform: scaleX(1.5);
  }
  20%{
    transform: scaleX(1);
    opacity: .7;
  }
  100%{
    transform: scaleX(.2);
    opacity: .4;
  }
`;

const textAnimation = keyframes`
  0% {
    background-position-x: -1000%;
  }
  100% {
    background-position-x: 1000%;
  }
`;

export const LoadingWrapper = styled.div`
  width:200px;
  height:60px;
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
`;

export const LoadingSection = styled.section`
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const LoadingScreen = styled.div`
  height:40px;
  width:40px;
  background: ${props => props.background ? props.background : '#9cdd6e' };
  border-radius: 50%;
  position: absolute;
  transform-origin: 50%;
  animation: ${circleAnimation} .5s alternate infinite ease;

  &:nth-child(2) {
    left: 40%;
    animation-delay: .2s;
  }

  &:nth-child(3) {
    left:auto;
    right: 0;
    animation-delay: .3s;
  }
`;

export const LoadingShadow = styled.div`
  width: 40px;
  height: 8px;
  border-radius: 50%;
  background-color: #ddd;
  position: absolute;
  top: 62px;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: ${shadowAnimation} .5s alternate infinite ease;

  &:nth-child(4) {
    left: 40%;
    animation-delay: .2s;
  }

  &:nth-child(5) {
    left:auto;
    right: 0;
    animation-delay: .3s;
  }
`;

export const SpanText = styled.span`
  position: absolute;
  top: 100px;
  font-size: 30px;
  letter-spacing: 12px;
  color: #000;
  left: -50px;
  font-weight: 700;
  animation: ${textAnimation} 5s infinite ease;
  background: linear-gradient(90deg, #fff , #000, #fff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-repeat: no-repeat;
  background-size: 90%;
`;

