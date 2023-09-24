import axios, {AxiosInstance} from 'axios';

import HttpClient from './class';
import {HeaderType} from './types';

export default class AxiosHttpClient extends HttpClient {
  api: AxiosInstance;

  constructor(baseUrl: string, headers?: HeaderType) {
    super();
    this.api = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.api.interceptors.request.use(config => {
      headers?.Authenticate
        ? (config.headers.Authenticate =
            headers?.Authenticate || headers?.Authorization || '')
        : (config.headers.Authorization =
            headers?.Authenticate || headers?.Authorization || '');

      return config;
    });
    // this.api.defaults.headers.common['Authenticate'] = `${headers?.Authenticate}`
  }

  async get<TResponse>(url: string): Promise<TResponse> {
    try {
      const {data} = await this.api.get<TResponse>(url);
      return data;
    } catch (error) {
      return null as TResponse;
    }
  }

  async post<TResponse, UBody>(
    url: string,
    body: UBody,
  ): Promise<TResponse> {
    try {
      const {data} = await this.api.post<TResponse>(url, body);
      return data;
    } catch (error) {
      return null as TResponse;
    }
  }

  async put<TResponse, UBody>(
    url: string,
    body: UBody,
  ): Promise<TResponse> {
    try {
      const {data} = await this.api.put<TResponse>(url, body);
      return data;
    } catch (error) {
      return null as TResponse;
    }
  }

  async patch<TResponse, UBody>(
    url: string,
    body: UBody,
  ): Promise<TResponse> {
    try {
      const {data} = await this.api.patch<TResponse>(url, body);
      return data;
    } catch (error) {
      return null as TResponse;
    }
  }

  async delete<TResponse>(
    url: string,
  ): Promise<TResponse> {
    try {
      const {data} = await this.api.delete<TResponse>(url);
      return data;
    } catch (error) {
      return null as TResponse;
    }
  }
}
