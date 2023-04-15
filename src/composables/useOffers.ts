import { useQuery } from '@tanstack/vue-query';
import type { AxiosResponse } from 'axios';
import { getOffers } from '@/service/offers';
import type { ResponseApi } from '../types/response-type';

export function useGetOffers() {
  return useQuery<AxiosResponse<ResponseApi[]>>({
    queryKey: ['offers-data'],
    queryFn: getOffers,
  });
}
