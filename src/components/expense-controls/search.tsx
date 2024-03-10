import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useDispatch } from "react-redux";
import { searchExpense, clearSearch } from "@/src/redux/expenses-slice";
import { IconSearch } from "@tabler/icons-react";

export default function Search({ width }: { width: string }) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(
      z.object({
        searchQuery: z.string().optional(),
      })
    ),
    defaultValues: {
      searchQuery: "",
    },
  });

  const onSubmit = (data: any) => {
    dispatch(searchExpense(data.searchQuery));
  };

  const clearSearhHandler = () => {
    dispatch(clearSearch());
    setValue("searchQuery", "");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "end",
        width,
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "80%" }}>
        <Box>
          <TextField
            error={Boolean(errors.searchQuery)}
            {...register("searchQuery")}
            fullWidth
            helperText={errors.searchQuery?.message}
            id="searchQuery"
            label="Search"
            name="searchQuery"
            size="small"
            sx={{ backgroundColor: "#fff" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconSearch
                    cursor="pointer"
                    onClick={handleSubmit(onSubmit)}
                  />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </form>
      <Button variant="contained" onClick={clearSearhHandler}>
        clear
      </Button>
    </Box>
  );
}
