// pages/ads/[id].jsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { CircularProgress, Card, Typography, Box, Container } from '@mui/material';
import { toast,ToastContainer } from 'react-toastify';
import ImageCarousel from '../../shared/ImageCoursel'; 
import {LikeButton} from '../../shared/LikeButton'; 
import {fetchAdDetails} from '../../utlis/api'; 
import 'react-toastify/dist/ReactToastify.css';

const AdDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [ad, setAd] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetchAdDetails(id)
        .then((data) => {
          setAd(data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          toast.error("An error occurred while fetching ad details.");
        });
    }
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
    <ToastContainer/>
      <Container>
        <Card>
          <Box sx={{ position: 'relative', height: '30%', width: '100%' }}>
            <ImageCarousel images={ad.images} />
          </Box>
          <Box p={2} display="flex" flexDirection="column" gap="40px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h5" flexGrow={1} mr={2} noWrap>
                {ad.title}
              </Typography>
              <LikeButton key={ad.id} adId={ad.id} />
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body2" flexGrow={1} mr={2} noWrap>
              {ad.district_name !== null ? `${ad.city_name}, ${ad.district_name}` : ad.city_name}
              </Typography>
              <Typography variant="body2">
                {`Price: ${ad.price}$`}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" dangerouslySetInnerHTML={{ __html: ad.description }} />
          </Box>
        </Card>
      </Container>
    </>
  );
};

export default AdDetailsPage;
