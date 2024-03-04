'use client';

import React, { FC, useCallback, useState } from 'react';
import { Box } from '@mui/material';
import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone';
import KeyboardDoubleArrowLeftTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowLeftTwoTone';
import classJoiner from '../../utils/classJoiner';
import { PropsWithClassName } from '../../types/utils/PropsWithClassName';
import HiddenImg from "../HiddenImg/HiddenImg";
import styles from './Carousel.module.scss';

interface Props {
  src: string[];
}

const Carousel: FC<PropsWithClassName<Props>> = ({ className, src }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = useCallback(() => {
    if (currentImg < src.length - 1) {
      setCurrentImg(currentImg + 1);
    } else {
      setCurrentImg(0);
    }
  }, [src.length, currentImg]);

  const prevImg = useCallback(() => {
    if (currentImg > 0) {
      setCurrentImg(currentImg - 1);
    } else {
      setCurrentImg(src.length - 1);
    }
  }, [src.length, currentImg]);

  return (
    <Box className={classJoiner(styles.container, className)}>
      <KeyboardDoubleArrowLeftTwoToneIcon onClick={prevImg} className={styles.button} />
      <HiddenImg src={src[currentImg]} alt={src[currentImg]} />
      <KeyboardDoubleArrowRightTwoToneIcon onClick={nextImg}
                                           className={styles.button} />
    </Box>
  );
};

export default Carousel;
