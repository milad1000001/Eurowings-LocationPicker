import service from '../apis';
import type { ResponseApi } from '../../types/response-type';

export const getOffers = ():Promise<{}> => {
  try {
    return service.get<ResponseApi[]>('/offers');
  } catch (err:any) {
    return err;
  }
};
