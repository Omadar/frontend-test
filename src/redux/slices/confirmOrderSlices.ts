import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../stroe";

const initialState = false;
const appSlices = createSlice({
  name: "confirmOrder",
  initialState: initialState,
  reducers: {
    setConfirmOrder: (state, action) => {
      return action.payload;
    },
  },
});

export const { setConfirmOrder } = appSlices.actions;
export const confirmOrderSelector = (state: RootState) =>
  state.confirmOrderSlices;
export default appSlices.reducer;
