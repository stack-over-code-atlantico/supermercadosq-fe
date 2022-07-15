import { parseCookies } from "nookies";
import { api } from "../utils/api";

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
  const bodyParams = {
    nome: data.nome,
    cpf_cnpj: data.cpf_cnpj,
    email: data.email,
    senha: data.senha,
    nivel: data.nivel,
    nome_social: data.nome_social,
    telefone: data.telefone,
    restricao_alimenticia: data.restricao_alimenticia,
    cep: data.cep,
    logradouro: data.logradouro,
    numero: data.numero,
    bairro: data.bairro,
    cidade: data.cidade,
    estado: data.estado,
  };

  const signUpPost = await api
    .post("/users", bodyParams)
    .then((response) => {
      alert("Usuário Cadastrado");
      return response;
    })
    .catch((error) => {
      alert("Usuário não cadastrado");
      console.log(error.message);
      return error;
    });
};

export const useEditUser = async (
  cpf_cnpj,
  nome,
  nomeSocial,
  email,
  telefone,
  retricaoAlimentar,
  cep,
  logradouro,
  numeroEndereco,
  bairro,
  cidade,
  estado
) => {
  const bodyParams = {
    nome,
    nome_social: nomeSocial,
    email,
    telefone,
    restricao_alimenticia: retricaoAlimentar,
    cep,
    logradouro,
    numero:numeroEndereco,
    bairro,
    cidade,
    estado
  };
  console.log(bodyParams);
  const updateUser = await api
    .put(`/users/${cpf_cnpj}`, bodyParams, config)
    .then((resp) => {
      alert('Usuário atualizado com sucesso')
      return resp;
    })
    .catch((err) => {
      alert('Ocorreu um erro')
      console.log(err);
      return err;
    });
  return updateUser;
};

export const editUserPassword = async (
  senhaAntiga, novaSenha, id_usuario
) => {
  const bodyParams = {
    senhaAntiga,novaSenha
  };
  const updateUserPassword = await api
    .put(`/users/${id_usuario}/changePassword`, bodyParams, config)
    .then((resp) => {
      alert('Senha alterada com sucesso')
      return resp;
    })
    .catch((err) => {
      alert('Ocorreu um erro')
      console.log(err);
      return err;
    });
  return updateUserPassword;
};
