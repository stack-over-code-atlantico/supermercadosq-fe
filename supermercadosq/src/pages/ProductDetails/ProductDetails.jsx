import React from "react";
import sushiImage from "../../assets/images/sushiPhoto.png";
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
        <img src={sushiImage} alt="mesa com sushi" />
      </DetailsImage>
      <DetailsComments>
        <UserComment />
        <PostComment>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            alias aliquam illum quasi at ab odio obcaecati aut ullam nemo
            maxime, ratione provident. Fuga est, animi sequi sapiente blanditiis
            porro. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <ListComments>
            <UserComment />
            <UserComment />
            <UserComment />
          </ListComments>
        </PostComment>
      </DetailsComments>
    </DetailsContainer>
  );
};

export default ProductDetails;
