import React, { FC, PropsWithChildren } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { PropsWithClassName } from '../../types/utils/PropsWithClassName';

interface Props {
  isLoading: boolean;
  safeComponent?: boolean;
}

const LoadingLayout: FC<PropsWithClassName<PropsWithChildren<Props>>> = ({
                                                                           children,
                                                                           className,
                                                                           isLoading,
                                                                           safeComponent = false
                                                                         }) => {
  if (isLoading) {
    return (
      <Box className={className} display="flex" justifyContent="center" alignItems="center" height="100%" width="100%">
        <CircularProgress />
        {safeComponent && <Box width={0} height={0} visibility="hidden">{children}</Box>}
      </Box>
    );
  }

  return children;
};

export default LoadingLayout;
