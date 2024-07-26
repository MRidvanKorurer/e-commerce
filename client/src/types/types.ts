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
