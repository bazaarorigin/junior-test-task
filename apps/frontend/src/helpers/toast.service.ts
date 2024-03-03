import { toast } from 'react-toastify';

// Here we can manage out toasts
// We can apply standard styles for it
// Or some behavior for all toast

const error = (message: string) => {
  toast.error(message, {
    position: "bottom-left",
    autoClose: 2000,
    theme: "light",
  });
}

const toastService = {
  error
}

export default toastService
