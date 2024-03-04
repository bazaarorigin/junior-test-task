import { AxiosInstance, AxiosResponse } from 'axios';
import { AdsRequest } from '../../types/api/request/AdsRequest';
import { AdDto } from '../../types/api/response/AdDto';
import { PaginatedResponseDto } from '../../types/api/response/PaginatedResponseDto';

export default (init: AxiosInstance) => async (params: AdsRequest) => init.get<AdsRequest, AxiosResponse<PaginatedResponseDto<AdDto>>>('/api/ads', {
  params
});
