import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { Game } from "../entities/Game";

const api = new ApiClient<Game>("/games");

const useGameDescription = (slug: string) => {
  return useQuery({
    queryKey: ["gamedes", slug],
    queryFn: () => api.getGame(slug),
  });
};

export default useGameDescription;
