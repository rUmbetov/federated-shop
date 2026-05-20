import { apiClient } from "./client";

export async function axiosFetcher<T>(url: string): Promise<T> {
  const response = await apiClient.get<T>(url);
  return response.data;
}
