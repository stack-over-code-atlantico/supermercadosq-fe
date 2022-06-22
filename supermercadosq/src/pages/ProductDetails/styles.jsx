import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px auto;
  width: 1000px;
  height: 550px;
  background-color: aquamarine;
  border-radius: 20px;
  box-shadow: 1px 2px 2px #1010107b;
  color: var(--color-gray);
`;

export const DetailsImage = styled.figure`
  background-color: red;
  width: 500px;
  height: 550px;
  border-radius: 20px 0 0 20px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 20px 0 0 20px;
  }
`;

export const DetailsComments = styled.div`
  display: grid;
  grid-template-columns: 10% ;
  grid-template-rows: 10% 90%;
  grid-template-areas:
    "base base"
    "x body";
  width: 500px;
  height: 550px;
  div {
    :first-child {
      grid-area: base;
      border-radius: 0 20px 0 0;
    }
  }
`;

export const PostComment = styled.div`
grid-area: body;
  height: 250px;
  background-color: white;

  h3 {
    font-size: 11px;
    padding: 10px;
    text-align: justify;
  }
`;

export const ListComments = styled.div``;
