import React from 'react';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import styles from './index.module.scss';
import { AdsData } from '../../types';
import AdsItemLike from '../AdsItemLike';

type AdDetailsProps = Pick<
  AdsData,
  | 'id'
  | 'images'
  | 'title'
  | 'city_name'
  | 'price'
  | 'district_name'
  | 'description'
>;

const AdDetails: React.FC<AdDetailsProps> = ({
  id,
  images,
  title,
  city_name,
  district_name,
  price,
  description,
}) => (
  <article className={styles.adsItem}>
    <ul className={styles.carousel}>
      {images.map((i) => (
        <li key={i.image}>
          <Image
            src={`${i.image}`}
            alt={title}
            loading="lazy"
            width={345}
            height={140}
            style={{ objectFit: 'cover' }}
          />
        </li>
      ))}
    </ul>
    <div>
      <Stack
        direction="row"
        gap="20px"
        justifyContent="space-between"
        sx={{ marginBottom: '10px' }}
      >
        <h3>{title}</h3>
        <AdsItemLike id={id} />
      </Stack>
      <Stack
        direction="row"
        gap="20px"
        justifyContent="space-between"
        sx={{ marginBottom: '40px' }}
      >
        <h4>
          {city_name} {district_name}
        </h4>
        <h5>{price}</h5>
      </Stack>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </div>
  </article>
);

export default AdDetails;
