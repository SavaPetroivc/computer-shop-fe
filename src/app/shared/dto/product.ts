export type Product = {
  name: string;
  price: number;
  quantity: number;
  id: string;
};

export type ProductCatalog = Omit<Product, "quantity">;

export type ProductAlter = Omit<Product, "id">;
export type ProductCreateOrder = Pick<Product, "id" | "quantity">;
