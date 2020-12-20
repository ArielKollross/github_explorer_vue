import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'http://api.github.com',
});

export default axiosApi;
