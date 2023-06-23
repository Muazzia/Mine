import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig) => {
  return useQuery<FetchResponse<T>, Error>({
    queryKey: ["Games", requestConfig],
    queryFn: () =>
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          ...requestConfig,
        })
        .then((res) => res.data),
  });

  // useEffect(
  //   () => {
  //     const controller = new AbortController();

  //     setLoading(true);
  //     apiClient
  //       .get<FetchResponse<T>>(endpoint, {
  //         signal: controller.signal,
  //         ...requestConfig,
  //       })
  //       .then((res) => {
  //         setData(res.data.results);
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         if (err instanceof CanceledError) return;
  //         setError(err.message);
  //         setLoading(false);
  //       });

  //     return () => controller.abort();
  //   },
  //   deps ? [...deps] : []
  // );
};

export default useData;
