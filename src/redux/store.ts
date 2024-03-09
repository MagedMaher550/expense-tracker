import type { Action } from "redux";
import type { ThunkAction, Middleware } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import snackbarReducer from "./snackbar-slice";
import expensesSlice from "./expenses-slice";

const middleware: Middleware[] = [];

const makeStore = () =>
  configureStore({
    reducer: {
      snackbar: snackbarReducer,
      expenses: expensesSlice,
    },
    // devTools: process.env.NODE_ENV === "development",
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
