import axios, { AxiosError } from 'axios';
import { AdsRequestData } from '../components/AdsList/types';
import errorService from './error.service';

// eslint-disable-next-line consistent-return
const fetchAds = async (params?: AdsRequestData) => {
  try {
    const { data } = await axios.get('/api/ads', { params });
    return data;
  } catch (error: unknown) {
    errorService(error as AxiosError);
  }
};

// eslint-disable-next-line consistent-return
const fetchAdById = async (id: string) => {
  try {
    const { data } = await axios.get(`/api/ads/${id}`);
    return data;
  } catch (error: unknown) {
    errorService(error as AxiosError);
  }
};

const AdsService = {
  fetchAds,
  fetchAdById
};

export default AdsService;
