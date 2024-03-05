import {Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button} from '@mui/material';
import React, {useState, FC} from 'react';
import {EventType, FiltersType} from "../types/mainTypes";

type FiltersDialogPropsType = {
  open: boolean,
  onClose: () => void,
  onApply: (data: FiltersType) => void
}

const FiltersDialog: FC = ({open, onClose, onApply}: FiltersDialogPropsType) => {

  const [filters, setFilters] = useState<FiltersType>({});

  const handleChange = (e: EventType) => {
    // we can get the same logic  with (usePathname, useRouter, useSearchParams)
    
    setFilters({...filters, [e.target.name]: e.target.value});
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
          id="search"
          label="Search ads"
          type="string"
          fullWidth
          variant="outlined"
          name="search"
          onChange={handleChange}
        />
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
