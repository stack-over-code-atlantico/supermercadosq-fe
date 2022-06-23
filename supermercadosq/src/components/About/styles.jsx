import styled from "styled-components";

export const AboutSection = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  margin-top: 5%;
  flex-flow: column wrap;
`;

export const AboutText = styled.h2`
  font-size: 3.2rem;
  color: #64c2d4;
  text-align: center;
`;

export const AboutParagraph = styled.p`
  font-size: 1.6rem;
  color: #000;
  margin-top: 20px;
  text-align: justify;
  width: 90%;
  margin-left: 5%;
`;

export const ContainerBody = styled.div`
  height: 600px;
  display: grid;
  grid-template-rows: 500px 100px;
  grid-template-columns: 1fr 30px 30px 30px 30px 30px 1fr;
  align-items: center;
  justify-items: center;

  & input.position:nth-of-type(1){
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  & input.position:nth-of-type(1):checked ~ div#carousel{
    --position: 1;
  }

  & input.position:nth-of-type(2){
    grid-column: 3 / 4;
    grid-row: 2 / 3;
  }

  & input.position:nth-of-type(2):checked ~ div#carousel{
    --position: 2;
  }

  & input.position:nth-of-type(3){
    grid-column: 4 /5;
    grid-row: 2 / 3;
  }

  & input.position:nth-of-type(3):checked ~ div#carousel{
    --position: 3;
  }

  & input.position:nth-of-type(4){
    grid-column: 5 / 6;
    grid-row: 2 / 3;
  }

  & input.position:nth-of-type(4):checked ~ div#carousel{
    --position: 4;
  }

  & input.position:nth-of-type(5){
    grid-column: 6 / 7;
    grid-row: 2 / 3;
  }

  & input.position:nth-of-type(5):checked ~ div#carousel{
    --position: 5;
  }

`;

export const CardBody = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 8;
  width: 100vw;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 600px;
  pointer-events: none;

  .item{
    position: absolute;
    width: 300px;
    height: 400px;
    background-color: coral;
    --r: calc(var(--position) - var(--offset));
    --abs: max(calc(var(--r) * -1), var(--r));
    transition: all 0.25s linear;
    transform: rotateY(calc(-10deg * var(--r)))
      translateX(calc(-300px * var(--r)));
    z-index: calc((var(--position) - var(--abs)));
  }

    .item:nth-of-type(1){
      --offset: 1;
      background-color: #90f1ef;
    }
    .item:nth-of-type(2){
      --offset: 2;
      background-color: #ff70a6;
    }
    .item:nth-of-type(3){
      --offset: 3;
      background-color: #ff9770;
    }
    .item:nth-of-type(4){
      --offset: 4;
      background-color: #ffd670;
    }
    .item:nth-of-type(5){
      --offset: 5;
      background-color: #e9ff70;
    }

`;


