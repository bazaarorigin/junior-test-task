import { AdImageDto } from './AdImageDto';

// В свагере не указан паттерн для даты, но я предполагаю, что это timestamp
export interface AdDto {
  id: number;
  title: string;
  description: string;
  city_name: string;
  district_name: string;
  created_at: string;
  views: number;
  user: string;
  price: number;
  images: AdImageDto[];
}
