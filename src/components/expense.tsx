import { Box, Stack, Typography } from "@mui/material";
import { Expense as ExpenseProps } from "../types";
import { formatDate } from "../utils/formatDate";

function Expense({ expense }: { expense: ExpenseProps }): JSX.Element {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid gray",
        borderRadius: "0.2rem",
        padding: "0.25rem 3rem 0.25rem 1rem",
        width: "17.5rem",
        margin: "1rem 0rem",
      }}
    >
      <Typography> title: {expense.title} </Typography>
      <Typography> price: {expense.price} </Typography>
      <Typography> quantity: {expense.quantity} </Typography>
      <Typography> category: {expense.category} </Typography>
      <Typography> date: {formatDate(expense.date)} </Typography>
    </Box>
  );
}

export default Expense;
