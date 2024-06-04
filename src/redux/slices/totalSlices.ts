import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../stroe";
import { dataTotalState } from "@/services/dataDefault";
const initialState = dataTotalState;
const appSlices = createSlice({
  name: "total",
  initialState: initialState,
  reducers: {
    setTotal: (state, action) => {
      return {
        ...action.payload,
      };
    },
    setDefaultTotal: (state, action) => {
      return dataTotalState;
    },
  },
});

export const { setTotal, setDefaultTotal } = appSlices.actions;
export const totalSelector = (state: RootState) => state.totalSlices;
export default appSlices.reducer;
