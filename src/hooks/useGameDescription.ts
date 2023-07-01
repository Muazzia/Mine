import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api-client";

interface GameDescriptionProps {
  id: number;
  name: string;
  description: string;
}

const useGameDescription = (id: number | undefined) => {
  return useQuery({
    queryKey: ["gamedes", id],
    queryFn: () => api.get<GameDescriptionProps>(`/games/${id}`),
  });
};

export default useGameDescription;
