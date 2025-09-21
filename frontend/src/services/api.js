import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const projectsAPI = {
  getProjects: () => api.get('/projects'),
};

export const contactAPI = {
  createContact: (contactData) => api.post('/contact', contactData),
};

export default api;