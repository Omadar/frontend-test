import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import productSlices from "./slices/productSlices";
import sizeSlices from "./slices/sizeSlices";
import modelSlices from "./slices/modelSlices";
import dataSlices from "./slices/dataSlices";
import materialSlices from "./slices/materialSlices";
import modalSlice from "./slices/modalSlice";
import specialTechnicSlices from "./slices/specialTechnicSlices";
import totalSlices from "./slices/totalSlices";
import cartSlices from "./slices/cartSlices";
import loadingSlices from "./slices/loadingSlices";
import authSlices from "./slices/authSlices";
import confirmOrderSlices from "./slices/confirmOrderSlices";

export const store = configureStore({
  reducer: {
    productSlices,
    sizeSlices,
    modelSlices,
    dataSlices,
    materialSlices,
    modalSlice,
    specialTechnicSlices,
    totalSlices,
    cartSlices,
    loadingSlices,
    authSlices,
    confirmOrderSlices,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
