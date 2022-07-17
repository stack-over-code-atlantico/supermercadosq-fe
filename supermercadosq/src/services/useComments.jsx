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
