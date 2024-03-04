'use client';

import React, { FC, useCallback, useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  Select,
  Slider,
  TextField,
  Typography
} from '@mui/material';
import { AdsRequest } from '../../types/api/request/AdsRequest';
import useCities from '../../hooks/useCities';
import LoadingLayout from '../../containers/LoadingLayout/LoadingLayout';

interface Props {
  params: AdsRequest;
  onSubmit?: (params: AdsRequest) => void | Promise<void>;
}

const AdsFiltersDialog: FC<Props> = ({ params, onSubmit }) => {
  const { cities, districts, isLoading, maxPrice } = useCities();

  const [prices, setPrices] = React.useState<number[]>([params.minPrice ?? 0, params?.maxPrice ?? maxPrice]);
  const [search, setSearch] = useState<string | undefined>();
  const [city, setCity] = useState<string | undefined>();
  const [district, setDistrict] = useState<string | undefined>();

  const [open, setOpen] = useState(false);

  const handleChangePrice = useCallback((event: Event, newValue: number | number[]) => {
    setPrices(newValue as number[]);
  }, []);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const submit = useCallback(async () => {
    if (onSubmit) {
      await onSubmit({
        minPrice: prices[0],
        maxPrice: prices[1],
        search,
        city,
        district
      });
    }
  }, [JSON.stringify(prices), onSubmit, search, city, district, prices]);

  useEffect(() => {
    if (!params?.maxPrice) {
      setPrices([
        prices[0],
        maxPrice
      ]);
    }
  }, [maxPrice]);

  return (
    <>
      <Button onClick={handleOpen}>Open filters</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            await submit();
            handleClose();
          },
          sx: {
            width: 520,
            p: 2
          }
        }}
      >
        <DialogTitle fontSize={24}>Filters</DialogTitle>
        <DialogContent>
          <DialogContentText fontSize={18}>Here you can fill the filters</DialogContentText>
          <LoadingLayout isLoading={isLoading}>
            <Typography sx={{
              mt: 2
            }}>
              Min/max price
            </Typography>
            <Slider
              name="prices"
              disableSwap
              value={prices}
              onChange={handleChangePrice}
              valueLabelDisplay="auto"
              min={0}
              max={maxPrice}
              step={100000}
              sx={{
                width: 425,
                ml: 1
              }}
            />
            <Typography>City</Typography>
            <Select fullWidth value={city} onChange={(event) => {
              setCity(event.target.value as string);
            }}>
              {
                cities.map((el) => (
                  <MenuItem key={el} value={el}>{el}</MenuItem>
                ))
              }
            </Select>
            <Typography sx={{
              mt: 2
            }}>District</Typography>
            <Select variant="outlined" fullWidth value={district} onChange={(event) => {
              setDistrict(event.target.value as string);
            }}>
              {
                districts.map((el) => (
                  <MenuItem key={el} value={el}>{el}</MenuItem>
                ))
              }
            </Select>
            <Typography sx={{
              mt: 2
            }}>Search</Typography>
            <TextField
              type="text"
              fullWidth
              variant="standard"
              value={search}
              placeholder="Contains..."
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </LoadingLayout>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Send</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AdsFiltersDialog;
