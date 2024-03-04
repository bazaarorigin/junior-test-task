'use client';

import React, { FC, useEffect, useMemo, useState } from 'react';
import { Box } from '@mui/material';
import Link from 'next/link';
import client from '../../api';
import CardsLayout from '../../containers/CardsLayout/CardsLayout';
import AdsFiltersDialog from '../../dialogs/AdsFiltersDialog/AdsFiltersDialog';
import { AdsRequest } from '../../types/api/request/AdsRequest';
import LoadingLayout from '../../containers/LoadingLayout/LoadingLayout';
import { AdDto } from '../../types/api/response/AdDto';
import AdCard from '../AdCard/AdCard';
import styles from './AdList.module.scss';

const AdList: FC = () => {
  const [ads, setAds] = useState<AdDto[]>([]);
  const [params, setParams] = useState<AdsRequest>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAds = async () => {
      const { data } = await client.getAds(params);
      setAds(data.results);
      setIsLoading(false);
    };

    setIsLoading(true);
    fetchAds();
  }, [JSON.stringify(params)]);


  return (<Box className={styles.container}>
      <Box className={styles.header}>
        <h1>List of ads</h1>
        <AdsFiltersDialog params={params}
                          onSubmit={(newParams) => {
                            setParams(newParams);
                          }} />
      </Box>
      <LoadingLayout isLoading={isLoading}>
        <CardsLayout>
          {
            ads.map((ad) => (
              <Link href={`/ads/${ad.id}`} key={ad.id}>
                <AdCard ad={ad} />
              </Link>
            ))
          }
        </CardsLayout>
      </LoadingLayout>
    </Box>
  );
};

export default AdList;
