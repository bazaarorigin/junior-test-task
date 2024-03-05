import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiltersType } from '../types/mainTypes';


export const fetchAds: (setAds: (data: Object) => void , setLoading: (data: boolean) => void, filters: FiltersType) =>
  Promise<void> = async (setAds, setLoading, filters) => {
  setLoading(true);
  try {
    const response = await axios.get('http://localhost:8000/api/ads', { params: filters });
    setAds(response.data.results);
    setLoading(false);
  } catch (error: unknown) {
    setLoading(false);
    if (error.response) {
      toast.error(error.response.statusText + ' ' + error.response.status);
    }
  }
}
export const fetchAdDetails = async (id: number) => {
  try {
    const response = await axios.get(`http://localhost:8000/api/ads/${id}`);
    return response.data;
  } catch (error) {
    toast.error("Request failed with status code 500");
    throw error
  }
};

