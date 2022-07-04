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
import { useDeleteItem } from "../../services/useDeleteItem";

const ProductDetails = () => {
  const [dataProduct, setDataProduct] = useState();
  const [dataComment, setDataComment] = useState();

  useEffect(() => {
    getProduct(1)
    getComments(1)
  }, []);

  function getProduct(id_produto){
    getOneProduct(id_produto).then(resp=>{
      setDataProduct(resp.data);
    })
  }
  function getComments(id_produto){
    getCommentsByProduct(id_produto).then((resp) => {
      setDataComment(resp.data);
    });
  }

  function handleDeleteTeste(id_item, typeItem){
    const deleteCommentAxios= useDeleteItem({
      id_item,
      typeItem
    })
    const deleteComment = dataComment.filter(comment=>{
      return comment.id_comentario != id_item
    })
    setDataComment(deleteComment)
    return deleteCommentAxios
  }

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
          id_item = {dataProduct?.id_produto}
          userOwner={dataProduct?.usuario_produto_id_usuarioTousuario.nome}
          userIdOwner={dataProduct?.id_usuario}
          dataPublicacao={dataProduct?.data_postagem}
          typeItem='produto'
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
                    id_item = {comment?.id_comentario}
                    userOwner={comment?.usuario_comentario_id_usuarioTousuario.nome}
                    userIdOwner={comment?.id_usuario}
                    dataPublicacao={comment?.data_comentario}
                    typeItem='comentario'
                    onDeleteComment={handleDeleteTeste}
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
