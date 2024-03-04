import React, { FC, PropsWithChildren } from 'react';
import LoadingLayout from '../containers/LoadingLayout/LoadingLayout';

const Loading: FC<PropsWithChildren> = ({ children }) => (
  <LoadingLayout isLoading>{children}</LoadingLayout>
);

export default Loading;
