import { useState } from 'react';
import Cookie from "js-cookie";
import { api } from "../utils/api";
import jwt_decode from "jwt-decode";

let expires = null;

const useAuth = () => {
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  const userLevel = () => {
    try {
      if (Cookie.get("token")) {
        const token = Cookie.get("token");
        const decoded = jwt_decode(token);
        expires = decoded.exp;
        Cookie.set("expires", expires ? expires : `${Date.now()}`);
        return decoded;
      }
    } catch (error) {
      setError('Houve um problema com o token.');
    }
  };

  const login = async (login) => {
    const authenticate = await api
      .post("/login", {
        email: login.email,
        senha: login.senha,
      })
      .then((response) => {
        Cookie.set("token", response.data);
        window.location.replace("/");
      })
      .catch((err) => {
        setError('Não foi possível fazer o login');
        alert("Não foi possível fazer o login.");
      });
    return authenticate;
  };

  const logout = () => {
    setOpen(true);
    Cookie.remove("token");
    Cookie.remove("expires");
    window.location.replace("/");
  };

  return {
    userLevel,
    login,
    logout,
    error,
    setError,
    open,
    setOpen
  }
}

export default useAuth;
