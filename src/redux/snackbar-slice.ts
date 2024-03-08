import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface Snackbar {
  isOpen: boolean;
  message: string;
  isSuccess: boolean;
  isLeft: boolean;
}

const initialState: Snackbar = {
  isOpen: false,
  message: "",
  isSuccess: false,
  isLeft: true,
};

const snackbarSlice = createSlice({
  name: "snackbarSlice",
  initialState,
  reducers: {
    setOpenSnackbar(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
    setSnackbar(state, action: PayloadAction<Partial<Snackbar>>) {
      state.isOpen = true;
      state.message = action.payload.message || "";
      state.isSuccess = action.payload.isSuccess || false;
      state.isLeft =
        action.payload.isLeft !== undefined ? action.payload.isLeft : true;
    },
  },
});

export const { setOpenSnackbar, setSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
