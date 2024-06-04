import { createSlice } from "@reduxjs/toolkit";
import products from "../../../public/api/product.json";
import { RootState } from "../stroe";

type initialStateProps = {
  id: number;
  name: string;
  imageUrl: string;
  createdDate: string;
  modifiedDate: string;
  models: {
    id: number;
    name: string;
    imageUrl: string;
    modelCode: string;
    productId: number;
    createdDate: string;
    modifiedDate: string;
  }[];
};
const initialState: initialStateProps = {
  ...products.products[0],
};
const appSlices = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setModel: (state, action) => {
      return action.payload;
    },
    setDefaultProduct: (state, action) => {
      return {
        ...products.products[0],
      };
    },
  },
});

export const { setModel, setDefaultProduct } = appSlices.actions;
export const productSelector = (state: RootState) => state.productSlices;
export default appSlices.reducer;
