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
import { useNewReport } from "../../services/useNewReport";
import { useCreateComment } from "../../services/useCreateComment";
import { useEditItem } from "../../services/useEditItem";
import LabelMessage from "../../components/LabelMessage";

const ProductDetails = () => {
  const [dataProduct, setDataProduct] = useState();
  const [dataComment, setDataComment] = useState();

  const [messageComment, setMessageComment] = useState("");
  const [idProdComment, setIdProdComment] = useState("1");
  const [idUserComment, setIdUserComment] = useState("");

  const [editMessage, setEditMessage] = useState("");
  const [idComment, setIdComment] = useState("");

  useEffect(() => {
    getProduct(1);
    getComments(1);
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

  function handleCreateComment(messageComment, idProdComment, idUserComment) {
    const createNewComment = useCreateComment({
      mensagem: messageComment,
      id_produto: idProdComment,
      id_usuario: idUserComment,
    });
    setMessageComment("");
    return createNewComment;
  };

  async function handleEditItem(mensagem, id_usuario, id_comentario) {
    const createEditItem = useEditItem({
      mensagem,
      id_usuario,
      id_comentario,
    });
    // dataComment.push((comment) => {
    //   return comment.mensagem
    // })
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
          {/* <NewComment>
            <input
              type="text"
              placeholder="Adicionar Comentário"
              value={messageComment}
              onChange={(e) => setMessageComment(e.target.value)}
            />
            <button onClick={handleCreateComment}>
              <AiOutlineSend />
            </button>
          </NewComment> */}
          <LabelMessage executeFunction={handleCreateComment}/>
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
