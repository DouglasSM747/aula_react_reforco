import { http } from "../utils/http";

export type Product = {
  id: string | undefined;
  nome: string;
  preco: number;
  estoque: number;
};

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await http.get<Product[]>("/produto");
  return res.data;
};

export const createProduct = async (product: Product): Promise<Product> => {
  const res = await http.post<Product>("/produto", product);
  return res.data;
};

export const updateProduct = async (product: Product) => {
  const res = await http.put<Product>(`/produto/${product.id}`, product);
  return res.data;
};

export const deleteProduct = async (id: string) => {
  await http.delete(`/produto/${id}`);
};
