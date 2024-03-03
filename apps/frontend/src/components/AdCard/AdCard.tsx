import Link from 'next/link';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react';
import { AdItem } from './types';

interface AdCardProps {
  ad: AdItem;
  onToggleFavorite: (id: number) => void;
  isFavorite: boolean;
}

const AdCard = (props: AdCardProps) => {
  const { ad, onToggleFavorite, isFavorite } = props;
  const { id, title, images, price, city_name: cityName } = ad;

  const toggleFavoriteHandler = (event: React.MouseEvent<HTMLButtonElement>, cardId: number) => {
    event.preventDefault();
    onToggleFavorite(cardId);
  };

  return (
    <Link href={`/ads/${id}`} passHref>
      <Card
        sx={{
          width: '250px',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
          boxShadow: 1
        }}
      >
        <CardMedia
          title={title}
          sx={{
            width: '250px',
            height: '250px'
          }}
          image={images[0].thumbnail}
        />

        <CardContent
          sx={{
            padding: '0 5px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Typography noWrap sx={{ marginRight: '20px' }}>
              {title}
            </Typography>

            <Button onClick={event => toggleFavoriteHandler(event, ad.id)}>
              {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </Button>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Typography sx={{ marginRight: '20px' }}>{cityName}</Typography>
            <Typography>{price}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default AdCard;
