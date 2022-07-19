import { api } from "../utils/api";
import Cookies from "js-cookie";

import { parseCookies } from "nookies";

const { token: tokenJWT } = parseCookies();
const config = { headers: { authorization: `Bearer ${tokenJWT}` } };

export const getLastProductsById = async (data) => {
  const lastProducts = await api
    .get(`/products/Historic/${data}`, config)
    .catch((err) => {});
  return lastProducts;
};

export const getAllProducts = async (page) => {
  if (typeof page === "number" || page >= 0) {
    const products = await api.get(`/products/page/${page}`);
    return products;
  }
  const products = await api.get(`/products/`);
  return products;
};

export const postProductPerAllergy = async (allergies, page) => {
  const products = await api.post(`/products/allergy/${page}`, {
    alergia: allergies,
  });
  return products;
};

export const createOneProduct = async (data) => {
  const products = await api.post("/products", data, {
    headers: {
      "content-type": "multipart/form-data",
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return products;
};

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
    });
};

export const editOneProduct = async (data, id_produto) => {
  const products = await api.put(`/products/${id_produto}`, data, {
    headers: {
      "content-type": "multipart/form-data",
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return products;
};

export const searchProduct = async (name, page) => {
  const products = await api.post(`/products/search/${page}`, {
    nome: name
  });
  return products;
};

export const getOneProduct = async (id_produto) => {
  const products = await api.get(`/products/${id_produto}`);
  return products;
};

