import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FactResponse, handleFactSelectedAtom } from "common";
import { useSetAtom } from "jotai";
import AxiosHttpClient from "utils/api";

const API = new AxiosHttpClient(process.env.API_URL ?? '');

const useQueryFact = () => {
  const handleFactSelected = useSetAtom(handleFactSelectedAtom);
  const queryClient = useQueryClient();

  const factQuery = useQuery(['fact'], () => API.get<FactResponse>('fact'), {
    onSuccess(data) {
      handleFactSelected(data.fact);
      return data;
    },
    onError() {
      queryClient.setQueryData(['fact'], null);

      return null;
    },
  });

  return {
    factQuery,
  };
};

export default useQueryFact;
