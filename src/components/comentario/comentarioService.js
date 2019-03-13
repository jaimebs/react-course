import API from '../../api';

const get = () => {
  return API.get('/comments');
};

export const comentarioService = {
  get: get
};
