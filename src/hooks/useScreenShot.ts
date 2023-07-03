import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { Screenshot } from "../entities/Screenshot";

const ScreenShot = (id: number) => {
  const api = new ApiClient<Screenshot>(`/games/${id}/screenshots`);
  return useQuery({
    queryKey: ["screenshot", id],
    queryFn: api.getAll,
  });
};

export default ScreenShot;
