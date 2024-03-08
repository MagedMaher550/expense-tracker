"use client";
import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import AddExpense from "@/src/components/add-expense";
import ResetExpenses from "@/src/components/reset-expenses";
import Expenses from "@/src/components/expenses-list";
import Loader from "@/src/packages/components/loader";

export default function ExpensesHome(): JSX.Element {
  const [addExpense, setAddExpense] = useState<boolean>(false);
  const [resetExpenses, setResetExpenses] = useState<boolean>(false);
  const [screenLoaded, setScreenLoaded] = useState<boolean>(false);

  useEffect(() => {
    setScreenLoaded(true);
  }, []);

  return screenLoaded ? (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Button
          sx={{ mr: "1rem" }}
          variant="contained"
          onClick={() => {
            setAddExpense(true);
          }}
        >
          Add Expense
        </Button>
        <Button
          color="error"
          variant="contained"
          onClick={() => {
            setResetExpenses(true);
          }}
        >
          Reset Expenses
        </Button>
        <AddExpense open={addExpense} setOpen={setAddExpense} />
        <ResetExpenses open={resetExpenses} setOpen={setResetExpenses} />
      </Box>
      <Expenses />
    </Box>
  ) : (
    <Loader />
  );
}
