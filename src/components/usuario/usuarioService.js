import API from '../../api';

const get = () => {
  return API.get('/users');
};

const getById = id => {
  return API.get(`users/${id}`);
};

export const usuarioService = {
  get: get,
  getById: getById
};
