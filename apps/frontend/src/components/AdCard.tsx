import Link from 'next/link';
import React, {FC} from 'react';
import {Box, Grid, Card, CardMedia, CardContent, Typography} from '@mui/material';
import {LikeButton} from './LikeButton';
import {AdsType} from "../types/mainTypes";

type AdCardPropsType = {
  ad: AdsType
}

const AdCard: FC = ({ad}: AdCardPropsType) => (
  <Grid item xs={12} sm={6} md={3}>
    <Card sx={{maxWidth: '250px', height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer'}}>
      <Link href={`/ads/${ad.id}`} passHref>
        <CardMedia
          component="img"
          sx={{width: '250px', height: '140px'}}
          image={ad.images[0].thumbnail}
          alt="Ad image"
        />
      </Link>
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '20px'}}>
          <Link href={`/ads/${ad.id}`} passHref style={{textDecoration: 'none', color: 'black'}}>
            <Box style={{overflow: "hidden", textOverflow: "ellipsis", width: '11rem'}}>
              <Typography noWrap variant="h6" sx={{flexGrow: 1, mr: '20px'}}>
                {ad.title}
              </Typography>
            </Box>
          </Link>
          <LikeButton adId={ad.id}/>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Typography variant="body2" noWrap sx={{flexGrow: 1}}>
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
