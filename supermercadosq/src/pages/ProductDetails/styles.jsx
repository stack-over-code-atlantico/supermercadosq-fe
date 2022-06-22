import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px auto;
  width: 1000px;
  height: 550px;
  background-color: aquamarine;
  border-radius: 20px;
  box-shadow: 1px 2px 2px #1010107b;
`;

export const DetailsImage = styled.figure`
  background-color: red;
  width: 500px;
  height: 550px;
  border-radius: 20px 0 0 20px;
`;

export const DetailsComments = styled.div`
  width: 500px;
  height: 550px;
`;

export const PostComment = styled.div`
  height: 250px;
  border-radius: 0 20px 0 0;
  background-color: gray;

  h3 {
    font-size: 11px;
    padding: 10px;
    text-align: justify;
  }
`;

export const ListComments = styled.div`

`;



