import React, {useState, useEffect, FC} from 'react';
import {Box, Typography, CircularProgress, Button} from '@mui/material';
import {ToastContainer} from 'react-toastify';
import AdCard from './AdCard';
import {fetchAds} from '../utils/api';
import FiltersDialog from '../utils/FiltersDialog';
import {AdsType, FiltersType} from '../types/mainTypes';


import 'react-toastify/dist/ReactToastify.css';

const AdsList: FC = () => {

  const [loading, setLoading] = useState(false);
  const [ads, setAds] = useState<AdsType[]>([]);
  const [filtersOpen, setFiltersOpen] = useState<boolean>(false);
  const [filters, setFilters] = useState<FiltersType>({});

  useEffect(() => {
    fetchAds(setAds, setLoading, filters);

  }, [filters]);

  const toggleFiltersPopup = () => {
    setFiltersOpen(!filtersOpen);
  };

  const applyFilters = (newFilters: FiltersType) => {
    setFilters(newFilters);
  };

  return (
    <>
      <ToastContainer/>
      <Box sx={{display: 'flex', justifyContent: 'center', mt: 2, mb: 2}}>
        <Typography variant="h1" sx={{fontWeight: 'bold', mr: 2}}>
          List of ads
        </Typography>
        <Button onClick={toggleFiltersPopup} sx={{ml: 2}}>Filters</Button>
      </Box>
      {loading && (
        <Box minHeight="100vh" display="flex" justifyContent="center" alignItems="center">
          <CircularProgress/>
        </Box>
      )}
      {!loading && (

        <Box sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }} spacing={2.5}>
          <Box sx={{
            maxWidth: '1200px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }} spacing={2.5}>
            {ads.map((ad: AdsType) => (
              <Box key={ad.id}>
                <AdCard ad={ad}/>
              </Box>
            ))}
          </Box>
        </Box>
      )}
      <FiltersDialog open={filtersOpen} onClose={() => setFiltersOpen(false)} onApply={applyFilters}/>
    </>

  );
};

export default AdsList;
