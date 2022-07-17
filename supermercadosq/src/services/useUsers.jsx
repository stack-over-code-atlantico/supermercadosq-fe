import { api } from "../utils/api";

export const getUserById = async (id) => {
  const response = api.get(`/users/${id}`);
  return response;
};
