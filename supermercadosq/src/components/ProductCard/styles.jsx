import styled from "styled-components";

export const DivProductCardFace = styled.div`
  width: 240px;
  height: 380px;
  margin-top: 50px;
  perspective: 800px;

  .front {
    backface-visibility: hidden;
  }

  &:hover .front {
    transform: rotateY(180deg);
    z-index: 0;
  }

  &:hover .back {
    transform: rotateY(0);
    z-index: 1;
  }
`;

export const DivProductCardFront = styled.div`
  position: absolute;

  transition: 700ms;

  width: 100%;
  height: 100%;

  border-radius: 10px;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: column;

  z-index: 1;

  .restrictionImg {
    box-shadow: 3px 15px 10px rgba(0, 0, 0, 0.1);
  }

  img {
    display: block;
    border-radius: 10px 10px 0px 0px;
    width: 100%;
    height: 300px;
  }
`;

export const DivProductCardBack = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  transform: rotateY(-180deg);
  backface-visibility: hidden;

  position: absolute;

  width: 100%;
  height: 100%;

  transition: 700ms;

  border-radius: 10px;
  border: none;
`;

export const DivProductAllergy = styled.div`
  height: 50px;
  width: 100%;
  font-size: 0.7rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const DivProductAllergyEffect = styled.div``;

export const DivIconCircle = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 10px;
  position: absolute;
  bottom: ${(props) => (props.bottom ? props.bottom : "2")};
  margin: 0 auto;
  background-color: ${(props) =>
    props.color ? props.color : "var(--color-blue-light)"};

  .icon {
    position: absolute;
    left: 6px;
    top: 5.5px;
    height: 28px;
    width: 28px;
    color: #fff;

  }
`;

export const DivIconBack = styled.div`
  height: 40px;
  box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.1);
  width: 40px;
  border-radius: 50%;
  position: relative;
  top: ${(props) => (props.top ? props.top : "")};
  margin: 0 2px;
  background-color: ${(props) =>
    props.color ? props.color : "var(--color-blue-light)"};

  .icon {
    position: absolute;
    left: 6px;
    top: 5.5px;
    height: 28px;
    width: 28px;
    color: #fff;
  }
`;

export const Span = styled.div`
  width: 240px;
  height: 25px;
  background-color: ${(props) => (props.color ? props.color : "#BABABA")};
  position: absolute;
  bottom: 55px;
  border-radius: 0 0 10px 10px;
`;

export const DivRestrictionAndName = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  margin: 20px 0px 0px 0px;

  p {
    position: absolute;
    bottom: 60px;
    z-index: 2;
    font-size: 0.65rem;
    text-align: justify;
    text-transform: uppercase;
  }

  img {
    width: 28px;
    height: 28px;
    position: absolute;
    z-index: 2;
  }
`;

export const DivProductCardBackContent = styled.div`
  background-color: ${(props) =>
    props.color ? props.color : "var(--color-blue-light)"};

  width: 100%;
  height: 86%;
  border-radius: 10px;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 0.6rem;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 10px;

    color: #fff;
  }
`;

export const DivBackContentInfos = styled.div`
  background-color: ${(props) =>
    props.color ? props.color : "var(--color-blue-light)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const DivProductDescription = styled.div`
  display: flex;
  justify-content: center;
  height: 170px;
  width: 200px;
  border-radius: 10px;
  margin: 0px 15px;

  background-color: #fff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1004%26quot%3b)' fill='none'%3e%3cpath d='M1952 1080L0 1080 L0 725.05Q72.6 701.64%2c 96 774.24Q285.36 803.6%2c 256 992.96Q128.45 769.41%2c 352 641.87Q687.67 817.54%2c 512 1153.21Q394.81 940.02%2c 608 822.83Q575.03 629.86%2c 768 596.89Q1054.67 787.56%2c 864 1074.23Q717.6 831.83%2c 960 685.43Q1333.36 898.79%2c 1120 1272.14Q1017.14 1073.28%2c 1216 970.42Q1170.29 764.71%2c 1376 719Q1626.34 873.34%2c 1472 1123.68Q1333.4 825.09%2c 1632 686.49Q1865.6 760.09%2c 1792 993.68Q1698.33 740%2c 1952 646.33z' fill='rgba(24%2c 231%2c 231%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1004'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");

  p {
    font-size: 0.6rem;
    text-align: justify;
    color: var(--color-gray);

    display: block;
    padding: 20px 10px;
  }

  span {
    font-weight: bold;
  }
`;

export const DivPersonDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: row;

  padding: 10px 0px 0px 15px;

  .user-image {
    width: 22px;
    height: 22px;
    color: #fff;
    border-radius: 50%;
    margin: 0px 10px 0px -28px;
    padding: 0;
  }
`;

export const DivNameAndPubDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  flex-direction: column;

  p {
    color: var(--color-white);
  }

  .pPersonName {
    font-size: 0.8rem;
  }

  .pPubDate {
    font-size: 0.6rem;
    margin-bottom: 5px;
  }
`;

export const DivComment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .comment-btn {
    background-color: ${(props) => (props.color ? props.color : "#fff")};

    border: none;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 1px solid #fff;
    margin-bottom: 20px;
    position: relative;
    transition: 500ms all ease;
  }

  .comment-btn:hover {
    background-color: #fff;

    .comment-icon {
      color: #000;
    }
  }

  .comment-icon {
    width: 22px;
    height: 22px;
    color: #fff;
    margin-top: 8px;
    transition: 500ms all ease;
  }
`;
