import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../stroe";
import { IAuth } from "@/interface/createOrder";

const imageUrl =
  "https://images.unsplash.com/photo-1561948955-570b270e7c36?q=80&w=2101&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const initialState: IAuth = {
  token: "",
  username: "",
  surname: "",
  email: "",
  imageUrl: "",
  isAuth: false,
};
const appSlices = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    logIn: (state, action) => {
      const dataProfile = {
        token: "oYjsaskfjklweooisad54wer",
        username: "Jake",
        surname: "oppa",
        email: action.payload,
        imageUrl: imageUrl,
        isAuth: true,
      };
      sessionStorage.setItem("authProfile", JSON.stringify(dataProfile));
      return {
        token: "oYjsaskfjklweooisad54wer",
        username: "Jake",
        surname: "oppa",
        email: action.payload,
        imageUrl: imageUrl,
        isAuth: true,
      };
    },
  },
});

export const { logOut, logIn } = appSlices.actions;
export const authSelector = (state: RootState) => state.authSlices;
export default appSlices.reducer;
