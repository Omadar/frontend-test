export interface Material {
  id: number;
  name: string;
  gram: number;
  imageUrl: string;
  materialPrice: MaterialPrice[];
}

export interface MaterialPrice {
  id: number;
  materialId: number;
  amount: number;
  price: number;
}
