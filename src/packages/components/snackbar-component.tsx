import {
  Box,
  Button,
  IconButton,
  Snackbar,
  SnackbarContent,
  Typography,
} from "@mui/material";
import type { CSSProperties } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSnackbar } from "../../redux/snackbar-slice";
import { IconX } from "@tabler/icons-react";
// import { RootState } from '../../../apps/admin/src/redux/store'

interface SnackbarProps {
  message: string;
  actionText?: string;
  actionFunction?: any;
  open: boolean;
  feedbackError?: boolean;
  feedbackSuccess?: boolean;
  autoHideDuration?: number;
  setOpen?: (open: boolean) => void;
}

export default function SnackbarComponent({
  autoHideDuration,
  message,
  actionText,
  actionFunction,
  open,
  feedbackError = false,
  feedbackSuccess = false,
  setOpen,
}: SnackbarProps): JSX.Element {
  const { isLeft: snackbarOnLeft } = useSelector(
    (state: unknown) => state.snackbar
  );
  const dispatch = useDispatch();

  const handleClose = (e: any): void => {
    e.preventDefault();
    dispatch(setOpenSnackbar(false));
    if (setOpen) {
      setOpen(false);
    }
  };

  const commonStyle = {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "20px",
    letterSpacing: "0.25px",
    borderRadius: "4px",
    boxShadow:
      "0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)",
    borderStyle: "solid",
    borderWidth: "1px",

    display: "flex",
    height: "48px",
    padding: "0px 16px",
    paddingLeft: "16px",
    alignItems: "center",

    position: "fixed",
    bottom: "20px",
    maxWidth: "calc(100% - 20px)",
  };

  const snackStyle: CSSProperties = feedbackError
    ? {
        color: "var(--Red-Dark, #661920)",
        border: "1px solid var(--red-base, #E63946)",
        background: "var(--red-light, #FFF2F3)",
        borderColor: "error.main",
      }
    : feedbackSuccess
    ? {
        color: "var(--green-dark, #134F32)",
        border: "1px solid var(--green-base, #2BB572)",
        background: "var(--green-light, #F1FAEE)",
        borderColor: "success.main",
      }
    : {
        backgroundColor: "grey.600",
      };

  const action = (
    <Box style={{ alignSelf: "flex-end" }}>
      {actionText && actionFunction ? (
        <Button
          onClick={actionFunction}
          sx={{ color: "primary.primaryLight3", fontWeight: 700 }}
        >
          {actionText}
        </Button>
      ) : null}
      <IconButton color="inherit" onClick={handleClose} size="small">
        <IconX fontSize="small" />
      </IconButton>
    </Box>
  );

  // check if the snackbar should appear on the left or on the right
  if (snackbarOnLeft) {
    snackStyle.left = "15px";
  } else {
    snackStyle.right = "15px";
  }

  return (
    <Snackbar
      autoHideDuration={autoHideDuration || 2000}
      onClose={() => {
        dispatch(setOpenSnackbar(false));
      }}
      open={open}
    >
      <SnackbarContent
        action={action}
        message={
          <Typography fontWeight={600}>
            {message}
            <br />
          </Typography>
        }
        sx={{ ...commonStyle, ...snackStyle }}
      />
    </Snackbar>
  );
}
