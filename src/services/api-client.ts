import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
  previous: string | null;
}

export const api = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "58c21096114e400c9beebe505fea902a",
  },
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (params?: AxiosRequestConfig) => {
    return api
      .get<FetchResponse<T>>(this.endpoint, { ...params })
      .then((res) => res.data);
  };
  getGame = (id: string | number) => {
    return api.get<T>(this.endpoint + "/" + id).then((res) => res.data);
  };
}

export default ApiClient;
