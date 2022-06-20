import Cookie from 'js-cookie';
import { api } from '../utils/api';

export const auth = async (login) => {
  const authenticate = await api.post('/login', {
    email: login.email,
    senha: login.senha
  }).then( (response) => {
    Cookie.set('token', response.data)
    Cookie.set('expires', `${Date.now()}`)
    window.location.replace('/')
  }).catch( err => {
    console.log(err.message);
  })
  return authenticate;
}

export const logOut = () => {
  Cookie.remove('token')
  Cookie.remove('expires')
  window.location.replace('/')
}
