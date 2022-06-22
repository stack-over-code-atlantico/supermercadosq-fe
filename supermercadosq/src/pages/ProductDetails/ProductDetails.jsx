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
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem alias aliquam illum quasi at ab odio obcaecati aut ullam nemo maxime, ratione provident. Fuga est, animi sequi sapiente blanditiis porro. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
        </PostComment>
        <ListComments>
          <h1>Comentarios</h1>
        </ListComments>
      </DetailsComments>
    </DetailsContainer>
  );
};

export default ProductDetails;
