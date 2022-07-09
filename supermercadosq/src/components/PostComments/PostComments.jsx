import React from 'react';
import { PostCommentsContainer } from './styles';


export default class PostCommentsForm extends React.Component {

  render() {
    return (
       <>
        <PostCommentsContainer>
          <h2 className="title">Histórico de postagens e comentários</h2>

          <h3 className="subtitle">Últimas postagens</h3>
          <hr/>

          <h3 className="subtitle">Últimos comentários</h3>
          <hr/>
        </PostCommentsContainer>
      </>
    );
  }
}


