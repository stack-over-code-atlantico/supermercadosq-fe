import Cookie from 'js-cookie';
import { api } from '../utils/api';

export const login = async (login) => {
  const authenticate = await api.post('/login', {
    email: login.email,
    senha: login.senha
  }).then( (response) => {
    Cookie.set('token', response.data, { expires: 1})
    Cookie.set('expires', `${Date.now()}`)
    window.location.replace('/')
  }).catch( err => {
    console.log(err.message);
  })
  return authenticate;
};

export const logout = () => {
  Cookie.remove('token')
  Cookie.remove('expires')
  window.location.replace('/')
};
