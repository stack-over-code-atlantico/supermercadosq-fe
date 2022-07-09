import { api } from '../utils/api';

export const getOneProduct = async (id_produto) => {
  const products = await api.get(`/products/${id_produto}`);
  return products;
};

