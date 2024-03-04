export interface PaginatedResponseDto<T extends object> {
  total: number;
  page: number;
  pageSize: number;
  results: T[]
}
