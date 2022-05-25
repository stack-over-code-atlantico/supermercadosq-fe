import styled from 'styled-components'
import BgError404 from '../../assets/errors/Background-erro404.png'

export const Style404 = styled.div`
  position: relative;
  font-family: 'Poppins', sans-serif;
  height: 100vh;
  width: 100%;
  .circleBigBlue {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: var(--color-blue-ciel);
    clip-path: circle(43% at 70% -10%);
    z-index: -1;
  }

  .circleDashedLeft {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: var(--color-blue-ciel);
    clip-path: circle(17% at 0% 100%);
    z-index: -1;
    border: 30px solid;
  }

  .circleSmallRed {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: var(--color-red);
    clip-path: circle(3.5% at 35% 25%);
  }
`
export const CircleSmallBrown = styled.div`
  position: absolute;
  height: 10rem;
  width: 10rem;
  bottom: 10%;
  left: 3%;
  border-radius: 50%;
  background: var(--color-brown);
  clip-path: circle(100%);
`
export const CircleSmallYellow = styled.div`
  position: absolute;
  height: 8rem;
  width: 8rem;
  bottom: 17%;
  left: 35%;
  border-radius: 50%;
  background: var(--color-yellow-light);
  clip-path: circle(100%);
`
export const CircleSmallBlue = styled.div`
  position: absolute;
  height: 3rem;
  width: 3rem;
  bottom: 8%;
  right: 8%;
  border-radius: 50%;
  background: var(--color-blue-light);
  clip-path: circle(100%);
`

export const HomeGreen404 = styled.div`
  position: absolute;
  height: 10rem;
  width: 10rem;
  top: 3%;
  left: 3%;
  border-radius: 50%;
  background: var(--color-green);
  clip-path: circle(100%);
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: white;
    &:hover {
      color: #101010;
    }
  }
`
export const ErrorBlue404 = styled.div`
  position: absolute;
  height: 8rem;
  width: 8rem;
  top: 37%;
  left: 47%;
  border-radius: 50%;
  background: var(--color-blue-light);
  clip-path: circle(100%);
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 2.5rem;
    font-weight: 400;
    color: white;
  }
`

export const CircleSmallMustard = styled.div`
  position: absolute;
  height: 12rem;
  width: 12rem;
  bottom: 35%;
  right: 10%;
  border-radius: 50%;
  background: var(--color-mustard);
  clip-path: circle(100%);
`

export const CardText = styled.div`
  position: absolute;
  bottom: 30%;
  right: 24%;
  display: inline;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: right;
  color:var(--color-blue-ciel);
  line-height: 80px;
  
  #error404 {
    text-align: left;
    font-size: 9.3rem;
    -webkit-text-stroke-width: 0.6rem;
    -webkit-text-stroke-color: var(--color-blue-ciel);
    color: white;
  }
  span{
    font-weight: 700;
    font-size: 2rem;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
  }

`