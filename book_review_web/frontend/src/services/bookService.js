import api from './api';

export const bookService = {
  getBooks: async (page = 0, size = 10) => {
    const response = await api.get('/books', { params: { page, size } });
    return response.data;
  },
  
  createBook: async (data) => {
    const response = await api.post('/books', data);
    return response.data;
  },
  
  updateBook: async (id, data) => {
    const response = await api.put(`/books/${id}`, data);
    return response.data;
  },
  
  deleteBook: async (id) => {
    const response = await api.delete(`/books/${id}`);
    return response.data;
  }
};
