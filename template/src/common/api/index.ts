import { API_URL } from '@env';
import AxiosHttpClient from 'utils/api';

export const API = new AxiosHttpClient(API_URL ?? '');

export * from './hooks';
export * from './queryClient';
