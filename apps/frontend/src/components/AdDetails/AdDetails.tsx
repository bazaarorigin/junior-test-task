'use client';

import React, { FC, useEffect, useMemo, useState } from 'react';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import styles from './AdDetails.module.scss';
import BaseInfo from '../../atom/BaseInfo/BaseInfo';
import client from '../../api';
import { AdDto } from '../../types/api/response/AdDto';
import LoadingLayout from '../../containers/LoadingLayout/LoadingLayout';
import Carousel from '../../atom/Carousel/Carousel';

interface Props {
  id: number;
}

const AdDetails: FC<Props> = ({ id }) => {
  const router = useRouter();

  const [adInfo, setAdInfo] = useState<AdDto | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAdInfo = async () => {
      const { data } = await client.getAd(+id);

      // API sends 200 status code even if there is a problem with ID
      if (!data.id) {
        router.replace('/ads');
      }

      setAdInfo(data);
      setIsLoading(false);
    };

    setIsLoading(true);
    fetchAdInfo();
  }, []);

  const imgSrc = useMemo(() => adInfo?.images.map(img => img.image) ?? [], [JSON.stringify(adInfo)]);

  return (
    <LoadingLayout isLoading={isLoading}>
      <Box className={styles.container}>
        <Carousel className={styles.carousel} src={imgSrc} />
        <BaseInfo info={{
          id: adInfo?.id ?? 0,
          title: adInfo?.title ?? '',
          city_name: adInfo?.city_name ?? '',
          price: adInfo?.price ?? '',
          district_name: adInfo?.district_name,
          description: adInfo?.description
        }} />
      </Box>
    </LoadingLayout>
  );
};

export default AdDetails;
