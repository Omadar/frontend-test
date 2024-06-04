import { Coating } from './coatings';

export interface ProductSelected {
  product: {
    id: number;
    name: string;
    imageUrl: string;
  };
  model: {
    id: number;
    name: string;
    imageUrl: string;
    modelCode: string;
  };
}

export interface ProductSelectMeasures {
  width: number;
  length: number;
  height: number;
}

export interface ProductSelectMaterial {
  material: {
    id: number;
    name: string;
    gram: number;
    imageUrl: string;
  };
  materialPrice: {
    id: number;
    materialId: number;
    amount: number;
    price: number;
  };
}

export interface ProductSelectPrinting {
  id: number;
  printing: string;
}

export interface ProductSelectCoating {
  coating: Coating;
}

export interface ProductSelectSpecialTechnic {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}
[];

export interface ProductSelectArtwork {
  id: string;
  name: string;
}

export interface ProductSelectSimple {
  id: string;
  name: string;
  price: number;
}
