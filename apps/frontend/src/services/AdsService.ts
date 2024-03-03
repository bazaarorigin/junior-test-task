import $api from './index';
import { AdsData, GetAdsListParams, PagebleResponse } from '../types';

export default class AdsService {
  static async getAdsItem(params?: { id: string }) {
    if (params?.id) {
      return $api.get<AdsData>(`/api/ads/${params.id}`);
    }

    return Promise.reject(new Error('Empty id'));
  }

  static async getAdsList(params?: GetAdsListParams) {
    return $api.get<PagebleResponse<AdsData>>(`/api/ads`, {
      params,
    });
  }
}
