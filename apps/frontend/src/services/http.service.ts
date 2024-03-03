import axios from "axios";
import toastService from '../helpers/toast.service';

const http = axios.create();

// Here we can manage http for out application

http.interceptors.request.use(
  async (config) => config,
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  (res) => res,
  (error) => {
    const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedErrors) {
      toastService.error("Something went wrong. Try it later :)")
    }

    return Promise.reject(error);
  }
);

const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
  patch: http.patch,
};

export default httpService;
