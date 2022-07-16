import { parseCookies } from "nookies";
import { api } from "../utils/api";
import Cookies from "js-cookie"

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
    console.log(values);
  }
  const users = await api.post("/users", data, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  return users;
};

// export const useCreateUser = async (data) => {
//   const bodyParams = {
//     nome: data.nome,
//     cpf_cnpj: data.cpf_cnpj,
//     email: data.email,
//     senha: data.senha,
//     nivel: data.nivel,
//     nome_social: data.nome_social,
//     telefone: data.telefone,
//     restricao_alimenticia: data.restricao_alimenticia,
//     cep: data.cep,
//     logradouro: data.logradouro,
//     numero: data.numero,
//     bairro: data.bairro,
//     cidade: data.cidade,
//     estado: data.estado,
//   };

//   const signUpPost = await api
//     .post("/users", bodyParams)
//     .then((response) => {
//       alert("Usuário Cadastrado");
//       return response;
//     })
//     .catch((error) => {
//       alert("Usuário não cadastrado");
//       console.log(error.message);
//       return error;
//     });
// };

export const useEditUser = async ( cpf_cnpj, data) => {
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
      alert("Ocorreu um erro");
      console.log(err);
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
      alert("Ocorreu um erro");
      console.log(err);
      return err;
    });
  return updateUserPassword;
};
