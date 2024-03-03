
interface Image {
  id: number;
  image: string;
  thumbnail: string;
  user: number;
}
export interface AdItem {
  id: number;
  images: Image[];
  city_name: string;
  district_name: string;
  title: string;
  price: number;
  user: number;
  views: number;
  created_at: string;
  description: string;
}
