import { api } from "../utils/api";
import { parseCookies } from "nookies";

const { token: tokenJWT } = parseCookies();
const config = { headers: { authorization: `Bearer ${tokenJWT}` } };

export const useEditItem = async (data) => {
  const bodyParams = {
    mensagem: data.mensagem,
  };

  if (data.typeItem === "produto") {
    const produto = await api
      .put(`/comments/${data.id_item}`, bodyParams, config)
      .then((resp) => {})
      .catch((err) => {
        alert("Ocorreu um Erro");
      });

    return produto;
  }

  const comments = await api
    .put(`/comments/${data.id_item}`, { mensagem: data.mensagem }, config)
    .then((resp) => {})
    .catch((err) => {
      alert("Ocorreu um Erro");

      return new Error("Falha ao Editar");
    });

  return comments;
};
