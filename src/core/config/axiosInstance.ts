import axios from 'axios';
import { AxiosInterceptorRejected } from 'node_modules/axios/index.cjs';

const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_INCOMES_SERVICE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosInterceptorRejected) => {
    console.log(error);
  },
);

export default axiosInstance;
