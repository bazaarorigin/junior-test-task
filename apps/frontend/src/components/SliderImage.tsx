import { CardMedia, Button, Box, CircularProgress } from '@mui/material';
import React, { useState, FC } from 'react';
import {ImagesObjType} from "../types/mainTypes";

const ratio = (9 / 16) * 100;

const SliderImage: FC = ({ images }: {images: ImagesObjType[]}) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleNext = () => {
    setIsLoading(true);
    setCurrentImage((prevImage: number) => (prevImage + 1) % images.length);
  };

  const handlePrev = () => {
    setIsLoading(true);
    setCurrentImage((prevImage: number) => (prevImage - 1 + images.length) % images.length);
  };


  return (
    <Box position="relative" pb={`${ratio}%`} overflow="hidden" width="100%" height="100%">
      {isLoading && (
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="background.paper"
        >
          <CircularProgress />
        </Box>
      )}
      <CardMedia
        component="img"
        image={images[currentImage].image}
        alt="Ad image"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
      />
      <Button sx={{position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', zIndex: 1}}
              onClick={handlePrev}>Prev</Button>
      <Button sx={{position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', zIndex: 1}}
              onClick={handleNext}>Next</Button>
    </Box>
  );
};

export default SliderImage;
