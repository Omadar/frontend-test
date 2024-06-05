import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../stroe";
import { ISpecialTechnic } from "@/interface/createOrder";

const initialState: ISpecialTechnic[] = [];
const appSlices = createSlice({
  name: "specialTechnic",
  initialState: initialState,
  reducers: {
    setSpecialTechnic: (state, action) => {
      return action.payload;
    },
    setDefaultSpecialTechnic: (state, action) => {
      return [];
    },
  },
});

export const { setSpecialTechnic, setDefaultSpecialTechnic } =
  appSlices.actions;
export const specialTechnicSelector = (state: RootState) =>
  state.specialTechnicSlices;
export default appSlices.reducer;
