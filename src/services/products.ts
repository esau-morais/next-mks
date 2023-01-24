import { Product } from "@/lib/data";

export const findAllProducts = async () => {
  const response = await fetch(
    `https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=name&orderBy=DESC`
  );
  const data = await response.json();
  return data.products as Promise<Product[]>;
};
