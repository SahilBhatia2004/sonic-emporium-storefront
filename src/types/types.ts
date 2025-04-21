
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  images: string[];
  description: string;
  features: string[];
  specifications: Record<string, string>;
  stock: number;
  isNew?: boolean;
  isFeatured?: boolean;
  isOnSale?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type FilterOption = {
  label: string;
  value: string;
};

export type FilterCategory = {
  id: string;
  name: string;
  options: FilterOption[];
};
