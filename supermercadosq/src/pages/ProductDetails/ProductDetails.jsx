import React from "react";
import sushiImage from "../../assets/images/sushiPhoto.png";
import fishIcon from "../../assets/icons/fish.png";
import UserComment from "../../components/UserComment/UserComment";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { AiOutlineSend } from "react-icons/ai";
import { getOneProduct } from "../../services/useProductOne";
import { useEffect,useState } from "react";
import {
  Comment,
  DetailsComments,
  DetailsContainer,
  DetailsImage,
  IconType,
  ListComments,
  NewComment,
  NutritionalContainer,
  NutritionalTable,
  PostComment,
  PostContainer,
} from "./styles";

const ProductDetails = () => {
const [data, setData]= useState()

  useEffect(() => {
     getOneProduct(11).then(resp=>{
      setData(resp.data)
     })
     console.log(data)
  }, []);
  return (
    <DetailsContainer>
      <DetailsImage>
        <div className="BackProduct">
          <IoReturnDownBackOutline />
        </div>
        <img src={sushiImage} alt="mesa com sushi" />
      </DetailsImage>
      <DetailsComments>
        <UserComment user={data?.usuario_produto_id_usuarioTousuario.nome} dataPublicacao={data?.data_postagem}/>
        <PostComment>
          <PostContainer>
            <span>{data?.nome}</span>
            <h3>{data?.descricao}</h3>
            <NutritionalContainer>
              <NutritionalTable>
                <p>{data?.ingredientes}</p>
              </NutritionalTable>
              <IconType>
                <div id="IconType">
                  <img src={fishIcon} alt="peixe" />
                </div>
              </IconType>
            </NutritionalContainer>
          </PostContainer>
          <NewComment>
            <input type="text" placeholder="Adicionar Comentário" />
            <button>
              <AiOutlineSend />
            </button>
          </NewComment>
          <ListComments>
            <Comment>
              <UserComment />
              <p>
                ComentarioComentarioComentaioComenta
                ComentarioComentarioComentario ComentarioComentarioComentario
              </p>
            </Comment>
            <Comment>
              <UserComment />
              <p>
                ComentarioComentarioComentaioComenta
                ComentarioComentarioComentario ComentarioComentarioComentario
              </p>
            </Comment>
            <Comment>
              <UserComment />
              <p>Comentario</p>
            </Comment>
          </ListComments>
        </PostComment>
      </DetailsComments>
    </DetailsContainer>
  );
};

export default ProductDetails;
