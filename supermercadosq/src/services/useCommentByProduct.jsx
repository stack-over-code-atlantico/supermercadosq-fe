import { api } from "../utils/api";

export const getCommentsByProduct = async (id_produto) => {
  const products = await api.get(`/comments/product/${id_produto}`);
  return products;
};
