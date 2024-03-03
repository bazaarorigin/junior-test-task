export interface PagebleResponse<T> {
  total: number;
  page: number;
  pageSize: number;
  results: T[];
}

export interface ImageData {
  id: string;
  image: string;
  thumbnail: string;
  user: string;
}

export interface AdsData {
  id: string;
  title: string;
  description: string;
  city_name: string;
  district_name: string;
  created_at: string;
  views: number;
  user: string;
  price: number;
  images: ImageData[];
}

export interface GetAdsListParams {
  minPrice?: string;
  maxPrice?: string;
  search?: string;
  city?: string;
  district?: string;
}

export interface TypedError {
  error: string;
  message: string;
  statusCode: number;
}
