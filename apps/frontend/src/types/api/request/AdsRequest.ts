// Изначально предположил, что типы вынесены отдельным пакетом для монорепозитория, но пришлось продублировать
export interface AdsRequest {
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  city?: string;
  district?: string;
}
