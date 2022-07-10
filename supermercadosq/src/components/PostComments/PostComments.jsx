import React from 'react';
import { PostCommentsContainer, Container, CardList, Card, TopCard, Title, MediaCard, SubTitle } from './styles';


export default class PostCommentsForm extends React.Component {

  render() {
    return (
       <>
        <PostCommentsContainer>
          <h2 className="title">Histórico de postagens e comentários</h2>
          <h3 className="subtitle">Últimas postagens</h3>
          <hr/>

          <Container>
            <CardList>
              <Card>
                <TopCard>
                  <div>
                    <Title>
                      Produto 1
                    </Title>
                    <SubTitle>
                      Toda descrição do produto
                    </SubTitle>
                  </div>
                </TopCard>

                  <hr />

                <MediaCard>
                miolo do cartão
                </MediaCard>
              </Card>
              <Card>
                <TopCard>
                  <div>
                    <Title>
                      Produto 1
                    </Title>
                    <SubTitle>
                      Toda descrição do produto
                    </SubTitle>
                  </div>
                </TopCard>

                  <hr />

                <MediaCard>
                miolo do cartão
                </MediaCard>
              </Card>
              <Card>
                <TopCard>
                  <div>
                    <Title>
                      Produto 1
                    </Title>
                    <SubTitle>
                      Toda descrição do produto
                    </SubTitle>
                  </div>
                </TopCard>

                  <hr />

                <MediaCard>
                miolo do cartão
                </MediaCard>
              </Card>
              <Card>
                <TopCard>
                  <div>
                    <Title>
                      Produto 1
                    </Title>
                    <SubTitle>
                      Toda descrição do produto
                    </SubTitle>
                  </div>
                </TopCard>

                  <hr />

                <MediaCard>
                miolo do cartão
                </MediaCard>
              </Card>
            </CardList>
          </Container>



          <h3 className="subtitle">Últimos comentários</h3>
          <hr/>


          <Container>
            <CardList>
              <Card>
                <TopCard>
                  <div>
                    <Title>
                      Produto 1
                    </Title>
                    <SubTitle>
                      Toda descrição do produto
                    </SubTitle>
                  </div>
                </TopCard>

                  <hr />

                <MediaCard>
                miolo do cartão
                </MediaCard>
              </Card>
              <Card>
                <TopCard>
                  <div>
                    <Title>
                      Produto 1
                    </Title>
                    <SubTitle>
                      Toda descrição do produto
                    </SubTitle>
                  </div>
                </TopCard>

                  <hr />

                <MediaCard>
                miolo do cartão
                </MediaCard>
              </Card>
              <Card>
                <TopCard>
                  <div>
                    <Title>
                      Produto 1
                    </Title>
                    <SubTitle>
                      Toda descrição do produto
                    </SubTitle>
                  </div>
                </TopCard>

                  <hr />

                <MediaCard>
                miolo do cartão
                </MediaCard>
              </Card>
              <Card>
                <TopCard>
                  <div>
                    <Title>
                      Produto 1
                    </Title>
                    <SubTitle>
                      Toda descrição do produto
                    </SubTitle>
                  </div>
                </TopCard>

                  <hr />

                <MediaCard>
                miolo do cartão
                </MediaCard>
              </Card>
            </CardList>
          </Container>
        </PostCommentsContainer>
      </>
    );
  }
}


