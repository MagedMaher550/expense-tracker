import { Box, Stack } from "@mui/material";
import Image from "next/image";
import React, { SetStateAction } from "react";
import AddExpense from "@/src/components/expense-controls/action-sheet";
import ResetExpenses from "@/src/components/expense-controls/reset-expenses";
import ModalButton from "./ModalButton";
import Search from "./search";

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
        justifyContent: "space-evenly",
        marginBottom: "2rem",
      }}
    >
      <Image
        alt="Expense Tracker"
        height={40}
        src="/logo.png" // Assuming your image is in the public directory
        style={{
          display: "block",
          margin: "0 auto",
        }}
        width={170}
      />
      <Search width="50%" />
      <Stack direction="row" sx={{ marginLeft: "5%" }}>
        <ModalButton setOpen={setAddExpense} label="Add Expense" mr />
        <ModalButton
          setOpen={setResetExpenses}
          label="Reset Expenses"
          isDanger
        />

        <AddExpense open={addExpense} setOpen={setAddExpense} />
        <ResetExpenses open={resetExpenses} setOpen={setResetExpenses} />
      </Stack>
    </Box>
  );
}

export default ExpensesControls;
