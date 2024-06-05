import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../stroe";

const initialState: any = [];
const appSlices = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const data = action.payload;
      const insertAt = 1;
      const dataInitialState = [
        ...initialState.slice(0, insertAt),
        { ...data },
        ...initialState.slice(insertAt),
      ];
      return dataInitialState;
    },
    confirmOrder: (state, action) => {
      return action.payload;
    },
  },
});

export const { addToCart, confirmOrder } = appSlices.actions;
export const cartSelector = (state: RootState) => state.cartSlices;
export default appSlices.reducer;
