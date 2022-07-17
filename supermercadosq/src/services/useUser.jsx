import { parseCookies } from "nookies";
import { api } from "../utils/api";
import Cookies from "js-cookie";

const { token: tokenJWT } = parseCookies();
const config = { headers: { authorization: `Bearer ${tokenJWT}` } };

export const dataUser = async (id_usuario) => {
  const user = await api.get(`/users/${id_usuario}`);
  return user;
};

export const getUserById = async (id_usuario) => {
  const user = await api.get(`/users/${id_usuario}`);
  return user;
};

export const useCreateUser = async (data) => {
  for (let values of data.values()) {
  }
  const users = await api.post("/users", data, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  return users;
};

export const useEditUser = async (cpf_cnpj, data) => {
  const updateUser = await api
    .put(`/users/${cpf_cnpj}`, data, {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    })
    .then((resp) => {
      alert("Usuário atualizado com sucesso");
      return resp;
    })
    .catch((err) => {
      alert("Ocorreu um erro ao atualizar usuário");
      return err;
    });
  return updateUser;
};

export const editUserPassword = async (senhaAntiga, novaSenha, id_usuario) => {
  const bodyParams = {
    senhaAntiga,
    novaSenha,
  };
  const updateUserPassword = await api
    .put(`/users/${id_usuario}/changePassword`, bodyParams, config)
    .then((resp) => {
      alert("Senha alterada com sucesso");
      return resp;
    })
    .catch((err) => {
      alert("Ocorreu um erro ao alterar senha");

      return err;
    });
  return updateUserPassword;
};
