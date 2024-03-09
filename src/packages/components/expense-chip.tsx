import { Box, Chip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MyChip from "./chip";

interface ExpenseChipProps {
  title: string;
  category: string;
  quantity: number;
}

export default function ExpenseChip({
  title,
  quantity,
  category,
}: ExpenseChipProps): JSX.Element {
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "blue",
        borderRadius: "2.5rem",
        padding: "0rem 1rem",
      }}
    >
      <p style={pStyle}>{title}</p>
      <CloseIcon sx={iconStyle} />
      <p style={pStyle}>{quantity}</p>

      <Chip
        label={category}
        size="small"
        sx={{ margin: "0.3rem", backgroundColor: "#e0d1d1" }}
        variant="filled"
      />
    </Box>
  );
}
