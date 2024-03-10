import { Box } from "@mui/material";
import React, { SetStateAction } from "react";
import AddExpense from "@/src/components/expense-controls/action-sheet";
import ResetExpenses from "@/src/components/expense-controls/reset-expenses";
import ModalButton from "./ModalButton";

interface ExpensesControlsProps {
  addExpense: boolean;
  setAddExpense: React.Dispatch<SetStateAction<boolean>>;
  resetExpenses: boolean;
  setResetExpenses: React.Dispatch<SetStateAction<boolean>>;
}

function ExpensesControls({
  addExpense,
  setAddExpense,
  resetExpenses,
  setResetExpenses,
}: ExpensesControlsProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "end",
      }}
    >
      <ModalButton setOpen={setAddExpense} label="Add Expense" mr />
      <ModalButton setOpen={setResetExpenses} label="Reset Expenses" isDanger />

      <AddExpense open={addExpense} setOpen={setAddExpense} />
      <ResetExpenses open={resetExpenses} setOpen={setResetExpenses} />
    </Box>
  );
}

export default ExpensesControls;
