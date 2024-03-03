'use client';

import React from 'react';
import { Box, Grid, Stack } from '@mui/material';

import AdsService from '../../services/AdsService';
import { GetAdsListParams } from '../../types';
import AdsItem from '../AdsItem';
import AdsPreLoad from '../AdsPreLoad';
import Filter from '../Filter';
import useFetch from '../../hooks/useFetch';
import useDebounceValue from '../../hooks/useDebounce';

const defaultParams = {
  minPrice: undefined,
  maxPrice: undefined,
  search: undefined,
  city: undefined,
  district: undefined,
};

const AdsList: React.FC = () => {
  const [params, setParams] = useDebounceValue<GetAdsListParams>(
    defaultParams,
    1000
  );
  const { data, loading } = useFetch(AdsService.getAdsList, params);

  return (
    <>
      <Box p={2}>
        <Stack
          alignItems="center"
          justifyContent="center"
          gap="20px"
          direction="row"
        >
          <h1>List of ads</h1>
          <Filter setParams={setParams} params={params} />
        </Stack>
      </Box>
      <Grid
        container
        columns={4}
        gap="20px"
        justifyContent="center"
        alignItems="flex-start"
      >
        {loading && <AdsPreLoad />}
        {data &&
          data.results.map((a) => (
            <AdsItem
              key={a.id}
              id={a.id}
              images={a.images}
              title={a.title}
              city_name={a.city_name}
              description={a.description}
              price={a.price}
            />
          ))}
      </Grid>
    </>
  );
};

export default AdsList;
