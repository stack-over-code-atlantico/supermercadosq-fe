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
  NutritionalContainer,
  NutritionalTable,
  PostComment,
  PostContainer,
} from "./styles";
import { getCommentsByProduct } from "../../services/useCommentByProduct";
import { useDeleteItem } from "../../services/useDeleteItem";
import { useNewReport } from "../../services/useNewReport";
import { useCreateComment } from "../../services/useCreateComment";
import { useEditItem } from "../../services/useEditItem";
import LabelMessage from "../../components/LabelMessage";

const ProductDetails = () => {
  const [dataProduct, setDataProduct] = useState();
  const [dataComment, setDataComment] = useState();

  const [idProdComment, setIdProdComment] = useState("1");

  useEffect(() => {
    getProduct(idProdComment);
    getComments(idProdComment);
  }, []);

  function getProduct(id_produto) {
    getOneProduct(id_produto).then((resp) => {
      setDataProduct(resp.data);
    });
  }
  function getComments(id_produto) {
    getCommentsByProduct(id_produto).then((resp) => {
      setDataComment(resp.data);
    });
  }

  function handleCreateComment(mensagem, id_produto) {
    console.log(id_produto);
    const createNewComment = useCreateComment({
      mensagem,
      id_produto,
    }).then(resp=>{
      getCommentsByProduct(id_produto).then((resp) => {
        return resp.data;
      }).then(resp=>setDataComment(resp));
    });
    
    return createNewComment;
  }

  async function handleEditItem(mensagem, id_usuario, id_comentario) {
    const createEditItem = useEditItem({
      mensagem,
      id_usuario,
      id_comentario,
    });
    return createEditItem;
  }

  async function handleDeleteItem(id_item, typeItem) {
    const deleteItemAxios = useDeleteItem({
      id_item,
      typeItem,
    });
    if ((await deleteItemAxios) instanceof Error) {
      return Error;
    }
    if (typeItem == "comentario") {
      const deleteItem = dataComment.filter((comment) => {
        return comment.id_comentario != id_item;
      });
      setDataComment(deleteItem);
    }
    return deleteItemAxios;
  }
  async function handleReportItem(id_item, typeItem) {
    const reportItemAxios = useNewReport({
      id_item,
      typeItem,
    });
    if ((await reportItemAxios) instanceof Error) {
      return Error;
    }
    if (typeItem == "comentario") {
      const deleteItem = dataComment.filter((comment) => {
        return comment.id_comentario != id_item;
      });
      setDataComment(deleteItem);
    }
    return reportItemAxios;
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
          id_item={dataProduct?.id_produto}
          userOwner={dataProduct?.usuario_produto_id_usuarioTousuario.nome}
          userIdOwner={dataProduct?.id_usuario}
          dataPublicacao={dataProduct?.data_postagem}
          typeItem="produto"
          onDeleteItem={handleDeleteItem}
          onReportItem={handleReportItem}
          onEditItem={handleEditItem}
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
          <LabelMessage
            executeFunction={handleCreateComment}
            mensagem
            id_item={idProdComment}
            typeHandleCreate={true}
          />
          <ListComments>
            {dataComment?.map((comment) => {
              return (
                <Comment key={comment.id_comentario}>
                  <UserComment
                    id_item={comment?.id_comentario}
                    userOwner={
                      comment?.usuario_comentario_id_usuarioTousuario.nome
                    }
                    userIdOwner={comment?.id_usuario}
                    dataPublicacao={comment?.data_comentario}
                    typeItem="comentario"
                    onDeleteItem={handleDeleteItem}
                    onReportItem={handleReportItem}
                    onEditItem={handleEditItem}
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
