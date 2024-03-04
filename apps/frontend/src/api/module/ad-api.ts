import { AxiosInstance, AxiosResponse } from 'axios';
import { AdDto } from '../../types/api/response/AdDto';

// TODO make the container with backend visible for the container with Next.js (I wanted to do that request on server-side, but it gives me connection refused)
export default (init: AxiosInstance) => async (id: number) => init.get<never, AxiosResponse<AdDto>>(`/api/ads/${id}`);
