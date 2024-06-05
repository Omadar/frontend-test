import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../stroe";
import material from "../../../public/api/material.json";
import { IMaterials } from "@/interface/createOrder";

const initialState: IMaterials = {
  ...material.materials[0],
};

const appSlices = createSlice({
  name: "material",
  initialState: initialState,
  reducers: {
    setMaterialPrice: (state, action) => {
      return action.payload;
    },
  },
});

export const { setMaterialPrice } = appSlices.actions;
export const materialSelector = (state: RootState) => state.materialSlices;
export default appSlices.reducer;
