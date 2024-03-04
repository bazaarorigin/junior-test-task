'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import BaseInfo from '../../atom/BaseInfo/BaseInfo';
import { AdDto } from '../../types/api/response/AdDto';
import styles from './AdCard.module.scss';

interface Props {
  ad: AdDto;
}

const AdCard: FC<Props> = ({ ad}) => (
    <div className={styles.container}>
      <Image src={ad.images[0]?.thumbnail ?? ''} alt="thumbnail" width={250} height={250} />
      <BaseInfo info={
        {
          id: ad.id,
          title: ad.title,
          price: ad.price,
          city_name: ad.city_name
        }
      } type="card" />
    </div>
  );

export default AdCard;
