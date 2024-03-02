import { CardMedia, Button, Box, CircularProgress } from '@mui/material';
import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true); 

  const handleNext = () => {
    setIsLoading(true); 
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrev = () => {
    setIsLoading(true);
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  // Assume a 16:9 aspect ratio
  const aspectRatio = (9 / 16) * 100;

  return (
    <Box position="relative" pb={`${aspectRatio}%`} overflow="hidden" width="100%" height="100%">
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
      <Button onClick={handlePrev} sx={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', zIndex: 1 }}>&lt;</Button>
      <Button onClick={handleNext} sx={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', zIndex: 1 }}>&gt;</Button>
    </Box>
  );
};

export default ImageCarousel;
