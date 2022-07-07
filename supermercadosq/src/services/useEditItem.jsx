import { api } from "../utils/api";
import { parseCookies } from "nookies";

const { token: tokenJWT } = parseCookies();
const config = { headers: { authorization: `Bearer ${tokenJWT}` } };

export const useEditItem = async (data) => {
  const bodyParams = {};
  if (data.typeItem === "produto") {
    const produto = await api
      .put(`/comments/${data.id_item}`, bodyParams, config)
      .then((resp) => {
        console.log("produto editado");
      })
      .catch((err) => {
        alert("Ocorreu um Erro");
        console.log(err);
      });

    return produto;
  }

  const comments = await api
    .put(`/comments/${data.id_item}`, bodyParams, config)
    .then((resp) => {
      console.log("comentario editado");
    })
    .catch((err) => {
      alert("Ocorreu um Erro");
      console.log(err);
      return new Error("Falha ao Editar");
    });

  return comments;
};
