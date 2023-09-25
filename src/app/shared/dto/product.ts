export type Product = {
  name: string;
  price: number;
  quantity: number;
  id: string;
};

export type ProductCatalog = Omit<Product, "quantity" | "id">;

export type ProductAlter = Omit<Product, "id">;
