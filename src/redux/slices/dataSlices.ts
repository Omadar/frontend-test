import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../stroe";
import { ICreateOrderToCart } from "@/interface/createOrder";
import { dataInitialState } from "../../services/dataDefault";
const initialState: ICreateOrderToCart = dataInitialState;
const appSlices = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    setData: (state, action) => {
      return {
        ...action.payload,
      };
    },
    setDefaultData: (state, action) => {
      return dataInitialState;
    },
  },
});

export const { setData, setDefaultData } = appSlices.actions;
export const dataSelector = (state: RootState) => state.dataSlices;
export default appSlices.reducer;
