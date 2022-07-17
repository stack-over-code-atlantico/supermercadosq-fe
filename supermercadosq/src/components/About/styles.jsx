import styled from "styled-components";

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 60vh;
  margin-top: 5%;
  padding: 0rem 10rem;

  @media (max-width: 1300px) {
    height: 100vh;
  }

  @media (max-width: 600px) {
    padding: 1rem;
    flex-direction: row;
    justify-content: center;
  }
`;

export const AboutText = styled.h2`
  font-size: 3.2rem;
  color: #64c2d4;
  text-align: center;
`;

export const AboutParagraph = styled.p`
  font-size: 1rem;
  color: #000;
  margin-top: 20px;
  text-align: center;
  width: 100%;

  span {
    color: #64c2d4;
    font-weight: bold;
  }
`;

export const LoadingScreen = styled.div`
  height: ${(props) => (props.size ? props.size : "100px")};
  width: ${(props) => (props.size ? props.size : "100px")};
  background: ${(props) => (props.background ? props.background : "#9cdd6e")};
  border-radius: 50%;
  left: ${(props) => (props.left ? props.left : "100px")};
  top: ${(props) => (props.top ? props.top : "100px")};
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "${(props) => (props.text ? props.text : "")}";
    text-align: center;
    color: #fff;
    font-size: 2rem;
  }

  @media (max-width: 800px) {
    width: 70px;
    height: 70px;
    padding: 2rem;

    &::before {
      font-size: 1rem;
    }
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10vh 5vw 3vh 5vw;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 1300px) {
    margin: 10vh 5vw 2vh 5vw;
  }

  @media (max-width: 800px) {
    margin: 15% 2% 0 2%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ContainerBody = styled.div`
  height: 600px;
  display: grid;
  grid-template-rows: 400px 40px;
  grid-template-columns: 1fr 30px 30px 30px 30px 30px 1fr;
  align-items: center;
  justify-items: center;

  .position {
    margin-top: 6rem;
  }

  & input.position:nth-of-type(1) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  & input.position:nth-of-type(1):checked ~ div#carousel {
    --position: 1;
  }

  & input.position:nth-of-type(2) {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
  }

  & input.position:nth-of-type(2):checked ~ div#carousel {
    --position: 2;
  }

  & input.position:nth-of-type(3) {
    grid-column: 4 /5;
    grid-row: 2 / 3;
  }

  & input.position:nth-of-type(3):checked ~ div#carousel {
    --position: 3;
  }

  & input.position:nth-of-type(4) {
    grid-column: 5 / 6;
    grid-row: 2 / 3;
  }

  & input.position:nth-of-type(4):checked ~ div#carousel {
    --position: 4;
  }

  & input.position:nth-of-type(5) {
    grid-column: 6 / 7;
    grid-row: 2 / 3;
  }

  & input.position:nth-of-type(5):checked ~ div#carousel {
    --position: 5;
  }
`;

export const CardBody = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 8;
  width: 98vw;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 600px;
  pointer-events: none;
  margin-top: 4rem;

  .item {
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

    border-radius: 6px;
    padding: 0rem 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    p {
      font-size: 0.95rem;
    }
  }

  .item:nth-of-type(1) {
    --offset: 1;
    background-color: #f59e1d;
  }
  .item:nth-of-type(2) {
    --offset: 2;
    background-color: #76bc44;
  }
  .item:nth-of-type(3) {
    --offset: 3;
    background-color: #3ebcd3;
  }
  .item:nth-of-type(4) {
    --offset: 4;
    background-color: #f66a69;
  }
  .item:nth-of-type(5) {
    --offset: 5;
    background-color: #9cdbe7;
  }
`;

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 6rem;

  img {
    position: relative;
    top: -10%;
    border-radius: 6px;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
export const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  p {
    margin-top: -1rem;
    padding: 0rem 2.5rem;
    text-align: center;
  }
`;

export const Img = styled.img`
  width: 90%;
  margin-left: 20%;

  @media (max-width: 800px) {
    width: 70%;
  }
`;

export const Button = styled.button`
  background-color: #3ebcd3;
  padding: 1rem 1rem;
  margin: 3rem auto;
  border: none;
  border-radius: 6px;

  color: #fff;
  font-size: 2.5rem;
  transition: all 200ms ease-in-out;

  cursor: pointer;

  a {
    text-decoration: none;
    color: #fff;
  }

  &:hover {
    opacity: 0.9;
    box-shadow: 0 0 10px #3ebcd3;
  }

  @media (max-width: 1500px) {
    padding: 2vh 16.5vw;
  }

  @media (max-width: 1260px) {
    justify-content: center;
    font-size: 2rem;
    margin: 4vh 0 4vh 2vw;
    padding: 4vh 17vw;
  }

  @media (max-width: 1060px) {
    padding: 4vh 15vw;
  }

  @media (max-width: 800px) {
    padding: 4vh 36vw;
    margin-left: 4vw;
  }
`;
