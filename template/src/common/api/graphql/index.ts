import { API_URL } from "@env";
import AxiosHttpClient from "utils/api";

const API = new AxiosHttpClient(API_URL ?? '', { 
  "Content-Type": "application/json", 
  "x-apollo-operation-name": true, 
  "apollo-require-preflight": true 
});

export async function fetcher<TData, TVariables>(
  query: string, 
  variables?: TVariables
): Promise<TData> {  
  const response = await API.post<TData, { query: string, variables: TVariables | undefined }>('', { 
    query, 
    variables 
  });

  return response;
}
