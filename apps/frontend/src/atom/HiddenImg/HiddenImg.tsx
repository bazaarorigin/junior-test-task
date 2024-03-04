'use client';

import React, { FC, useEffect, useRef, useState } from 'react';
import { CircularProgress } from '@mui/material';
import classJoiner from '../../utils/classJoiner';
import styles from './HiddenImg.module.scss';

const HiddenImg: FC<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>> = ({src, alt, className}) => {
  const [isLoading, setIsLoading] = useState(true);
  const img = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    setIsLoading(true);

    const interval = setInterval(() => {
      if (img.current?.complete) {
        setIsLoading(false);
        clearInterval(interval);
      }
    }, 300);
  }, [src]);


  return (
    <>
      {isLoading && <CircularProgress />}
      <img ref={img} alt={alt} className={classJoiner(isLoading ? styles.hiddenImg : '', className)}
      />
    </>
  );
};

export default HiddenImg;
