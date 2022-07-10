import styled from 'styled-components';

export const PostCommentsContainer = styled.div`
  margin: 10vh 10vh;

  .title {
    color: rgba(114, 114, 114, 1);
    font-weight: 400;
  }

  .subtitle {
    margin-top: 4vh;
    font-weight: 400;
    color: var(--color-blue-light);
  }

  hr{
    width: 450px;
    color: #E9E6E6;
  }
`

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  li {
    list-style: none;
  }
`;

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 8px 16px #26395338;
  width: 300px;
  height: 180px;
  margin-top: 1rem;
  overflow: hidden;
  margin-right: 1rem;
  // Recua a imagem para o texto
  &:hover {
    #img {
      height: 100px;
    }
  }

  hr {
    color: #3EBCD3;
  }
`;

export const TopCard = styled.div`
  padding: 20px 10px 5px 10px;
  padding-top: 10px;
`;

export const Title = styled.h2`
  font-size: 1rem;
  text-align: justify;
`;

export const SubTitle = styled.h3`
  font-size: 0.8rem;
`;

export const MediaCard = styled.div`
  padding: 5px 10px 5px 10px;
`;
