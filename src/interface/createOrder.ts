export interface IProduct {
  id: number;
  name: string;
  imageUrl: string;
  createdDate: string;
  modifiedDate: string;
  models: IModels;
}
export interface ICreateOrderToCart {
  id: number;
  name: string;
  imageUrl: string;
  createdDate: string;
  modifiedDate: string;
  models: IModels[];
  size?: ISize;
  material?: IMaterials;
  printing?: {
    front?: boolean;
    back?: boolean;
  };
  coating?: ICoating;
  specialTechnic?: ISpecialTechnic[];
  artWork?: {
    artwork: boolean;
    name: string;
  };
  productSample?: IProductSample;
  note?: string;
  total?: ITotal;
}
export interface ITotal {
  totalPrice: number;
  totalAmount: number;
  totalSpecTech: number;
  totalSample: number;
  price: number;
  amount: number;
}
export interface IProductSample {
  isMockupProof: boolean;
  name: string;
  price: number;
}
export interface ILink {
  isLink?: boolean;
  price?: number;
}
export interface IMockup {
  isMockup?: boolean;
  price?: number;
}
export interface ISize {
  width?: number;
  length?: number;
  height?: number;
}
export interface ISpecialTechnic {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  createdDate: string;
  modifiedDate: string;
}
export interface ICoating {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  createdDate: string;
  modifiedDate: string;
}
export interface IModels {
  id: number;
  name: string;
  imageUrl: string;
  modelCode: string;
  productId: number;
  createdDate: string;
  modifiedDate: string;
}
export interface IMaterials {
  id: number;
  name: string;
  gram: number;
  imageUrl: string;
  createdDate: string;
  modifiedDate: string;
  materialPrice?: IMaterialPrice[];
}
export interface IMaterialPrice {
  id: number;
  materialId: number;
  amount: number;
  price: number;
  createdDate: string;
  modifiedDate: string;
}
export interface IAuth {
  token: string;
  username: string;
  surname: string;
  email: string;
  imageUrl: string;
  isAuth: boolean;
}
export interface ICart {
  [id: string]: {
    id: number;
    name: string;
    imageUrl: string;
    createdDate: string;
    modifiedDate: string;
    models: IModels[];
    size?: ISize;
    material?: IMaterials;
    printing?: {
      front?: boolean;
      back?: boolean;
    };
    coating?: ICoating;
    specialTechnic?: ISpecialTechnic[];
    artWork?: {
      artwork: boolean;
      name: string;
    };
    productSample?: IProductSample;
    note?: string;
    total?: any;
  };
}
