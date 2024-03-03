'use client';

import React from 'react';
import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import Link from 'next/link';

import { AdsData } from '../../types';
import AdsItemLike from '../AdsItemLike';

type AdsItemProps = Pick<
  AdsData,
  'id' | 'images' | 'title' | 'city_name' | 'description' | 'price'
>;

const AdsItem: React.FC<AdsItemProps> = ({
  id,
  images,
  title,
  city_name,
  description,
  price,
}) => (
  <Link href={`/ads/${id}`}>
    <Card sx={{ width: 250 }}>
      {images.length && (
        <CardMedia
          sx={{ height: 140 }}
          image={images[0].thumbnail}
          title="green iguana"
        />
      )}
      <CardContent>
        <Stack direction="row" gap="20px" justifyContent="space-between">
          <h4 className="truncate-text">{title}</h4>
          <AdsItemLike id={id} />
        </Stack>
        <Stack direction="row" gap="20px" justifyContent="space-between">
          <h4 className="truncate-text">{city_name}</h4>
          <h5>{price}</h5>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  </Link>
);

export default AdsItem;
