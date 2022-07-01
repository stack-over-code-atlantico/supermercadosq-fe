
import { api } from '../utils/api';
import Cookies from 'js-cookie';

export const updateComplaint = async (data) => {

  const [, type] = Object.keys(data)[0].split('_');
  const token = Cookies.get('token');

  if (type === 'produto'){
    const products = await api.put(`/products/${data.id_produto}/analisaDenuncia`, {
      status: data.status
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return products;
  }

  const comments = await api.put(`/comments/${data.id_comentario}/reviewReport`, {
    status: data.status
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return comments;
};

