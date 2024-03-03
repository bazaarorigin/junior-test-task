import React, { useState } from 'react';
import { Button, Dialog, DialogContent, TextField, Typography } from '@mui/material';

interface AdsFiltersProps {
  minPrice: string;
  maxPrice: string;
  city: string;
  district: string;
  contains: string;
  setMinPrice: (value: string) => void;
  setMaxPrice: (value: string) => void;
  setCity: (value: string) => void;
  setDistrict: (value: string) => void;
  setContains: (value: string) => void;
  applyFilters: () => void;
}

const AdsFilters: React.FC<AdsFiltersProps> = (props: AdsFiltersProps) => {
  const {
    minPrice,
    maxPrice,
    city,
    district,
    contains,
    setMinPrice,
    setMaxPrice,
    setCity,
    setDistrict,
    setContains,
    applyFilters
  } = props;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleApplyFilters = () => {
    applyFilters()
    handleClose();
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Filters
      </Button>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogContent>
          <Typography variant="h6" gutterBottom>
            Ads Filters
          </Typography>

          <TextField
            label="Min Price"
            type="number"
            fullWidth
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            margin="normal"
          />

          <TextField
            label="Max Price"
            type="number"
            fullWidth
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            margin="normal"
          />

          <TextField
            label="City"
            fullWidth
            value={city}
            onChange={(e) => setCity(e.target.value)}
            margin="normal"
          />

          <TextField
            label="District"
            fullWidth
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            margin="normal"
          />

          <TextField
            label="Contains (Search)"
            fullWidth
            value={contains}
            onChange={(e) => setContains(e.target.value)}
            margin="normal"
          />
        </DialogContent>

        <Button onClick={handleApplyFilters} color="primary">
          Apply Filters
        </Button>
      </Dialog>
    </>
  );
};

export default AdsFilters;
