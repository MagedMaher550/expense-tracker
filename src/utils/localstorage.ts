import { Expense } from "../types";

export const getData = (): Expense[] => {
  if (typeof window !== "undefined") {
    const storedExpenses = localStorage.getItem("expenses");
    if (storedExpenses && storedExpenses.length > 0) {
      return JSON.parse(storedExpenses);
    }
    return [];
  }
  return [];
};

export const addExpense = (expense: Partial<Expense>): void => {
  if (typeof window !== "undefined") {
    const storedExpenses = localStorage.getItem("expenses");
    const newExpense = { ...expense, id: getUniqueId(), date: new Date() };

    if (storedExpenses !== null) {
      const newExpenses = [...JSON.parse(storedExpenses), newExpense];
      localStorage.setItem("expenses", JSON.stringify(newExpenses));
    } else {
      localStorage.setItem("expenses", JSON.stringify([newExpense]));
    }
  }
};

export const resetExpenses = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("expenses");
  }
};

const getUniqueId = (): string => {
  const currentDate = new Date();
  const dateString = currentDate.toISOString();
  const uniqueId = dateString.replace(/[-T:.Z]/g, "");

  return uniqueId;
};
