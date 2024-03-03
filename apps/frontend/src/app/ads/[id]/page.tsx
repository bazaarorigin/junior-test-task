'use client';

import React from 'react';
import { Box, CircularProgress } from '@mui/material';

import styles from './index.module.scss';
import AdsService from '../../../services/AdsService';
import AdDetails from '../../../components/AdDetails';
import useFetch from '../../../hooks/useFetch';

interface AdsItemPageProps {
  params: {
    id: string;
  };
}

const AdsItemPage = ({ params: { id } }: AdsItemPageProps) => {
  const { data: adsItem, loading } = useFetch(AdsService.getAdsItem, { id });

  if (loading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </Box>
    );
  }

  return (
    <main className={styles.main}>
      {adsItem && (
        <AdDetails
          id={id}
          title={adsItem.title}
          images={adsItem.images}
          price={adsItem.price}
          city_name={adsItem.city_name}
          description={adsItem.description}
          district_name={adsItem.district_name}
        />
      )}
    </main>
  );
};

export default AdsItemPage;
