import AxiosHttpClient from 'utils/api';

export const API = new AxiosHttpClient(process.env.API_URL ?? '');

export * from './graphql';
export * from './hooks';
export * from './queryClient';
export * from './types';
