import { useEffect, useMemo, useState } from 'react';
import client from '../api';
import { AdDto } from '../types/api/response/AdDto';

const useCities = () => {
  const [ads, setAds] = useState<AdDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // There is an error in the API -- one of the entities doesn't have city_name
  // I would recommend to create teo more endpoints for the list of cities an the list of districts
  const cities= useMemo(() => ads.map((ad) => ad.city_name).reduce((acc: string[], city) => !acc.includes(city) && !!city ? [
    ...acc,
    city
  ] : acc, []), [ads]);

  const districts = useMemo(() => ads.map((ad) => ad.district_name).reduce((acc: string[], district) => !acc.includes(district) && !!district ? [
    ...acc,
    district
  ] : acc, []), [ads]);

  const maxPrice = useMemo(() => ads.reduce((acc, ad) => acc < ad.price ? ad.price : acc, 0), [JSON.stringify(ads)]);

  useEffect(() => {
    const fetchAds = async () => {
      const { data } = await client.getAds({});
      setAds(data.results);
      setIsLoading(false);
    };

    fetchAds();
  }, []);

  return {
    cities,
    districts,
    maxPrice,
    isLoading
  };
};

export default useCities;
