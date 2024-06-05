import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../stroe";

type initialStateProps = {
  width: number;
  length: number;
  height: number;
};
const initialState: initialStateProps = {
  width: 100,
  length: 100,
  height: 100,
};
const appSlices = createSlice({
  name: "size",
  initialState: initialState,
  reducers: {
    setSize: (state, action) => {
      return action.payload;
    },
    setDefaultSize: (state, action) => {
      return {
        width: 100,
        length: 100,
        height: 100,
      };
    },
  },
});

export const { setSize, setDefaultSize } = appSlices.actions;
export const sizeSelector = (state: RootState) => state.sizeSlices;
export default appSlices.reducer;
