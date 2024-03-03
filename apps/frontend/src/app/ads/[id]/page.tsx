'use client';

import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import AdsService from '../../../services/ads.service';
import { AdItem } from '../../../components/AdCard/types';
import AdDetails from '../../../components/AdDetails/AdDetails';

const initialData = {
  'id': 294,
  'images': [
    {
      'id': 1068,
      'image': 'https://bazaarthaikand.s3.ap-southeast-1.amazonaws.com/announcement_images/photo_2024-01-19_16.26.47.jpeg',
      'thumbnail': 'https://bazaarthaikand.s3.ap-southeast-1.amazonaws.com/announcement_thumbnails/photo_2024-01-19_16.26.47.jpeg',
      'user': 204
    },
    {
      'id': 1069,
      'image': 'https://bazaarthaikand.s3.ap-southeast-1.amazonaws.com/announcement_images/photo_2024-01-19_16.26.44.jpeg',
      'thumbnail': 'https://bazaarthaikand.s3.ap-southeast-1.amazonaws.com/announcement_thumbnails/photo_2024-01-19_16.26.44.jpeg',
      'user': 204
    },
    {
      'id': 1070,
      'image': 'https://bazaarthaikand.s3.ap-southeast-1.amazonaws.com/announcement_images/photo_2024-01-19_16.26.50.jpeg',
      'thumbnail': 'https://bazaarthaikand.s3.ap-southeast-1.amazonaws.com/announcement_thumbnails/photo_2024-01-19_16.26.50.jpeg',
      'user': 204
    }
  ],
  'city_name': 'Пхукет',
  'district_name': 'Чалонг',
  'title': 'Mg Zs 2021-2023',
  'description': '<p>Mg Zs 2021-2023</p><p>Объем двигателя 1.5</p><p>Стоимость:</p><p>Сутки 1500-2000 бат</p><p>Месяц 35-40000 бат</p><p>Депозит 6000 бат или 200$</p><p><br></p><p><br></p>',
  'price': 1500,
  'created_at': '19.01.2024',
  'views': 16,
  'user': 204
};

const Page = () => {
  const url = usePathname();
  const parts = url.split('/');
  const id = parts[parts.length - 1];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [ad, _] = useState<AdItem>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // Server gives CORS, so I did this component blindly, just mocking needed

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      // GETS CORS ERROR
      const result = await AdsService.fetchAdById(id);
      if (result) {
        // setAd(result)
      }
      const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      setIsFavorite(storedFavorites.includes(ad.id));
      setIsLoading(false);
    };

    fetchData();

  }, [id, ad.id]);

  const toggleFavorite = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const updatedFavorites = storedFavorites.includes(ad.id)
      ? storedFavorites.filter((favId: number) => favId !== ad.id)
      : [...storedFavorites, ad.id];
    setIsFavorite(!isFavorite);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <Container maxWidth="lg" sx={{ height: '100vh' }}>
      <AdDetails
        ad={ad}
        isLoading={isLoading}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
    </Container>
  );
};

export default Page;
