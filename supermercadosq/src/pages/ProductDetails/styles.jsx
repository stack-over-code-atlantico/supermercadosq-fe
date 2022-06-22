import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: var(--color-gray);
  background-color: #000000a6;
`;

export const DetailsImage = styled.figure`
  position: relative;
  background-color: red;
  width: 500px;
  height: 550px;
  border-radius: 20px 0 0 20px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 20px 0 0 20px;
  }
  .BackProduct {
    position: absolute;
    left: 10px;
    top: 10px;
    background-color: white;
    font-size: 2rem;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
`;

export const DetailsComments = styled.div`
  background-color: white;
  width: 650px;
  height: 550px;
  display: grid;
  border-radius: 0 20px 20px 0;
  grid-template-columns: 10%;
  grid-template-rows: 10% 90%;
  grid-template-areas:
    "base base"
    "x body";
  div {
    :first-child {
      grid-area: base;
      border-radius: 0 20px 0 0;
    }
  }
`;
export const NutritionalContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--color-blue-light);
  margin-bottom: 40px;
  div {
    width: 50%;
    :first-child {
      border-radius: 0 0 0 0;
    }
  }
`;
export const NutritionalTable = styled.div`
  padding: 10px 0px 10px 10px;
  font-size: 12px;
  color: white;
`;
export const IconType = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 10px;
  #IconType {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-blue-ciel);
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

export const PostComment = styled.div`
  grid-area: body;
  height: 250px;
  background-color: white;

  h3 {
    font-size: 11px;
    padding: 10px 10px 10px 0px;
    text-align: justify;
  }
`;

export const ListComments = styled.div``;
