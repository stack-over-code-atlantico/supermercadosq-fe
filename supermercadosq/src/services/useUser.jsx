import { api } from '../utils/api';


export const dataUser = async (id_usuario) => {
  const user = await api.get(`/users/${id_usuario}`);
  return user;
}

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
      return response
    })
    .catch((error) => {
      alert("Usuário não cadastrado");
      console.log(error.message);
      return error
    });
};
