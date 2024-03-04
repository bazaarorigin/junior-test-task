'use client';

import React, { FC, useMemo } from 'react';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import styles from './BaseInfo.module.scss';
import classJoiner from '../../utils/classJoiner';
import useLike from '../../hooks/useLike';

interface Props {
  info: {
    id: number;
    title: string;
    city_name: string;
    price: string | number;
    district_name?: string;
    description?: string;
  };
  type?: 'full' | 'card';
}

const BaseInfo: FC<Props> = ({ info, type = 'full' }) => {
  const { id, title, description, district_name, city_name, price } = info;

  const { isLiked, onLike } = useLike(id);

  const address = useMemo(() => district_name ? `${city_name}, ${district_name}` : city_name, [city_name, district_name]);

  return (
    <div className={classJoiner(styles.container, styles[type])}>
      <div className={styles.info}>
        <p>{title}</p>
        {
          isLiked ? <ThumbUpIcon onClick={onLike} /> : <ThumbUpOffAltIcon onClick={onLike} />
        }
      </div>
      <div className={styles.info}>
        <p>{address}</p>
        <p>{price}</p>
      </div>
      {description && <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />}
    </div>
  );
};

export default BaseInfo;
