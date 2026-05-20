import useSWR from "swr";
import { axiosFetcher } from "./fetcher";

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  thumbnail: string;
  images: string[];
};

export type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export function useProducts() {
  return useSWR<ProductsResponse>("/products", axiosFetcher);
}

export function useProduct(id?: string | number) {
  return useSWR<Product>(id ? `/products/${id}` : null, axiosFetcher);
}
