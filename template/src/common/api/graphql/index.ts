import { API } from "common";

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
