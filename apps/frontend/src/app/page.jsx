'use client'

import React from 'react';
import { Box } from '@mui/material';
import styles from './index.module.scss';
import  AdsList  from '../components/AdsList';

const Index = () => ( 
  <div className={styles.container}>
    <Box alignContent="center">
      <AdsList/>
    </Box>
  </div>
  );


export default Index;
