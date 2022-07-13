import React from "react";
import sushiImage from "../../assets/images/sushiPhoto.png";
import home from "../../assets/icons/home.png";
import seafoodIcon from "../../assets/icons/seafood.png";
import milkIcon from "../../assets/icons/milk.png";
import fishIcon from "../../assets/icons/fish.png";
import mustardIcon from "../../assets/icons/mustard.png";
import peanutIcon from "../../assets/icons/peanut.png";
import eggIcon from "../../assets/icons/egg.png";
import wheatIcon from "../../assets/icons/wheat.png";
import UserComment from "../../components/UserComment/UserComment";
import { IoReturnDownBackOutline } from "react-icons/io5";
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

const ProductDetails = ({ open, id }) => {
  const [dataProduct, setDataProduct] = useState();
  const [dataComment, setDataComment] = useState();
  const [idReq, setIdReq] = useState(id);

  const [isEdit, setIsEdit] = useState("");
  const [alergia, setAlergia] = useState("");
  const [configAlergia, setConfigAlergia] = useState([]);

  const handleColor = (alergiaAtual) => {
    if (alergiaAtual == "") return { color: "#9CDD6E", icon: home };
    if (alergiaAtual == "ovo") return { color: "#DAC50A", icon: eggIcon };
    if (alergiaAtual == "soja") return { color: "#D3B273", icon: wheatIcon };
    if (alergiaAtual == "amendoim")
      return { color: "#C87C53", icon: peanutIcon };
    if (alergiaAtual == "mostarda")
      return { color: "#F59E1D", icon: mustardIcon };
    if (alergiaAtual == "peixe") return { color: "#9CDBE7", icon: fishIcon };
    if (alergiaAtual == "crustaceos")
      return { color: "#F66A69", icon: seafoodIcon };
    if (alergiaAtual == "lactose") return { color: "#3EBCD3", icon: milkIcon };
    return { color: "#9CDD6E", icon: home };
  };

  console.log(idReq);

  useEffect(() => {
    (async function () {
      setIdReq(id);
      getProduct(id);
      getComments(id);
    })();
  }, []);

  // useEffect(() => {
  //   getComments(id);
  // }, [dataComment]);

  useEffect(() => {
    setConfigAlergia([]);
    for (let values of alergia) {
      console.log(values);
      setConfigAlergia((prev) => [...prev, handleColor(values)]);
    }
  }, [alergia]);

  function getProduct(id_produto) {
    getOneProduct(id_produto)
      .then((resp) => {
        setDataProduct(resp.data);
        return resp;
      })
      .then((res) => {
        // console.log(res.data.alergia)
        if (res.data.alergia) setAlergia(res.data.alergia.split(","));
      });
  }

  function getComments(id_produto) {
    getCommentsByProduct(id_produto).then((resp) => {
      setDataComment(resp.data);
    });
  }

  function handleCreateComment(mensagem, id_produto) {
    const createNewComment = useCreateComment({
      mensagem,
      id_produto,
    }).then((resp) => {
      getCommentsByProduct(id_produto)
        .then((resp) => {
          return resp.data;
        })
        .then((resp) => setDataComment(resp));
    });

    return createNewComment;
  }

  async function handleEditItem(mensagem, id_item) {
    const createEditItem = useEditItem({
      mensagem,
      id_item,
    });
    setDataComment(dataComment);
    setIsEdit("");
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
    <>
      {
        open
          ? (
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
                  <PostContainer
                    color={configAlergia.length < 1 ? "" : configAlergia[0].color}
                  >
                    <span>{dataProduct?.nome}</span>
                    <h3>{dataProduct?.descricao}</h3>
                    <NutritionalContainer
                      color={configAlergia.length < 1 ? "" : configAlergia[0].color}
                    >
                      <NutritionalTable>
                        <p>{dataProduct?.ingredientes}</p>
                      </NutritionalTable>
                      <IconType>
                        {configAlergia.map((item) => {
                          return (
                            <div
                              className="IconType"
                              style={{ backgroundColor: item.color }}
                            >
                              <img src={item.icon} alt="peixe" />
                            </div>
                          );
                        })}
                      </IconType>
                    </NutritionalContainer>
                  </PostContainer>
                  <LabelMessage
                    color={configAlergia.length < 1 ? "" : configAlergia[0].color}
                    executeFunction={handleCreateComment}
                    mensagem
                    id_item={id}
                    typeHandleCreate={true}
                  />
                  <ListComments
                    color={configAlergia.length < 1 ? "" : configAlergia[0].color}
                  >
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
                            onEditItem={() => {
                              handleEditItem;
                              setIsEdit(comment?.id_comentario);
                            }}
                          />
                          {isEdit === comment?.id_comentario ? (
                            <p>
                              <LabelMessage
                                executeFunction={handleEditItem}
                                mensagem
                                id_item={comment.id_comentario}
                                typeHandleCreate={false}
                              />
                            </p>
                          ) : (
                            <p>{comment.mensagem}</p>
                          )}
                        </Comment>
                      );
                    })}
                  </ListComments>
                </PostComment>
              </DetailsComments>
            </DetailsContainer>
          ) : (
            <></>
          )
      }
    </>
  );
};

export default ProductDetails;
