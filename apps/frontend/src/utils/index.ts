import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { TypedError } from '../types';

const unwrapError = (err: AxiosError<TypedError>) => {
  if (!err?.response) {
    return toast.error('Internal Server Error');
  }

  return toast.error(err.response.data.message);
};

export default unwrapError;
