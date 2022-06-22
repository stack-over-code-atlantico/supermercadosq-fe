import React from "react";
import UserComment from "../../components/UserComment/UserComment";
import {
  DetailsComments,
  DetailsContainer,
  DetailsImage,
  ListComments,
  PostComment,
} from "./styles";

const ProductDetails = () => {
  return (
    <DetailsContainer>
      <DetailsImage>
        <h1>Imagem</h1>
      </DetailsImage>
      <DetailsComments>
        <PostComment>
          <UserComment/>
          <h1>Postagem</h1>
        </PostComment>
        <ListComments>
          <h1>Comentarios</h1>
        </ListComments>
      </DetailsComments>
    </DetailsContainer>
  );
};

export default ProductDetails;
