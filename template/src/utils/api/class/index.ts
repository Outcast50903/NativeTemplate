/* eslint-disable no-unused-vars */
export default abstract class HttpClient {
  abstract get<TData>(url: string): Promise<TData>;
  abstract post<TData, Ubody>(url: string, data: Record<string, Ubody>): Promise<TData>;
  abstract put<TData, Ubody>(url: string, data: Record<string, Ubody>): Promise<TData>;
  abstract patch<TData, Ubody>(url: string, data: Record<string, Ubody>): Promise<TData>;
  abstract delete<TData, Ubody>(url: string, data?: Record<string, Ubody>): Promise<TData>;
}
