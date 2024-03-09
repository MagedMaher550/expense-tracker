"use client";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import Expenses from "@/src/components/expenses-list";
import Loader from "@/src/packages/components/loader";
import ExpensesControls from "@/src/components/expenses-controls";

export default function ExpensesHome(): JSX.Element {
  const [addExpense, setAddExpense] = useState<boolean>(false);
  const [resetExpenses, setResetExpenses] = useState<boolean>(false);
  const [screenLoaded, setScreenLoaded] = useState<boolean>(false);

  useEffect(() => {
    setScreenLoaded(true);
  }, []);

  return screenLoaded ? (
    <Box sx={{ margin: "1rem 0.5rem" }}>
      <ExpensesControls
        addExpense={addExpense}
        resetExpenses={resetExpenses}
        setAddExpense={setAddExpense}
        setResetExpenses={setResetExpenses}
      />
      <Expenses />
    </Box>
  ) : (
    <Loader />
  );
}
