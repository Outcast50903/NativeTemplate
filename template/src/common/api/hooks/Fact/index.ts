import { useQuery } from "@tanstack/react-query";

import { fetchFact } from "./request";

const useQueryFact = () => {
  const factQuery = useQuery(['fact'], fetchFact);

  return {
    factQuery,
  };
};

export default useQueryFact;
