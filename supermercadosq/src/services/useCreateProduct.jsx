import { api } from "../utils/api";
import { parseCookies } from "nookies";

const { token: tokenJWT } = parseCookies();
const config = { headers: { authorization: `Bearer ${tokenJWT}` } };

export const createProduct = async (data) => {
  const bodyParams = {
    nome: data.nome,
    alergia: data.alergia,
    descricao: data.descricao,
    ingredientes: data.ingredientes,
    imagem: null,
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


