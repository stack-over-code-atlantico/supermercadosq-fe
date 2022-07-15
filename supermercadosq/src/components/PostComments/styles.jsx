import styled from 'styled-components';

export const PostCommentsContainer = styled.div`
  margin: 10vh 10vh;

  .title {
    color: rgba(114, 114, 114, 1);
    font-weight: 400;
  }

  .subtitle {
    margin-top: 4vh;
    color: var(--color-blue-light);
    font-weight: 400;
  }

  hr{
    width: auto;
    color: #E9E6E6;
  }
`

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 45%;
  li {
    list-style: none;
  }
`;

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 8px 16px #26395338;
  width: 350px;
  height: 200px;
  margin-top: 1rem;
  overflow-y: auto;
  margin-right: 1rem;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
   background-color: var(--color-blue-light);
  }

  &:hover {
    #img {
      height: 100px;
    }
  }
`;

export const TopCard = styled.div`
  padding: 20px 10px 5px 10px;
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  text-align: justify;
`;

export const SubTitle = styled.h3`
  font-size: 0.7rem;
  font-weight: 400;
`;

export const MediaCard = styled.div`
  padding: 5px 10px 5px 10px;
  font-size: 0.9rem;
`;
