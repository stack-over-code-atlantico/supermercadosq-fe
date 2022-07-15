import { api } from "../utils/api";
import Cookies from "js-cookie";

import { parseCookies } from "nookies";

const { token: tokenJWT } = parseCookies();
const config = { headers: { authorization: `Bearer ${tokenJWT}` } };

export const getLastProductsById = async (data) => {

  const lastProducts = await api
    .get(`/products/Historic/${data}`, config)
    .catch((err) => {
      console.log(err.message);
    });
    return lastProducts
};

export const getAllProducts = async () => {
  const products = await api.get("/products");
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
