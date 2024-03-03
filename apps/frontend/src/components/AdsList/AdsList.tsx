import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { AdItem } from '../AdCard/types';
import AdCard from '../AdCard/AdCard';
import AdsFilters from '../AdsFilters/AdsFilters';
import { AdsRequestData } from './types';
import localStorageService from '../../helpers/localStorage.service';

interface AdsListProps {
  adsData: AdItem[];
  fetchData: (params?: AdsRequestData) => void;
}

const AdsList = (props: AdsListProps) => {
  const { adsData, fetchData } = props;
  const [favorites, setFavorites] = useState<number[]>([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorageService.getFromLS('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (id: number) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter((favId) => favId !== id)
      : [...favorites, id];

    setFavorites(updatedFavorites);
    localStorageService.setToLS('favorites', JSON.stringify(updatedFavorites));
  };

  const applyFilters = async () => {
    const params = {
      minPrice,
      maxPrice,
      city,
      district,
      search
    };

    const formattedParams: Record<string, string> = {};

    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        formattedParams[key] = value;
      }
    });

    await fetchData(formattedParams);
  };

  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Typography sx={{ flexGrow: 1, marginRight: '20px' }} align="center">List of ads</Typography>

        <Box
          sx={{
            marginLeft: 'auto'
          }}
        >
          <AdsFilters
            minPrice={minPrice}
            maxPrice={maxPrice}
            city={city}
            district={district}
            contains={search}
            setCity={setCity}
            setContains={setSearch}
            setDistrict={setDistrict}
            setMaxPrice={setMaxPrice}
            setMinPrice={setMinPrice}
            applyFilters={applyFilters}
          />
        </Box>
      </Box>

      <Box
        sx={{
          margin: 'auto',
          width: '100%',
          maxWidth: '1060px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Grid
          container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            marginTop: '20px'
          }}
        >
          {adsData.map((ad) => (
            <Grid item key={ad.id}>
              <AdCard
                ad={ad}
                onToggleFavorite={toggleFavorite}
                isFavorite={favorites.includes(ad.id)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default AdsList;
