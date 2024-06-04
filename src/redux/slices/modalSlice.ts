import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../stroe";

const initialState: boolean = false;
const appSlices = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    setModal: (state, action) => {
      return action.payload;
    },
  },
});

export const { setModal } = appSlices.actions;
export const modalSelector = (state: RootState) => state.modalSlice;
export default appSlices.reducer;
