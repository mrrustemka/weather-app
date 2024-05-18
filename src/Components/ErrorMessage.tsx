import { Typography } from "@mui/material";

function ErrorMessage(error: { error: string }) {
  return (
    <Typography
      component="p"
      sx={{ textAlign: "center", color: "#9a0202", padding: "8px" }}
    >
      {error.error}
    </Typography>
  );
}

export default ErrorMessage;
