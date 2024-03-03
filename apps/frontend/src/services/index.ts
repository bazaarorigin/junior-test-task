import axios, { InternalAxiosRequestConfig } from 'axios';

const $api = axios.create();

$api.interceptors.request.use(
  async (req: InternalAxiosRequestConfig) => req,

  (error) => Promise.reject(error)
);

export default $api;
