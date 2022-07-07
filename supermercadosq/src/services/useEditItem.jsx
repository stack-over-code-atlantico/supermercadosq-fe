import { api } from "../utils/api";
import { parseCookies } from "nookies";

const { token: tokenJWT } = parseCookies();
const config = { headers: { authorization: `Bearer ${tokenJWT}` } };

export const useEditItem = async (data) => {
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
};
