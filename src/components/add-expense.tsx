"use client";
import React, { SetStateAction } from "react";
import ConfirmDialog from "../packages/components/confirm-dialogue";
import { Box, Stack, TextField } from "@mui/material";
import { addExpense } from "../utils/localstorage";
import { setSnackbar } from "../redux/snackbar-slice";
import { useDispatch } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

interface AddExpenseProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

function AddExpense({ open, setOpen }: AddExpenseProps): JSX.Element {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      title: "",
      category: "",
      price: 0,
      quantity: 0,
    },
    resolver: zodResolver(
      z.object({
        title: z.string().min(1, { message: "Title is required" }),
        category: z.string().min(1, { message: "Category is required" }),
        price: z.coerce.number().min(1, { message: "Price is required" }),
        quantity: z.coerce.number().min(1, { message: "Quantity is required" }),
      })
    ),
  });

  const onSubmit = (data: any) => {
    addExpense(data);
    dispatch(
      setSnackbar({
        message: "Expense Added Successfully",
        isSuccess: true,
      })
    );
    setOpen(false);
  };

  return (
    <ConfirmDialog
      title="Add Expense"
      actionTitle="Add"
      action={handleSubmit(onSubmit)}
      open={open}
      setOpen={setOpen}
      content={
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <TextField
              error={Boolean(errors.title)}
              {...register("title")}
              fullWidth
              helperText={errors.title?.message}
              id="title"
              label="Title"
              name="title"
              required
              sx={{ marginBottom: "1rem" }}
            />
            <TextField
              error={Boolean(errors.category)}
              {...register("category")}
              fullWidth
              helperText={errors.category?.message}
              id="category"
              label="Category"
              name="category"
              required
              sx={{ marginBottom: "1rem" }}
            />
            <Stack direction="row">
              <TextField
                type="number"
                error={Boolean(errors.price)}
                {...register("price")}
                fullWidth
                helperText={errors.price?.message}
                id="price"
                label="Price"
                name="price"
                required
                sx={{ marginRight: "2.5%", width: "47.5%" }}
              />
              <TextField
                type="number"
                error={Boolean(errors.quantity)}
                {...register("quantity")}
                fullWidth
                helperText={errors.quantity?.message}
                id="quantity"
                label="Quantity"
                name="quantity"
                required
                sx={{ marginLeft: "2.5%", width: "47.5%" }}
              />
            </Stack>
          </Box>
        </form>
      }
    />
  );
}

export default AddExpense;
