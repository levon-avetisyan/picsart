import axios from 'axios';
import { BASE_URL } from '../constants';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: process.env.REACT_APP_PEXELS_API_KEY,
  },
  timeout: 5000,
});

export default api;
