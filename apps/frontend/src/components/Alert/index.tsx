'use client';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Alert = () => (
  <ToastContainer
    position="bottom-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
);

export default Alert;
