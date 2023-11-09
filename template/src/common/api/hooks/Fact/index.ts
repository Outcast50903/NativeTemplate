import { useQuery } from "@tanstack/react-query";
import { API, FactResponse } from "common";

const useQueryFact = () => {
  const factQuery = useQuery(['fact'], () => API.get<FactResponse>('fact'), {});

  return {
    factQuery,
  };
};

export default useQueryFact;
