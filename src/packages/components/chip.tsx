import { CSSProperties } from "react";
import Chip from "@mui/material/Chip";

interface MyChipProps {
  label: string;
  color?: string;
  size?: "small" | "medium";
  borderRadius?: string;
  backgroundColor?: string;
  style?: CSSProperties;
}

function MyChip({
  label,
  color = "#000",
  size = "small",
  borderRadius = "",
  style = {},
  backgroundColor = "#fff",
}: MyChipProps) {
  return (
    <Chip
      label={label}
      size={size}
      sx={{
        ...style,
        borderRadius: borderRadius,
        color: color,
        backgroundColor: backgroundColor,
      }}
    />
  );
}

export default MyChip;
