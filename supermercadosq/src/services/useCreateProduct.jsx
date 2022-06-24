import { api } from "../utils/api";
import { parseCookies } from "nookies";

const { token: tokenJWT } = parseCookies();
const config = { headers: { authorization: `Bearer ${tokenJWT}` } };

export const createProduct = async (data) => {
  const bodyParams = {
    nome: data.nome,
    ingredientes: data.ingredientes,
    imagem: data.imagem,
  };
  const productPost = await api
    .post("/products", bodyParams, config)
    .then((response) => {
      alert("Produto cadastrado");
    })
    .catch((err) => {
      alert("Produto não cadastrado");
      console.log(err.message);
    });
};
