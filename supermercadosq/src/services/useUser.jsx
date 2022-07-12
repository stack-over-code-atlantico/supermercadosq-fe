import { api } from '../utils/api';


export const dataUser = async (id_usuario) => {
  // const data = await api.get('/users');
  const user = await api.get(`/users/${id_usuario}`);

  return user;
}
