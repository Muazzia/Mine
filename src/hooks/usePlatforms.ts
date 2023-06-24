import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import ApiClient, { FetchResponse } from "../services/api-client";
import ms from "ms";

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
    initialData: platforms,
    staleTime: ms("24h"),
  });
};

export default usePlatforms;
