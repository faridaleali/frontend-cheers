import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://backend-cheers.onrender.com/api',
});

export default apiClient;
