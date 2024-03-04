'use client';

import React, { FC, PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';

const ToastHoc: FC<PropsWithChildren> = ({children}) => (
    <>
     <ToastContainer />
      {children}
    </>
  );

export default ToastHoc;
