import React from "react";
import sushiImage from "../../assets/images/sushiPhoto.png";
import fishIcon from "../../assets/icons/fish.png";
import UserComment from "../../components/UserComment/UserComment";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { AiOutlineSend } from "react-icons/ai";
import { getOneProduct } from "../../services/useProductOne";
import { useEffect, useState } from "react";
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
import { getCommentsByProduct } from "../../services/useCommentByProduct";

const ProductDetails = () => {
  const [dataProduct, setDataProduct] = useState();
  const [dataComment, setDataComment] = useState();

  useEffect(() => {
    getOneProduct(1).then((resp) => {
      setDataProduct(resp.data);
    });
    getCommentsByProduct(1).then((resp) => {
      setDataComment(resp.data);
    });
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
        <UserComment
          userOwner={dataProduct?.usuario_produto_id_usuarioTousuario.nome}
          userIdOwner={dataProduct?.id_usuario}
          dataPublicacao={dataProduct?.data_postagem}
        />
        <PostComment>
          <PostContainer>
            <span>{dataProduct?.nome}</span>
            <h3>{dataProduct?.descricao}</h3>
            <NutritionalContainer>
              <NutritionalTable>
                <p>{dataProduct?.ingredientes}</p>
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
            {dataComment?.map((comment) => {
              return (
                <Comment key={comment.id_comentario}>
                  <UserComment
                    userOwner={comment?.usuario_comentario_id_usuarioTousuario.nome}
                    userIdOwner={comment?.id_usuario}
                    dataPublicacao={comment?.data_comentario}
                  />
                  <p>{comment.mensagem}</p>
                </Comment>
              );
            })}
          </ListComments>
        </PostComment>
      </DetailsComments>
    </DetailsContainer>
  );
};

export default ProductDetails;
