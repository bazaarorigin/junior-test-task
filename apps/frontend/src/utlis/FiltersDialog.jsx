import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';
import React, { useState } from 'react';

const FiltersDialog = ({ open, onClose, onApply }) => {
  const [filters, setFilters] = useState({});

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleApply = () => {
    onApply(filters);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Filter Ads</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          id="minPrice"
          label="Min Price"
          type="number"
          fullWidth
          variant="outlined"
          name="minPrice"
          onChange={handleChange}
        />
         <TextField
          margin="dense"
          id="maxPrice"
          label="Max Price"
          type="number"
          fullWidth
          variant="outlined"
          name="maxPrice"
          onChange={handleChange}
        />
         <TextField
          margin="dense"
          id="search"
          label="Search ads by text in ads name or description"
          type="string"
          fullWidth
          variant="outlined"
          name="search"
          onChange={handleChange}
        />
          <TextField
          margin="dense"
          id="district"
          label="District filter"
          type="string"
          fullWidth
          variant="outlined"
          name="district"
          onChange={handleChange}
        />
          <TextField
          margin="dense"
          id="city"
          label="City filter"
          type="string"
          fullWidth
          variant="outlined"
          name="city"
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleApply}>Apply</Button>
      </DialogActions>
    </Dialog>
  );
};

export default FiltersDialog;