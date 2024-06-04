import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../stroe";

const initialState: boolean = false;
const appSlices = createSlice({
  name: "loading",
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      return action.payload;
    },
  },
});

export const { setLoading } = appSlices.actions;
export const loadingSelector = (state: RootState) => state.loadingSlices;
export default appSlices.reducer;
