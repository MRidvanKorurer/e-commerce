
// category type
export interface ICategory {
  id: number;
  image: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ICategoryRes {
  success: boolean;
  categories: ICategory[];
}


// product type
export interface IProduct {
  id: string;
  categoryId: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  images:  string;
  attributes: string;
  brand: string;
  stock: number;
  rating: number;
  isFlash: boolean;
}

export interface IProductRes {
  success: boolean,
  products: IProduct[]
}
