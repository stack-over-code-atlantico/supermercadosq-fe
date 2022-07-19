import styled from "styled-components";

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  background-color: #78CBD3;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%2387d8e2' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%2399e4ed' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23adedf6' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23c5f4fc' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23DFFAFF' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23e5fbff' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23ecfcff' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23f2fdff' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23f9feff' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23FFFFFF' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
  z-index: 99;
  width: 100%;
  height: 60vh;
  padding: 2rem 10rem;


  @media (max-width: 1366px) {
    height: 100%;

  }

  @media (max-width: 600px) {
    padding: 1rem;
    flex-direction: row;
    justify-content: center;
  }
`;

export const AboutText = styled.h2`
  font-size: 3.2rem;
  color: #338899;
  text-align: center;
  position: relative;
  width: 100%;
  height: 50px;
  top: 50px;
`;

export const AboutParagraph = styled.p`
  font-size: 1rem;
  color: #000;
  margin-top: 20px;
  text-align: center;
  position: relative;
  top: 50px;
  width: 63%;
  height: auto;
  border: 1px dashed #3EBCD3;

  span {
    color: #338899;
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
  gap: 4.5rem;
  background-color: transparent;

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
background-color: #78CBD3;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%2387d8e2' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%2399e4ed' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23adedf6' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23c5f4fc' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23DFFAFF' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23e5fbff' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23ecfcff' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23f2fdff' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23f9feff' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23FFFFFF' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
  height: 600px;
  width: 100%;
  display: grid;
  grid-template-rows: 400px 40px;
  grid-template-columns: 1fr 30px 30px 30px 30px 30px 1fr;
  align-items: center;
  justify-items: center;
  background-color: none;

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
  background-color: transparent;
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
  background-color: #78CBD3;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%2387d8e2' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%2399e4ed' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23adedf6' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23c5f4fc' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23DFFAFF' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23e5fbff' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23ecfcff' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23f2fdff' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23f9feff' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23FFFFFF' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  padding: 10px;

  img {
    position: relative;
    border-radius: 6px;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
export const AboutDiv = styled.div`
  display: flex;
  width: 85%;
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
  margin: 6rem auto;
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
