import { api } from "../utils/api";
import { parseCookies } from "nookies";

const { token: tokenJWT } = parseCookies();
const config = { headers: { authorization: `Bearer ${tokenJWT}` } };

export const getAllComments = async () => {
  const comments = await api.get("/comments");
  return comments;
};

export const getLastCommentsById = async (data) => {
  const lastComments = await api
    .get(`/comments/Historic/${data}`, config)
    .catch((err) => {
      alert("Não foi possível gerar histórico");
    });
  return lastComments;
};

export const getCommentsByProduct = async (id_produto) => {
  const products = await api.get(`/comments/product/${id_produto}`);
  return products;
};

export const useCreateComment = async (data) => {
  const bodyParams = {
    mensagem: data.mensagem,
    id_produto: data.id_produto,
  };

  const commentPost = await api
    .post("/comments", bodyParams, config)
    .catch((err) => {
      alert("Comentário não cadastrado");
    });
};
