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

export const groupExpensesByDay = (
  expenses: Expense[]
): { [key: string]: Expense[] } => {
  const groupedExpenses: { [key: string]: Expense[] } = {};

  expenses.forEach((expense) => {
    const date = new Date(expense.date);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    const dateKey = `${year}-${month}-${day}`;

    groupedExpenses[dateKey] = groupedExpenses[dateKey] || [];
    groupedExpenses[dateKey].push(expense);
  });

  return groupedExpenses;
};

export const addExpense = (expense: Partial<Expense>): void => {
  if (typeof window !== "undefined") {
    const storedExpenses = localStorage.getItem("expenses");

    if (storedExpenses !== null) {
      const newExpenses = [...JSON.parse(storedExpenses), expense];
      localStorage.setItem("expenses", JSON.stringify(newExpenses));
    } else {
      localStorage.setItem("expenses", JSON.stringify([expense]));
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

export const calcTotalExpensesPerDay = (
  expenses: Expense[],
  total = 0
): number => {
  expenses.forEach((e) => {
    total += e.price * e.quantity;
  });
  return total;
};

export const deleteExpense = (expenseId: string): void => {
  if (typeof window !== "undefined") {
    const storedExpenses = getData();
    const expenseIndex = storedExpenses.findIndex((e) => e.id === expenseId);

    if (expenseIndex !== -1) {
      storedExpenses.splice(expenseIndex, 1);

      localStorage.setItem("expenses", JSON.stringify(storedExpenses));
    }
  }
};

export const transformExpense = (expense: Expense): Expense => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${(
    currentDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`;
  return { ...expense, id: getUniqueId(), date: formattedDate };
};
