import React, { useEffect, useState } from "react";
import {
  PostCommentsContainer,
  Container,
  CardList,
  Card,
  TopCard,
  Title,
  MediaCard,
  SubTitle,
} from "./styles";
import { getLastProductsById } from "../../services/useProducts";
import { getLastCommentsById } from "../../services/useComments";

const PostComments = ({ data }) => {
  const [getComments, setGetComments] = useState([]);
  const [getProducts, setGetProducts] = useState([]);

  async function getHistoric() {
    const gettingHistoricComments = await getLastCommentsById(data.id_usuario);
    const gettingHistoricProducts = await getLastProductsById(data.id_usuario);
    setGetComments(gettingHistoricComments.data);
    setGetProducts(gettingHistoricProducts.data);
  }

  useEffect(() => {
    getHistoric();
  }, []);

  return (
    <>
      <PostCommentsContainer>
        <h2 className="title">Histórico de postagens e comentários</h2>
        <h3 className="subtitle">Últimas postagens</h3>
        <hr />

        <Container>
          <CardList>
            {getProducts.map((product) => {
              return (
                <Card>
                  <TopCard>
                    <div>
                      <Title>{product.nome}</Title>
                      <SubTitle>{product.descricao}</SubTitle>
                    </div>
                  </TopCard>
                  <hr />
                  <MediaCard>{product.ingredientes}</MediaCard>
                </Card>
              );
            })}
          </CardList>
        </Container>

        <h3 className="subtitle">Últimos comentários</h3>
        <hr />

        <Container>
          <CardList>
            {getComments.map((comments) => {
              return (
                <Card>
                  <TopCard>
                    <div>
                      <Title>Produto {comments.id_produto}</Title>
                      <SubTitle>
                        {comments.data_comentario
                          .slice(0, 10)
                          .split("-")
                          .reverse()
                          .join("/")}
                      </SubTitle>
                    </div>
                  </TopCard>

                  <hr />

                  <MediaCard>{comments.mensagem}</MediaCard>
                </Card>
              );
            })}
          </CardList>
        </Container>
      </PostCommentsContainer>
    </>
  );
};

export default PostComments;
