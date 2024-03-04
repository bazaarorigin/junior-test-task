'use client';

import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';

const NotFound = () => (
    <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
      <Image src="https://learn.getgrav.org/user/pages/11.troubleshooting/01.page-not-found/error-404.png" alt="NOT FOUND" width={566} height={330} />
    </Box>
  );

export default NotFound;
