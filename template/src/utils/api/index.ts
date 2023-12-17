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
        ...headers,
      },
    });
  }

  async get<TResponse>(url: string): Promise<TResponse> {
    const { data } = await this.api.get<TResponse>(url);
    return data;
  }

  async post<TResponse, UBody>(
    url: string,
    body: UBody,
  ): Promise<TResponse> {
    const {data} = await this.api.post<TResponse>(url, body);
    console.log('data', data);
    
    return data;
  }

  async put<TResponse, UBody>(
    url: string,
    body: UBody,
  ): Promise<TResponse> {
    const {data} = await this.api.put<TResponse>(url, body);
    return data;
  }

  async patch<TResponse, UBody>(
    url: string,
    body: UBody,
  ): Promise<TResponse> {
    const {data} = await this.api.patch<TResponse>(url, body);
    return data;
  }

  async delete<TResponse>(
    url: string,
  ): Promise<TResponse> {
    const {data} = await this.api.delete<TResponse>(url);
    return data;
  }
}
