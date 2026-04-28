import api from './api';

export const authorService = {
  getAuthors: async (page = 0, size = 10) => {
    const response = await api.get('/authors', { params: { page, size } });
    return response.data;
  },
  
  createAuthor: async (data) => {
    const response = await api.post('/authors', data);
    return response.data;
  },
  
  updateAuthor: async (id, data) => {
    const response = await api.put(`/authors/${id}`, data);
    return response.data;
  },
  
  deleteAuthor: async (id) => {
    const response = await api.delete(`/authors/${id}`);
    return response.data;
  }
};
