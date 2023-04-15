import axios from 'axios';
import { Base } from '../config';

const config = {
  baseURL: Base.url,
  timeout: 5000,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
};
const service = axios.create(config);
export default service;
