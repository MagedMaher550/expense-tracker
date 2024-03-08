import React from "react";
import { getData } from "../utils/localstorage";
import { Expense as ExpenseType } from "../types";
import { Box, Typography } from "@mui/material";
import Expense from "./expense";

export default function Expenses(): JSX.Element {
  const ExpensesList = getData().map((e: ExpenseType) => {
    return <Expense key={e.id} expense={e} />;
  });

  return (
    <Box>
      {ExpensesList.length > 0 ? (
        ExpensesList
      ) : (
        <Box>
          <Typography> No Expenses Found! </Typography>
        </Box>
      )}
    </Box>
  );
}
