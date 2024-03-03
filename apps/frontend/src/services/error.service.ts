import { AxiosError } from 'axios';
import toastService from '../helpers/toast.service';

// Here we can manage how to handle different http errors

const handleServerError = (message: string) => {
  toastService.error(message);
};

const errorService = (error: AxiosError) => {
  const { response } = error as AxiosError<{message: string}>;

  if (response?.status === 500) {
    const { data } = response;
    handleServerError(
      data.message || 'Something went wrong. Try it later.'
    );
  }
};

export default errorService;
