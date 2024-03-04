import axios from 'axios';
import { Bounce, toast } from 'react-toastify';

const mainClient = axios.create({
  baseURL: ''
});

mainClient.interceptors.response.use((response) => response, (error) => {
  toast(error?.response.data.message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    type: 'error',
    transition: Bounce
  });
});

export default mainClient;
