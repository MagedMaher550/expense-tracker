import React, { SetStateAction } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { IconMessage2Question } from "@tabler/icons-react";

interface Props {
  title: string;
  subTitle?: string;
  actionTitle: string;
  action: any;
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  content?: JSX.Element;
  disableButton?: boolean;
  largeButton?: boolean;
  isDanger?: boolean;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ConfirmDialog({
  title,
  actionTitle,
  action,
  open,
  setOpen,
  subTitle = "",
  content,
  disableButton = false,
  largeButton = false,
  isDanger = false,
}: Props) {
  const btnStyle = {
    margin: "5px",
    fontSize: "16px",
    width: largeButton ? "45%" : "7.5rem",
    borderRadius: "7px",
    padding: "6px",
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => setOpen(false)}
      PaperProps={{
        sx: {
          textAlign: "center",
          borderRadius: "28px",
          height: "fit-content",
        },
      }}
    >
      <Box sx={{ color: "error.main", paddingTop: "20px" }}>
        <IconMessage2Question />
      </Box>
      <DialogTitle fontWeight={700} sx={{ paddingTop: "5px" }}>
        {title}
      </DialogTitle>
      <DialogContent>
        {!content && subTitle !== "" && (
          <DialogContentText
            id="alert-dialog-slide-description"
            fontWeight={400}
          >
            {subTitle}
          </DialogContentText>
        )}
        {content && content}
      </DialogContent>
      <Box style={{ margin: "15px" }}>
        <Button
          color={isDanger ? "error" : "primary"}
          variant="contained"
          onClick={action}
          style={btnStyle}
          disabled={disableButton}
        >
          {actionTitle}
        </Button>
        <Button
          variant="outlined"
          onClick={() => setOpen(false)}
          style={btnStyle}
        >
          Cancel
        </Button>
      </Box>
    </Dialog>
  );
}

export default ConfirmDialog;
