
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fetchAds = async (setAds, setLoading, filters) => {
    setLoading(true);
      try {
        const response = await axios.get('http://localhost:8000/api/ads', { params: filters });
        setAds(response.data.results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        if (error.response) {
          if (error.response.status === 500) {
            toast.error("Request failed with status code 500");
          } else {
            toast.error(`Request failed with status code ${error.response.status}`);
          }
        }
  }
}
const fetchAdDetails = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/ads/${id}`);
      return response.data;
    } catch (error) {
      toast.error("Request failed with status code 500");
      throw error
    }
  };

export  {fetchAds, fetchAdDetails}