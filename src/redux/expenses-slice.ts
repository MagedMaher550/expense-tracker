import { createSlice } from "@reduxjs/toolkit";
import {
  getData,
  addExpense as addExpenseToStorage,
  deleteExpense as deleteExpenseFromStorage,
  transformExpense,
} from "../utils/localstorage";

const initialState = {
  expenses: getData(),
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense(state, action) {
      state.expenses.push(transformExpense(action.payload));
      addExpenseToStorage(transformExpense(action.payload));
    },
    deleteExpense(state, action) {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
      deleteExpenseFromStorage(action.payload);
    },
    editExpense(state, action) {
      const { id } = action.payload;
      const expenseIndex = state.expenses.findIndex((e) => e.id === id);
      if (expenseIndex !== -1) {
        state.expenses[expenseIndex] = action.payload;
        localStorage.setItem("expenses", JSON.stringify(state.expenses));
      }
    },
    searchExpense(state, action) {
      const searchTerm = action.payload.toLowerCase();
      const expenses = getData();
      const searchResults = expenses.filter(
        (expense) =>
          expense.title.toLowerCase().includes(searchTerm) ||
          expense.category.toLowerCase().includes(searchTerm)
      );
      state.expenses = searchResults;
    },
    clearSearch(state) {
      state.expenses = getData();
    },
  },
});

export const {
  addExpense,
  deleteExpense,
  editExpense,
  searchExpense,
  clearSearch,
} = expensesSlice.actions;

export default expensesSlice.reducer;
