import { api } from "../utils/api";
import { parseCookies } from "nookies";

const { token: tokenJWT } = parseCookies();
const config = { headers: { authorization: `Bearer ${tokenJWT}` } };

export const useNewReport = async (data) => {
  const bodyParams={}
  
  if (data.typeItem === "produto") {
    const products = await api
      .put(`/products/${data.id_item}/denuncia`,bodyParams, config)
      .then((resp) => {
        console.log("denunciado produto");
      })
      .catch((err) => {
        alert('Ocorreu um Erro')
      });

    return products;
  }

  const comments = await api
    .put(`/comments/${data.id_item}/report`, bodyParams, config)
    .then((resp) => {
      console.log("denunciado comentario");
    })
    .catch((err) => {
      alert('Ocorreu um Erro')
    });

  return comments;
};
