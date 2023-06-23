import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import axios from "axios";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    initialData: { count: genres.length, results: genres },
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useGenres;
