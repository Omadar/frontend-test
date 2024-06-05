import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../stroe";

const appSlices = createSlice({
  name: "model",
  initialState: {},
  reducers: {
    setDataModel: (state, action) => {
      return action.payload;
    },
  },
});

export const { setDataModel } = appSlices.actions;
export const modelSelector = (state: RootState) => state.modelSlices;
export default appSlices.reducer;
