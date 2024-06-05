export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  models: Model[];
}

export interface Model {
  id: number;
  name: string;
  imageUrl: string;
  modelCode: string;
}