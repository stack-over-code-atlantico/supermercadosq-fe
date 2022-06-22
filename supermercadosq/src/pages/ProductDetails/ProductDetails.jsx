import React from "react";
import sushiImage from "../../assets/images/sushiPhoto.png";
import fishIcon from "../../assets/icons/fish.png";
import UserComment from "../../components/UserComment/UserComment";
import { IoReturnDownBackOutline } from "react-icons/io5";

import {
  DetailsComments,
  DetailsContainer,
  DetailsImage,
  IconType,
  ListComments,
  NutritionalContainer,
  NutritionalTable,
  PostComment,
} from "./styles";

const ProductDetails = () => {
  return (
    <DetailsContainer>
      <DetailsImage>
        <div className="BackProduct">
          <IoReturnDownBackOutline />
        </div>
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
          <NutritionalContainer>
            <NutritionalTable>
              <p>Calorias (valor energético) 26.70 kcal 1.34%</p>{" "}
              <p>Carboidratos líquidos 5.01 g -</p>
              <p>Carboidratos 5.01 g 1.67%</p> <p>Proteínas 1.44 g 0.48%</p>
              <p> Gorduras totais 0.12 g 0.22%</p>
              <p>Gorduras saturadas 0.00 g 0.00%</p>
              <p>Fibra alimentar 0.00 g 0.00% </p>
              <p>Sódio 0.00 mg 0.00% </p>
            </NutritionalTable>
            <IconType>
              <div id="IconType">
                <img src={fishIcon} alt="peixe" />
              </div>
            </IconType>
          </NutritionalContainer>
          <hr />
          <ListComments>
            <UserComment id="FirstComment" />
            <UserComment />
            <UserComment />
          </ListComments>
        </PostComment>
      </DetailsComments>
    </DetailsContainer>
  );
};

export default ProductDetails;
