import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import ApiClient, { FetchResponse } from "../services/api-client";
import ms from "ms";

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
    initialData: genres,
    staleTime: ms("24h"), //24h
  });
};

export default useGenres;
