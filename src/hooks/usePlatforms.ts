import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import ApiClient, { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platform"],
    queryFn: () => apiClient.getAll(),
    initialData: {
      count: platforms.length,
      results: platforms,
      next: "",
      previous: "",
    },
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default usePlatforms;
