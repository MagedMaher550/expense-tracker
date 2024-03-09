import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import { Expense as ExpenseType } from "../types";
import CloseIcon from "@mui/icons-material/Close";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { SetStateAction, useState } from "react";
import ConfirmDialog from "../packages/components/confirm-dialogue";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../redux/expenses-slice";
import EditExpense from "./action-sheet";

function Expense({ expense }: { expense: ExpenseType }): JSX.Element {
  const { id, title, price, quantity, category } = expense;
  const [deleteConfirm, setDeleteConfirm] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);

  const dispatch = useDispatch();

  const pStyle = {
    fontSize: "14px",
    fontWeight: 700,
    fontStyle: "normal",
    lineHeight: "16px",
  };

  const iconStyle = {
    width: "17px",
    height: "17px",
    color: "#7f7575",
  };

  return (
    <Grid
      item
      sx={{
        borderRadius: "0.2rem",
        padding: "0.25rem 0.5rem",
        margin: "1rem 0rem",
        width: "fit-content",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#e0d1d1",
          borderRadius: "2.5rem",
          padding: "0.15rem 1rem",
          position: "relative",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <p style={pStyle}>{title}</p>
          <CloseIcon sx={iconStyle} />
          <p style={pStyle}>{quantity}</p>

          <Chip
            label={category}
            size="small"
            sx={{
              margin: "0.3rem 0rem 0.3rem 0.7rem",
              backgroundColor: "#fff",
            }}
            variant="filled"
          />
        </Stack>

        <Stack
          sx={{ display: "flex", flexDirection: "row", marginLeft: "1.5rem" }}
        >
          <IconEdit
            size="1.25rem"
            style={{
              marginRight: "0.4rem",
              cursor: "pointer",
              color: "#3e420d",
            }}
            onClick={() => setOpenEdit(true)}
          />
          <IconTrash
            cursor="pointer"
            size="1.25rem"
            color="red"
            onClick={() => {
              setDeleteConfirm(true);
            }}
          />
        </Stack>

        <Typography
          sx={{
            fontSize: "0.8rem",
            fontWeight: 600,
            position: "absolute",
            top: "-8px",
            right: "0",
            color: "#000",
          }}
        >
          {price * quantity} EGP
        </Typography>
      </Box>
      <ConfirmDialog
        isDanger
        title="Are you sure you want to delete this expense?"
        actionTitle="Delete"
        action={() => {
          dispatch(deleteExpense(id));
          setDeleteConfirm(false);
        }}
        open={deleteConfirm}
        setOpen={setDeleteConfirm}
      />
      <EditExpense
        open={openEdit}
        setOpen={setOpenEdit}
        expense={expense}
        isEdit
      />
    </Grid>
  );
}

export default Expense;
