import React, { useState, useEffect } from 'react';
import { Box,Grid, Typography, CircularProgress, Button ,Container} from '@mui/material';
import { ToastContainer } from 'react-toastify';
import  FiltersDialog  from '../utlis/FiltersDialog';
import AdCard from './AdCard';
import {fetchAds} from '../utlis/api'
import 'react-toastify/dist/ReactToastify.css';

const AdsList = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({});
  useEffect(() => {
    fetchAds(setAds, setLoading, filters);
  }, [filters]);

  const handleToggleFilters = () => {
    setFiltersOpen(!filtersOpen);
  };

  const applyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  return (
  <>
    <ToastContainer/>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 4, mb: 2 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mr: 2 }}>
        List of ads
      </Typography>
      <Button variant="outlined" onClick={handleToggleFilters} sx={{ ml: 2 }}>Filters</Button>
    </Box>
    {loading && (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    )}
    {!loading && (
      <Container>
        <Grid container spacing={2} justifyContent="center">
          {ads.map((ad) => (
            <AdCard ad={ad} key={ad.id} />
          ))}
        </Grid>
      </Container>
    )}
    <FiltersDialog open={filtersOpen} onClose={() => setFiltersOpen(false)} onApply={applyFilters} />
  </>
  
  );
};

export default AdsList;