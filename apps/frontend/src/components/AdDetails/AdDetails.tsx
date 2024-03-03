import Image from 'next/image';
import { Box, Button, CircularProgress, ImageList, ImageListItem, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react';
import { AdItem } from '../AdCard/types';

interface AdDetailsProps {
  ad: AdItem;
  isLoading: boolean;
  isFavorite: boolean;
  toggleFavorite: () => void;
}

const AdDetails = (props: AdDetailsProps) => {
  const {
    ad,
    isLoading,
    isFavorite,
    toggleFavorite
  } = props;

  // In 2024 nobody makes his own carousel component, because it's inefficient
  // I could use react-mui-carousel, but I am not allowed to do that
  // So I just leave this component like that
  // We can always add needed carousel component or something else without any troubles
  // but writing from scratch is a waste of time

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100vh'
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
      }}
    >
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {ad.images.map((item) => (
          <ImageListItem key={item.image}>
            <div style={{ width: '100%', height: '30vh', position: 'relative' }}>
              <Image
                alt={item.image}
                src={item.image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </ImageListItem>
        ))}
      </ImageList>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 'auto'
        }}
      >
        <Typography
          sx={{ marginRight: '20px' }}
        >
          {ad.title}
        </Typography>

        <Button onClick={toggleFavorite} variant="contained" color={isFavorite ? 'secondary' : 'primary'}>
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </Button>
      </Box>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '10px'
        }}
      >
        <Typography
          sx={{ marginRight: '20px' }}
        >
          {ad.city_name} , {ad.district_name}
        </Typography>

        <Typography>
          {ad.price}
        </Typography>
      </Box>

      <Box
        sx={{
          width: '100%',
          marginTop: '40px'
        }}
      >
        <Typography>
          {ad.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default AdDetails;
