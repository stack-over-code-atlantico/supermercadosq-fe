import { api } from "../utils/api";
import { parseCookies } from "nookies";

const { token: tokenJWT } = parseCookies();
const config = { headers: { authorization: `Bearer ${tokenJWT}` } };

export const useCreateComment = async (data) => {
  const bodyParams = {
    mensagem: data.mensagem,
    id_produto: data.id_produto,
  };

  const commentPost = await api
    .post("/comments", bodyParams, config)
    .catch((err) => {
      alert("Comentário não cadastrado");
      console.log(err.message);
    });
};
