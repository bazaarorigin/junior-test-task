'use client';

import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
} from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterItem from './FilterItem';

import { GetAdsListParams } from '../../types';
import { DebouncedState } from '../../hooks/useDebounceCallback';

interface FilterProps {
  params: GetAdsListParams;
  setParams: DebouncedState<(value: GetAdsListParams) => void>;
}

interface FilterErrors {
  minPrice?: string;
  maxPrice?: string;
  search?: string;
  city?: string;
  district?: string;
}

const regExRules = {
  minPrice: /^\d*$/,
  maxPrice: /^\d*$/,
  search: /^[a-zA-Zа-яА-ЯёЁ\- ]*$/,
  city: /^[a-zA-Zа-яА-ЯёЁ\- ]*$/,
  district: /^[a-zA-Zа-яА-ЯёЁ\- ]*$/,
};

const ErrorHelperText = {
  minPrice: 'Enter numbers only',
  maxPrice: 'Enter numbers only',
  search: 'Enter letters only',
  city: 'Enter letters only',
  district: 'Enter letters only',
};

const Filter: React.FC<FilterProps> = ({ params, setParams }) => {
  const [error, setError] = useState<FilterErrors>({});
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeFilter = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { target } = e;
    const { name, value } = target;
    const nameFilter = name as keyof GetAdsListParams;

    const newError = { ...error };
    if (!regExRules[nameFilter].test(value)) {
      newError[nameFilter] = ErrorHelperText[nameFilter];
      setError(newError);
      return;
    }

    delete newError[nameFilter];
    setError(newError);

    setParams({
      ...params,
      [nameFilter]: value.length !== 0 ? value : undefined,
    });
  };

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<FilterAltIcon />}
        onClick={handleOpen}
      >
        Set filters
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Set filters</DialogTitle>
        <DialogContent>
          <Stack gap="20px" p={2}>
            <FilterItem
              changeFilter={changeFilter}
              error={error.minPrice}
              name="minPrice"
              label="Min Price"
            />
            <FilterItem
              changeFilter={changeFilter}
              error={error.maxPrice}
              name="maxPrice"
              label="Max Price"
            />
            <FilterItem
              changeFilter={changeFilter}
              error={error.search}
              name="search"
              label="Contains"
            />
            <FilterItem
              changeFilter={changeFilter}
              error={error.city}
              name="city"
              label="City"
            />
            <FilterItem
              changeFilter={changeFilter}
              error={error.district}
              name="district"
              label="District"
            />
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Filter;
