import { api } from "../utils/api";
import { parseCookies } from "nookies";

const { token: tokenJWT } = parseCookies();
const config = { headers: { authorization: `Bearer ${tokenJWT}` } };

export const useEditItem = async (data) => {
<<<<<<< HEAD
  const bodyParams = {
    mensagem: data.mensagem,
    id_usuario:  data.id_usuario,
    id_comentario:  data.id_comentario,
  };
  const editComment = await api
    .put(`/comments/${data.id_comentario}`, bodyParams, config)
    .then((response) => {
      alert("Editado");
    })
    .catch((err) => {
      alert("Não editado");
      console.log(err.message);
    });
=======
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
>>>>>>> b2b23ba2d3f2b9a4c6951d470191b758333c10d0
};
