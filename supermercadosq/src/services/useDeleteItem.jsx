import { api } from "../utils/api";
import { parseCookies } from "nookies";

const { token: tokenJWT } = parseCookies();
const config = { headers: { authorization: `Bearer ${tokenJWT}` } };

export const useDeleteItem = async (data) => {
  const bodyParams = {};
  if (data.typeItem === "produto") {
    const produto = await api
      .put(`/products/${data.id_item}/delete`, bodyParams, config)
      .then((resp) => {
        window.location.reload();
      })
      .catch((err) => {
        alert("Ocorreu um Erro");
      });

    return produto;
  }

  const comments = await api
    .put(`/comments/${data.id_item}/delete`, bodyParams, config)
    .then((resp) => {})
    .catch((err) => {
      alert("Ocorreu um Erro");
      return new Error("Falha ao Deletar");
    });

  return comments;
};
