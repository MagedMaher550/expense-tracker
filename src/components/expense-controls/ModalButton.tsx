import { Box, Button } from "@mui/material";
import React, { SetStateAction } from "react";

interface ModalButtonProps {
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  mr?: boolean;
  isDanger?: boolean;
  label: string;
}

export default function ModalButton({
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
