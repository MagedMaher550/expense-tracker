"use client";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import Expenses from "@/src/components/expenses-list";
import Loader from "@/src/packages/components/loader";

export default function ExpensesHome(): JSX.Element {
  const [screenLoaded, setScreenLoaded] = useState<boolean>(false);

  useEffect(() => {
    setScreenLoaded(true);
  }, []);

  return screenLoaded ? (
    <Box sx={{ margin: "1rem 0.5rem" }}>
      <Expenses />
    </Box>
  ) : (
    <Loader />
  );
}
