import {
  calcTotalExpensesPerDay,
  groupExpensesByDay,
} from "../utils/localstorage";
import { Expense as ExpenseType } from "../types";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import Expense from "./expense";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function Expenses(): JSX.Element {
  const { expenses } = useSelector((state: RootState) => state.expenses);

  // get all expenses grouped by day
  const groupedExpenses = groupExpensesByDay(expenses);

  // convert it to two grids, each of which contains all expenses in that day
  const groupedExpensesContent = Object.keys(groupedExpenses).map(
    (expensesDay, index, array) => {
      const isLastDay = index === array.length - 1;
      return (
        <ExpensesPerDay
          key={expensesDay}
          expenses={groupedExpenses[expensesDay]}
          day={expensesDay}
          isLastDay={isLastDay}
        />
      );
    }
  );

  // merge the two grids in one box
  const ExpensesList = (
    <Box sx={{ display: "flex", flexDirection: "column", mt: "1rem" }}>
      {groupedExpensesContent}
    </Box>
  );

  return Object.keys(groupedExpenses).length > 0 ? (
    ExpensesList
  ) : (
    <Box>
      <Typography sx={{ textAlign: "center" }}> No Expenses Found! </Typography>
    </Box>
  );
}

function ExpensesPerDay({
  expenses,
  day,
  isLastDay,
}: {
  expenses: ExpenseType[];
  day: string;
  isLastDay: boolean;
}): JSX.Element {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontWeight: "600" }}>{day} </Typography>
        <Typography sx={{ fontWeight: "600" }}>
          Total: {calcTotalExpensesPerDay(expenses)} EGP
        </Typography>
      </Stack>
      <Grid container spacing={2}>
        {expenses.map((e: ExpenseType) => {
          return <Expense key={e.id} expense={e} />;
        })}
      </Grid>
      {!isLastDay && <Divider sx={{ margin: "1rem 0rem" }} />}
    </Box>
  );
}
