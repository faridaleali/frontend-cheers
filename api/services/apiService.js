import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://cheers.noproblem.com.ar',
});

export default apiClient;
