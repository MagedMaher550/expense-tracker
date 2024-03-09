"use client";
import {
  Typography,
  Button,
  Container,
  useMediaQuery,
  Stack,
} from "@mui/material";
import { useRouter } from "next/navigation";

interface CustomErrorProps {
  href: string;
  header: string;
  subHeader: string;
  is403?: boolean;
}

export default function CustomError({
  href,
  header,
  subHeader,
  is403 = false,
}: CustomErrorProps) {
  const smallScreens = useMediaQuery("(max-width:640px)");
  const router = useRouter();

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    direction: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    transform: "translate(-5%,-5%)",
  };
  const headerStyle = {
    color: "#2e3440",
    fontSize: smallScreens ? "2.55rem" : "3.15rem",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
  };

  const subHeaderStyle = {
    color: "#2e3440",
    fontSize: smallScreens ? "1.25rem" : "1.5rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  return (
    <Container maxWidth="sm" sx={containerStyle}>
      <Typography gutterBottom sx={headerStyle}>
        {header}
      </Typography>
      <Typography paragraph sx={subHeaderStyle} variant="h5">
        {subHeader}
      </Typography>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Typography paragraph sx={subHeaderStyle} variant="h5">
          You can go
        </Typography>
        <Button
          onClick={() => {
            if (is403) window.location.href = href;
            else router.replace(href);
          }}
          color="primary"
          sx={{ pb: 2.5, fontSize: "1.5rem", cursor: "pointer" }}
          variant="text"
        >
          Home
        </Button>
      </Stack>
    </Container>
  );
}
