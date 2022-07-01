import { api } from '../utils/api';

export const getAllComments = async () => {
  const comments = await api.get('/comments');
  return comments;
};
