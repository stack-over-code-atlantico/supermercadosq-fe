import { api } from '../utils/api';
import Cookies from 'js-cookie';

export const getAllProducts = async () => {
  const products = await api.get('/products');
  return products;
};

export const createOneProduct = async (data) => {
  const products = await api.post('/products', data, {
    headers: {
      'content-type': 'multipart/form-data',
      Authorization: `Bearer ${Cookies.get('token')}`
    }
  });
  return products;
};
