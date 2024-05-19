import { Typography } from "@mui/material";

function ErrorMessage(error: { error: string }) {
  return (
    <Typography
      component="p"
      sx={{
        textAlign: "center",
        color: "#9a0202",
        padding: "8px",
        fontFamily: "RobotoMono, sans-serif",
      }}
    >
      {error.error}
    </Typography>
  );
}

export default ErrorMessage;
