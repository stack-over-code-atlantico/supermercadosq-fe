import { api } from '../utils/api';

export const getAllProducts = async () => {
  const products = await api.get('/products');
  return products;
};

