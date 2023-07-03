import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { TrailerProp } from "../entities/Trailer";

const useTrailer = (id: number) => {
  const api = new ApiClient<TrailerProp>(`/games/${id}/movies`);
  return useQuery({
    queryKey: ["trailer", id],
    queryFn: api.getAll,
  });
};

export default useTrailer;
