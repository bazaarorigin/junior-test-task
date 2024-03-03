'use client';

import { ToastContainer } from 'react-toastify';
import React, { useEffect, useState } from 'react';
import { Box, Button, CircularProgress } from '@mui/material';
import AdsService from '../../services/ads.service';
import AdsList from '../../components/AdsList/AdsList';

import 'react-toastify/dist/ReactToastify.min.css';

const Page = () => {
  const [ads, setAds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await AdsService.fetchAds();
      if (result) {
        setAds(result.results);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await AdsService.fetchAds();
    return result;
  };

  return (
    <>
      <Box>
        <Button onClick={fetchData}>click</Button>

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
            : <AdsList adsData={ads} />
        }
      </Box>

      <ToastContainer
        position="bottom-left"
      />

    </>
  );
};

export default Page;
