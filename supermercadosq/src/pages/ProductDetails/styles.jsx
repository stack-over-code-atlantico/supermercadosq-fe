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
    box-shadow: inset 0 0 4px var(--color-gray);
    cursor: pointer;

    &:hover {
      box-shadow: inset 0 0 2px var(--color-gray);
      transition: all 0.3ms ease-in;
    }
    cursor: pointer;
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
  grid-template-columns: 8% 87% 5%;
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
  width: 100%;
  height: 70%;
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
  overflow: auto;
`;
export const IconType = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 25px;
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

export const NewComment = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
  width: 100%;
  input {
    width: 93%;
    color: var(--color-gray);
  }
  button {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: var(--color-blue-light);
    color: white;
    border: none;
    &:hover {
      color: var(--color-blue-light);
      background-color: white;
      border: 1px solid var(--color-blue-light);
    }
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

export const ListComments = styled.div`
  border-bottom: 2px solid #0000002b;
  height: 180px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: #0000002b;
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--color-blue-light);
    border-radius: 20px;
  }
`;
export const Comment = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 10% 90%;
  //grid-template-rows: 10% 90%;
  grid-template-areas:
    "base base"
    "x body";
  div {
    grid-area: base;
  }
  p {
    grid-area: body;
  }
  font-size: 12px;
`;
