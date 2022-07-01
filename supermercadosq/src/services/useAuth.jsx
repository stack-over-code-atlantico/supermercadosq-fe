import Cookie from 'js-cookie';
import { api } from '../utils/api';
import jwt_decode from 'jwt-decode';

let expires = null;

export const userLevel = () => {
  try {
    if(Cookie.get('token') ){
      const token = Cookie.get('token');
      const decoded = jwt_decode(token);
      expires = decoded.exp;
      Cookie.set('expires', expires ? expires : `${Date.now()}`);
      return decoded;
    }
  } catch (error) {
    console.log(error);
  }
};

export const login = async (login) => {

  const authenticate = await api.post('/login', {
    email: login.email,
    senha: login.senha
  }).then((response) => {
    Cookie.set('token', response.data)
    window.location.replace('/')
  }).catch(err => {
    alert('Não foi possível fazer o login.')
    console.log(err.message);
  })
  return authenticate;
};

export const logout = () => {
  Cookie.remove('token')
  Cookie.remove('expires')
  window.location.replace('/')
};
