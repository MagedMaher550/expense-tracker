"use client";
// import Register from '@src/components/auth/register'
import "./globals.css";
import { useSelector } from "react-redux";
import SnackbarComponent from "../packages/components/snackbar-component";
import { store, Provider } from "../redux";
import type { RootState } from "../redux/store";
import ExpensesHome from "./expenses/page";
import ExpensesControls from "../components/expense-controls/expenses-controls";
import { useState } from "react";

function ChildRootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const { isOpen, message, isSuccess } = useSelector(
    (state: RootState) => state.snackbar
  );

  const [addExpense, setAddExpense] = useState<boolean>(false);
  const [resetExpenses, setResetExpenses] = useState<boolean>(false);

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <ExpensesControls
            addExpense={addExpense}
            resetExpenses={resetExpenses}
            setAddExpense={setAddExpense}
            setResetExpenses={setResetExpenses}
          />
          <ExpensesHome />
          <SnackbarComponent
            autoHideDuration={2000}
            feedbackError={!isSuccess}
            feedbackSuccess={isSuccess}
            message={message}
            open={isOpen}
          />
        </Provider>
      </body>
    </html>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Provider store={store}>
      <ChildRootLayout> {children}</ChildRootLayout>
    </Provider>
  );
}
