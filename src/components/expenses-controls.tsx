import { Box, Button } from "@mui/material";
import React, { SetStateAction } from "react";
import AddExpense from "@/src/components/action-sheet";
import ResetExpenses from "@/src/components/reset-expenses";

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

interface ModalButtonProps {
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  mr?: boolean;
  isDanger?: boolean;
  label: string;
}

function ModalButton({
  setOpen,
  mr,
  label,
  isDanger,
}: ModalButtonProps): JSX.Element {
  return (
    <Button
      color={isDanger ? "error" : "primary"}
      sx={{ mr: mr ? "1rem" : "" }}
      variant="contained"
      onClick={() => {
        setOpen(true);
      }}
    >
      {label}
    </Button>
  );
}
