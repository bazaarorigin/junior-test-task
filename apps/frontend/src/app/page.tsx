'use client';

import { ToastContainer } from 'react-toastify';
import React, { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import AdsService from '../services/ads.service';
import AdsList from '../components/AdsList/AdsList';
import { AdsRequestData } from '../components/AdsList/types';
import 'react-toastify/dist/ReactToastify.min.css';

const Index = () => {
  const [ads, setAds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAdsData = async (params?: AdsRequestData) => {
    const result = await AdsService.fetchAds(params);
    return result?.results;
  };

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      const result = await fetchAdsData();
      if (result) {
        setAds(result);
      }
      setIsLoading(false);
    };

    fetch();
  }, []);

  return (
    <>
      <Box>
        {
          isLoading
            ?
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh'
              }}
            >
              <CircularProgress />
            </Box>
            : <AdsList adsData={ads} fetchData={fetchAdsData} />
        }
      </Box>

      <ToastContainer
        position="bottom-left"
      />
    </>
  );
};

export default Index;
