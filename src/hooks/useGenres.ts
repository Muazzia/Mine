import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import ApiClient, { FetchResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll(),
    initialData: {
      count: genres.length,
      results: genres,
      next: "",
      previous: "",
    },
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useGenres;
