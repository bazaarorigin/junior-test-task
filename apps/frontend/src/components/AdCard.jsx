import Link from 'next/link';
import React from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { LikeButton } from '../shared/LikeButton';

const AdCard = ({ ad }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Card sx={{ width: 250, cursor: 'pointer', display: 'flex', flexDirection: 'column', m: 'auto', height: '100%' }}>
      <Link href={`/ads/${ad.id}`} passHref>
        <CardMedia
          component="img"
          sx={{ width: '250px', height: 140 }}
          image={ad.images[0].thumbnail}
          alt="Ad image"
        />
      </Link>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '20px' }}>
          <Link href={`/ads/${ad.id}`} passHref>
            <Typography variant="h6" noWrap sx={{ flexGrow: 1, mr: '20px' }}>
              {ad.title}
            </Typography>
          </Link>
          <LikeButton adId={ad.id} />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" noWrap sx={{ flexGrow: 1, mr: '20px' }}>
            {ad.city_name}
          </Typography>
          <Typography variant="body2">
            {`Price: ${ad.price}$`}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  </Grid>
);

export default AdCard;
