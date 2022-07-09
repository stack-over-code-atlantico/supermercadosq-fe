import { api } from '../utils/api';

export const getAllProducts = async (page) => {
  const products = await api.get(`/products/page/${page}`);
  return products;
};

